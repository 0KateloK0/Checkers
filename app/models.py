from app import db, login
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
import json

class User (UserMixin, db.Model):
	id = db.Column(db.Integer, primary_key=True)
	FIO = db.Column(db.String(120), index=True, unique=True)
	email = db.Column(db.String(120), index=True, unique=True)
	password_hash = db.Column(db.String(120))

	def __repr__ (self):
		return '<User {}>'.format(self.FIO)

	def set_password (self, password):
		self.password_hash = generate_password_hash(password)

	def check_password (self, password):
		return check_password_hash(self.password_hash, password)

@login.user_loader
def load_user(id):
	return User.query.get(int(id))

class Player (db.Model):
	id = db.Column(db.Integer, primary_key=True)
	room_id = db.Column(db.Integer, db.ForeignKey('room.id'))
	state = db.Column(db.Integer)
	user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
	user = db.relationship('User', backref="player")

class Room (db.Model):
	id = db.Column(db.Integer, primary_key=True)
	players = db.relationship('Player', backref="room", lazy="dynamic")
	player_counter = db.Column(db.Integer, default=0)

	def __init__ (self, **kwargs):
		super(Room, self).__init__(**kwargs)
		self.player_counter = 0

	def get_players (self):
		return json.dumps([{
			'id': p.id,
			'state': p.state,
			'user': {
				'id': p.user.id,
				'FIO': p.user.FIO
			}
			} for p in self.players])

# class Game (db.Model):
# 	# __tablename__ = 'games'
# 	id = db.Column(db.Integer, primary_key=True)
# 	field = db.Column(db.String(64))