import os
import requests
from flask import Blueprint, request, abort, redirect
from models.user import User
from app import db
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

auth_routes = Blueprint('auth_routes', __name__)


DISCORD_CLIENT_ID = os.environ.get('DISCORD_CLIENT_ID')
DISCORD_CLIENT_SECRET = os.environ.get('DISCORD_CLIENT_SECRET')
DISCORD_REDIRECT_URI = 'http://127.0.0.1:5000/auth/discord/callback'

@auth_routes.route('/discord/callback')
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

    print(user_data)
    user = User.query.filter(user_data['id'] == User.discord_id).first()
    print(user)

    return redirect('/')  # Redirect back to the homepage
