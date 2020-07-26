from flask import render_template, request, send_from_directory, url_for, redirect, make_response
from app import app, db
from app.models import User , Room, Player
from flask_login import current_user, logout_user, login_user
from app.forms import LoginForm, RegisterForm
from flask_socketio import emit, leave_room
import os

@app.route('/')
@app.route('/index')
def index ():
	return render_template('index.html', title='Main page')

@app.route('/register', methods=['GET', 'POST'])
def register ():
	if current_user.is_authenticated:
		return redirect(url_for('index'))
	form = RegisterForm()
	if form.validate_on_submit():
		user = User(FIO=form.get_FIO(),
				email=form.email.data,
				avatar_src="unauthorized.jpg",
				money=10000,
				rating=2000)
		user.set_password(form.password.data)
		db.session.add(user)
		db.session.commit()
		return redirect(url_for('login'))
	return render_template('register.html', form=form, title='Registration')

@app.route('/login', methods=['GET', 'POST'])
def login ():
	if current_user.is_authenticated:
		return redirect(url_for('index'))
	form = LoginForm()
	if form.validate_on_submit():
		user = User.query.filter_by(email=form.email.data).first()
		if user is None or not user.check_password(form.password.data):
			return redirect(url_for('login'))
		login_user(user, remember=form.rem.data)
		return redirect(url_for('index'))
	return render_template('login.html', form=form, title='Login')

@app.route('/logout')
def logout ():
	logout_user()
	return redirect(url_for('index'))

@app.route('/game/<int:game_id>', methods=['GET', 'POST'])
def game (game_id):
	if current_user.is_authenticated:
		if Room.query.filter_by(id=game_id).first() is None:
			db.session.add( Room(id=game_id) )
			db.session.commit()
		return render_template('game.html', title='Game {}'.format(game_id))
	else:
		return redirect(url_for('login'))

def serve_requests (game_id, path):
	print(game_id, path)
	return make_response('', 500)

@app.route('/players_list/<int:game_id>')
def get_players_list (game_id):
	room = Room.query.filter_by(id=game_id).first()
	if room is None:
		return make_response('room is not found', 404)
	return room.get_players()

@app.route('/player_info/<int:player_id>')
def get_player_info (player_id):
	player = Player.query.filter_by(id=player_id).first()
	if player is None:
		return make_response('player not found', 404)
	return player.get_info()

@app.route('/get_current_player_id')
def get_player_id ():
	return str(current_user.player[0].id)

@app.route('/<path:path>')
@app.route('/game/<path:path>')
def serve_static_file (path):
	return send_from_directory('dist', path)

@app.errorhandler(404)
def error404 (error):
	return render_template('error404.html', error=error, title='Error')