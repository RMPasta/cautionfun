import os
import psycopg2
import requests
from flask import Flask, render_template, request, url_for, redirect, make_response, session
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate
from flask_login import LoginManager, login_user, logout_user, current_user, login_required
from flask_session import Session
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

DATABASE_URL = os.environ.get('DATABASE_URL').replace("postgres://", "postgresql://", 1)

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SESSION_TYPE'] = 'filesystem'
app.config['SECRET_KEY'] = 'your_secret_key'
# app.config['SESSION_PERMANENT'] = False
# app.config['SESSION_USE_SIGNER'] = True
# app.config['SESSION_COOKIE_SAMESITE'] = 'None'
# app.config['SESSION_COOKIE_SECURE'] = True
# app.secret_key = os.environ.get('JWT_SECERET')
# CORS(app)

# Setup login manager
# login = LoginManager()
# login.login_view = 'auth.unauthorized'
# login.init_app(app)




db = SQLAlchemy(app)
CORS(app, origins="*", supports_credentials=True, allow_headers=["Authorization"])
sess = Session(app)
# Create the session table in the database
# Session(app).app.session_interface.db.create_all()
conn = psycopg2.connect(DATABASE_URL, sslmode='require')


from api.user_routes import user_routes
from api.cc_routes import cc_routes
from api.auth_routes import auth_routes
app.register_blueprint(user_routes, url_prefix='/user')
app.register_blueprint(cc_routes, url_prefix='/cc')
app.register_blueprint(auth_routes, url_prefix='/auth')

migrate = Migrate(app, db)
from models import User

@app.route('/')
# @login_required
def landing():
    response = requests.get('https://discord.com/api/oauth2/@me')
    data = response.json()
    print(data)

    return data

@app.route('/set')
# @login_required
def set():
    session['test'] = "testing"
    print(session['test'])
    return session['test']

@app.route('/get')
def get():
    test = session.get('test')
    print("1 ~~~~~> ", test)
    return test

# @login.user_loader
# def load_user(id):
#     return User.query.get(int(id))
