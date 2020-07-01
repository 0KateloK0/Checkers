from flask import render_template, request, send_from_directory, url_for, redirect, make_response
from app import app, db
from app.models import User , Room, Player
from flask_login import current_user, logout_user, login_user
from app.forms import LoginForm, RegisterForm
import json
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
		user = User(FIO=form.get_FIO(), email=form.email.data)
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
	print(request.form)
	path = ''.join(request.path.split('/')[3:])
	print(path)
	if current_user.is_authenticated:
		room = Room.query.filter_by(id=game_id)
		if room.count() == 1:
			room = room.first()
		else:
			room = Room(id=game_id)
			db.session.add(room)
		player = room.players.filter_by(user_id=current_user.id).first()
		if player is None:
			player = Player(user_id=current_user.id)
			db.session.add(player)
			room.add_player(player)
		db.session.commit()
		p = json.dumps([{
			'state': pl.state,
			'user': {
				'id': pl.user.id,
				'FIO': pl.user.FIO
				} } for pl in room.players])
		return render_template('game.html', title='Game {}'.format(game_id), p=p)
	else:
		return redirect(url_for('login'))

# @app.route('/game/<int:game_id>/<path:path>')
def serve_requests (game_id, path):
	print(game_id, path)
	return make_response('', 500)

@app.route('/<path:path>')
@app.route('/game/<path:path>')
def serve_static_file (path):
	# if os.path.exists(url_for('static') + path):
	return send_from_directory('dist', path)
	# else:
	# 	return make_response('lul', 404)

@app.errorhandler(404)
def error404 (error):
	return render_template('error404.html', error=error, title='Error')