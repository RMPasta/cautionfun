import os
import requests
from flask import Flask, render_template, request, url_for, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


from api.user_routes import user_routes
from api.cc_routes import cc_routes
app.register_blueprint(user_routes, url_prefix='/user')
app.register_blueprint(cc_routes, url_prefix='/cc')

migrate = Migrate(app, db)

DISCORD_CLIENT_ID = os.environ.get('DISCORD_CLIENT_ID')
DISCORD_CLIENT_SECRET = os.environ.get('DISCORD_CLIENT_SECRET')
DISCORD_REDIRECT_URI = 'http://127.0.0.1:5000/auth/discord/callback'

@app.route('/auth/discord/callback')
def discord_callback():
    code = request.args.get('code')

    data = {
        'client_id': DISCORD_CLIENT_ID,
        'client_secret': DISCORD_CLIENT_SECRET,
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': DISCORD_REDIRECT_URI,
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
