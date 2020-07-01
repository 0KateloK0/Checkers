from app import socketio, db
from flask_socketio import join_room, leave_room

@socketio.on('new turn')
def turn (data):
	return 'YAY!'

@socketio.on('my event')
def event (data):
	return 'YAY'

@socketio.on('connect')
def connect ():
	print('lol')
	return 'YAY'

@socketio.on('turn')
def t ():
	print('turn')

@socketio.on('join')
def on_join (data):
	print(data)
	username = data['username']
	room = data['room']
	join_room(room)

@socketio.on('leave')
def on_leave (data):
	username = data['username']
	room = data['room']
	leave_room(room)
