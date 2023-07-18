import jwt
import os
import requests
from flask import Blueprint, request, abort, redirect, make_response, jsonify, session
from flask_login import LoginManager, login_user, logout_user, current_user, login_required
from models.user import User
from app import db
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

auth_routes = Blueprint('auth_routes', __name__)


DISCORD_CLIENT_ID = os.environ.get('DISCORD_CLIENT_ID')
DISCORD_CLIENT_SECRET = os.environ.get('DISCORD_CLIENT_SECRET')
DISCORD_REDIRECT_URI = 'http://localhost:3000/'
JWT_SECRET = os.environ.get('JWT_SECRET')

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

    user = User.query.filter(user_data['id'] == User.discord_id).first()


    if user:
        # login_user(user, remember=True)
        # print(current_user.to_dict())
        # print(current_user.is_authenticated())
        # print(current_user.is_active())

        # cookie_value = request.cookies.get('hello-cookie')
        # print("COOKIE VALUE ~~~~~~~~~~~> ", cookie_value)

        session["user_id"] = user.id
        print(session.get("user_id"))

        # User exists, generate a JWT
        # token_payload = {'user_id': user.id}
        # token = jwt.encode(token_payload, JWT_SECRET, algorithm='HS256')
        # response = make_response({"user": user.to_dict()})
        # response.set_cookie('jwt_token', token, httponly=True, samesite='Strict')

        #failed attempt with session
        # session["user_id"] = user.id

        return {"user": user.to_dict()}

    # If user is not found or any other error occurs, return an appropriate response
    return jsonify({'error': 'User not found'})


@auth_routes.route('/discord/cookie')
def discord_cookie():
    token = request.cookies.get('jwt_token')

    if token:
        return token
    return "no token"

@auth_routes.route('/logout', methods=['GET'])
def logout():
    # Clear the JWT token from the client-side (e.g., remove it from local storage or set it to an expired value)
    # response = make_response({'message': 'Logout successful'})
    # response.delete_cookie('jwt_token')
    # print("LOGGED IN USER???? ", current_user.to_dict())
    logout_user()

    return "oh yeah"

# @auth_routes.route('/info', methods=['GET'])
# # @login_required
# def user_info():
#     # print("test")
#     # print("wooooohooooo", current_user.is_active())
#     # print("test2")
#     cookie_value = request.cookies.get('hello-cookie')
#     print("COOKIE VALUE ~~~~~~~~~~~> ", cookie_value)
#     user_id = session.get("user_id")
#     print(user_id)
#     return user_id

@auth_routes.route('/get')
def get():
    test = session.get('test')
    print("2 ~~~~~> ", test)
    return session['test']
