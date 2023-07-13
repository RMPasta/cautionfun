import os
import psycopg2
from flask import Flask, render_template, request, url_for, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

DATABASE_URL = os.environ.get('DATABASE_URL').replace("postgres://", "postgresql://", 1)

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
conn = psycopg2.connect(DATABASE_URL, sslmode='require')


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
