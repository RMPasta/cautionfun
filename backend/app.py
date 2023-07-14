import os
import psycopg2
from flask import Flask, render_template, request, url_for, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate
from flask_login import LoginManager, login_user, logout_user, current_user
from flask_session import Session
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

DATABASE_URL = os.environ.get('DATABASE_URL').replace("postgres://", "postgresql://", 1)

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SESSION_TYPE'] = 'filesystem'
app.config['SESSION_COOKIE_SAMESITE'] = 'None'
app.config['SESSION_COOKIE_SECURE'] = True
app.secret_key = os.environ.get('JWT_SECERET')
CORS(app, origins=['http://localhost:3000', "http://127.0.0.1:5000"], supports_credentials=True)

# Setup login manager
login = LoginManager(app)
login.login_view = 'auth.unauthorized'
login.init_app(app)




db = SQLAlchemy(app)
conn = psycopg2.connect(DATABASE_URL, sslmode='require')
session = Session(app)


from api.user_routes import user_routes
from api.cc_routes import cc_routes
from api.auth_routes import auth_routes
app.register_blueprint(user_routes, url_prefix='/user')
app.register_blueprint(cc_routes, url_prefix='/cc')
app.register_blueprint(auth_routes, url_prefix='/auth')

migrate = Migrate(app, db)

@app.route('/')
def landing():
    return "HELLO"

from models import User
@login.user_loader
def load_user(id):
    return User.query.get(int(id))
