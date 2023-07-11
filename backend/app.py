import os
import csv
from flask import Flask, render_template, request, url_for, redirect
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func
# from cc_price import price
# from cc_info import ccinfo
# from cc_claims import claimsleft
# from testrpc import testrpc
# from flask_cors import CORS

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] =\
        'sqlite:///' + os.path.join(basedir, 'database.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# CORS(app, origins=['http://localhost:3000'])

db = SQLAlchemy(app)

DISCORD_CLIENT_ID = '1094275757397786804'
DISCORD_CLIENT_SECRET = 'KFsknpPWv0Pww8LDh1js8viS1nGnGqYN'

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    twitch_id = db.Column(db.Integer)
    twitch_username = db.Column(db.String)
    discord_id = db.Column(db.Integer)
    discord_username = db.Column(db.String)
    verus = db.Column(db.String)
    eth = db.Column(db.Integer)
    rental = db.Column(db.Integer)
    points = db.Column(db.Integer)
    airdrop_amount = db.Column(db.Integer)
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    bio = db.Column(db.Text)

    def to_dict(self):
        return {
            'id': self.id,
            'twitch_id': self.twitch_id,
            'twitch_username': self.twitch_username,
            'discord_id': self.discord_id,
            'discord_username': self.discord_username,
            'verus': self.verus,
            'eth': self.eth,
            'rental': self.rental,
            'points': self.points,
            'airdrop_amount': self.airdrop_amount,
            'created_at': self.created_at,
        }

    def __repr__(self):
        return f'<User {self.id}>'

# function to loop through csv user file and enter those users into the database
# with app.app_context():
#     def add_users_from_csv():
#         with open('user_info.csv', 'r') as file:
#             reader = csv.DictReader(file)
#             for row in reader:
#                 user = User(
#                     twitch_id=row['Twitch ID Number'],
#                     twitch_username=row['Twitch Username'],
#                     discord_id=row['DiscordID#'],
#                     discord_username=row['Discord Username'],
#                     verus=row['VRSC Address'],
#                     eth=row['ETH address'],
#                     rental=row['Rental Wallet'],
#                     points=row['Points'],
#                     airdrop_amount=row['Airdrop Amount'],
#                 )
#                 db.session.add(user)
#             db.session.commit()
#         return 'Users added to the database'

#     print(add_users_from_csv())

@app.route('/auth/discord/callback')
def discord_callback():
    code = request.args.get('code')

    data = {
        'client_id': DISCORD_CLIENT_ID,
        'client_secret': DISCORD_CLIENT_SECRET,
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': REDIRECT_URI,
        'scope': 'identify'
    }

    headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    # Exchange the authorization code for an access token
    response = requests.post('https://discord.com/api/oauth2/token', data=data, headers=headers)
    access_token = response.json().get('access_token')

    # Use the access token to fetch user information
    headers = {
        'Authorization': f'Bearer {access_token}'
    }
    user_response = requests.get('https://discord.com/api/users/@me', headers=headers)
    user_data = user_response.json()

    # Do something with the user data (e.g., store it in the database)

    return redirect('/')  # Redirect back to the homepage


@app.route('/')
def landing():
    return "hello?"
    # users = User.query.all()
    # return {'users': [user.to_dict() for user in users]}

@app.route('/user/update/<int:id>', methods=['PUT'])
def update_user(id):
    data = request.get_json(force=True)
    user = User.query.get(id)

    if 'twitch_id' in data:
        user.twitch_id = data['twitch_id']
    if 'twitch_username' in data:
        user.twitch_username = data['twitch_username']
    if 'discord_id' in data:
        user.discord_id = data['discord_id']
    if 'discord_username' in data:
        user.discord_username = data['discord_username']
    if 'verus' in data:
        user.verus = data['verus']
    if 'eth' in data:
        user.eth = data['eth']
    if 'rental' in data:
        user.rental = data['rental']
    if 'points' in data:
        user.points = data['points']
    if 'airdrop_amount' in data:
        user.airdrop_amount = data['airdrop_amount']
    if 'bio' in data:
        user.bio = data['bio']

    db.session.commit()

    return user.to_dict()

@app.route('/user/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get(id)
    return user.to_dict()

# @app.route('/getaddress')
# def getaddress():
#     data = testrpc()
#     return str(data)

# @app.route('/price')
# def getprice():
#     data = price()
#     return str(data)

# @app.route('/ccinfo')
# def getccinfo():
#     data = ccinfo()
#     return str(data)

# @app.route('/claimsleft')
# def getclaimleft():
#     data = claimsleft()
#     return str(data)
