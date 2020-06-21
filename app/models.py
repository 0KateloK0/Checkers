from app import db, login
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

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

# class Player (User, db.Model):
# 	room_id = db.Column(db.Integer, db.ForeignKey('player.id'))

# class Room (db.Model):
# 	# __tablename__ = 'rooms'
# 	id = db.Column(db.Integer, primary_key=True)
# 	players = db.relationship('Player', backref="room", lazy="dynamic")

# 	def __init__ (self, id):
# 		self.player_counter = 1

# 	def add_payer (self, player):
# 		self.player_counter += 1


# class Game (db.Model):
# 	# __tablename__ = 'games'
# 	id = db.Column(db.Integer, primary_key=True)
# 	field = db.Column(db.String(64))