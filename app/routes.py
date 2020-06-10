from flask import render_template, request, send_from_directory
from app import app

@app.route('/')
@app.route('/index')
def index ():
	return render_template('index.html')

@app.route('/login')
def login ():
	return render_template('login.html')

@app.route('/game/<int:game_id>') #, methods=['GET', 'POST']
def game (game_id):
	return render_template('game.html')

@app.route('/game/<path:path>')
def serve_static_file (path):
	return send_from_directory('dist', path)