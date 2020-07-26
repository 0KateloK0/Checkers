from app import db, login
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
import json

class User (UserMixin, db.Model):
	id = db.Column(db.Integer, primary_key=True)
	FIO = db.Column(db.String(120), index=True, unique=True)
	email = db.Column(db.String(120), index=True, unique=True)
	password_hash = db.Column(db.String(120))
	money = db.Column(db.Integer, default=0)
	rating = db.Column(db.Integer, default=0)
	avatar_src = db.Column(db.String(120), default="unauthorized.jpg")

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
	game_id = db.Column(db.Integer, db.ForeignKey('game.id'))

	def get_info (self):
		if self.user.avatar_src is None:
			self.user.avatar_src = "unauthorized.jpg"
		return json.dumps({
			'id': self.id,
			'state': self.state,
			'user': {
				'id': self.user.id,
				'FIO': self.user.FIO,
				'money': self.user.money,
				'rating': self.user.rating,
				'avatar_src': self.user.avatar_src
			}
			})

class Room (db.Model):
	id = db.Column(db.Integer, primary_key=True)
	players = db.relationship('Player', backref="room", lazy="dynamic")

	def get_players (self):
		return json.dumps([p.get_info() for p in self.players])

class Game (db.Model):
	id = db.Column(db.Integer, primary_key=True)
	field = db.Column(db.String(64))
	setup = db.Column(db.String(64))
	turns = db.relationship('Turn', backref='game')
	started = db.Column(db.Boolean)
	players = db.relationship('Player', backref='game')

class Turn (db.Model):
	id = db.Column(db.Integer, primary_key=True)
	info = db.Column(db.String(64))
	game_id = db.Column(db.Integer, db.ForeignKey('game.id'))