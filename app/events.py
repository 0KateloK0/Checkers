from flask import request
from app import socketio, db
from app.models import Player, Room
from flask_socketio import join_room, leave_room, emit, rooms
from flask_login import current_user

def make_players_change_event (room_id):
	emit('players_changed', 
			Room.query.filter_by(id=room_id).first().get_players(), 
			room=room_id, 
			broadcast=True, 
			skip_sid=request.sid)

def check_connection (sid, room):
	for r in rooms(sid)[1:]:
		if r == room:
			return True
	return False

@socketio.on('join_room')
def on_join (data):
	room = data['room']
	if (check_connection(request.sid, room)):
		return
	join_room(room)
	player = Player.query.filter_by(user_id=current_user.id).first()
	if player is None:
		players_count = len(Room.query.filter_by(id=room).first().players)
		state = 0
		if players_count == 0:
			state = state & 1
		if players_count < 2:
			state = state & 2
		if players_count >= 2:
			state = state & 4
		player = Player(room_id=room, user_id=current_user.id, state=state)
		db.session.add(player)
		db.session.commit()
	make_players_change_event(room)

@socketio.on('disconnect')
def on_disconnect ():
	for room in rooms(request.sid)[1:]:
		leave_room(room)
		player = Player.query.filter_by(user_id=current_user.id).first()
		if player is None:
			pass
		else:
			db.session.delete(player)
			db.session.commit()
			make_players_change_event(room)

@socketio.on('turn')
def on_turn (data):
	emit('turn', {'turn': data['turn']}, broadcast=True, room=data['room'], skip_sid=request.sid)