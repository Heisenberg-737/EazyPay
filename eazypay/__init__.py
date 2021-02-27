import flask
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine

app = Flask(__name__, static_folder="build", static_url_path='/')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///FreelancersAndEmployer.db'
app.config['SQLALCHEMY_BINDS'] = {'users': 'sqlite:///UsersDatabase.db'}
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

from eazypay import routes