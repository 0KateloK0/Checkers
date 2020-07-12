from flask import request
from app import socketio, db
from app.models import Player, Room
from flask_socketio import join_room, leave_room, emit, rooms
from flask_login import current_user

@socketio.on('join_room')
def on_join (data):
	room = data['room']
	def check_connection (sid, room):
		for r in rooms(sid)[1:]:
			if r == room:
				return True
		return False
	if (check_connection(request.sid, room)):
		return
	join_room(room)
	player = Player.query.filter_by(room_id=room).first()
	if player is None:
		player = Player(room_id=room, user_id=current_user.id)
		db.session.add(player)
		db.session.commit()
	emit('player_joined', {
		'user': {
			'FIO': current_user.FIO,
			'id': current_user.id
		},
		'state': player.state,
		'id': player.id
		}, room=room, broadcast=True)

@socketio.on('disconnect')
def on_disconnect ():
	# assumes there is just one room that player in
	for room in rooms(request.sid)[1:]:
		leave_room(room)
		player = Player.query.filter_by(room_id=room).first()
		id = player.id
		db.session.delete(player)
		emit('player_leaved', {
			'id': id
		}, room=room, broadcast=True, skip_sid=sid)
	db.session.commit()

@socketio.on('leave_room')
def on_leave (data):
	room = data['room']
	leave_room(room)
	print('user leaved room')
	player = Player.query.filter_by(room_id=room).first()
	if player is None:
		raise Exception('wtf lol')
	emit('player_leaved', {
		'id': player.id
		}, room=room, broadcast=True, skip_sid=request.sid)
	db.session.delete(player)
	db.session.commit()

@socketio.on('turn')
def on_turn (data):
	emit('turn', {'turn': data['turn']}, broadcast=True, room=data['room'], skip_sid=request.sid)