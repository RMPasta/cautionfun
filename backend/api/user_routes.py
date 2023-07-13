from flask import Blueprint, request, abort
from models.user import User
from app import db

user_routes = Blueprint('user_routes', __name__)

API_KEY = 'zz-top'

# /user/update/USERID
@user_routes.route('/update/<int:id>', methods=['PUT'])
def update_user(id):
    api_key = request.headers.get('X-API-Key')  # Retrieve the API key from the request headers

    if api_key != API_KEY:
        abort(401)  # Unauthorized access

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

# /user/USERID
@user_routes.route('/<int:id>', methods=['GET'])
def get_user(id):
    api_key = request.args.get('api_key')  # Retrieve the API key from the query parameters

    if api_key != API_KEY:
        abort(401)  # Unauthorized access
    user = User.query.get(id)
    return user.to_dict()
