from app import app, db, socketio
from app.models import User , Room, Player # , Game

@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'User': User, 'Room': Room, 'Player': Player, 'socketio': socketio} #, 'Game': Game, 

if __name__ == '__main__':
	socketio.run(app)
	# app.run(host='0.0.0.0', port=5000, debug=True, threading=True)