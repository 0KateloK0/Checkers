import io from 'socket.io-client';

/*let promisify = f => function (...args) {
	return new Promise((resolve, reject) => {
		function callback (err, results) {
			if (err) reject(err);
			else resolve(results);
		}
		f.call(this, ...args, callback);
	})
}*/

function initServerLogic () {
	let socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port);
	const ROOM = Number(location.pathname.match(/\/(\d*)$/)[1]);

	socket.emit('join_room', {
		room: ROOM
	});

	class Player {
		constructor (obj) {
			this.id = obj.id;
			this.state = obj.state;
			this.user = obj.user;
		}

		isAdmin () { return this.state & 4 }
		isSpectator () { return this.state & 2 }
		isPlayer () { return this.state & 1 }
	}

	return {
		setCallbackOnEvent (event, callback) {
			socket.on(event, callback);
		},
		getPlayersList () {
			return fetch('/players_list/'+ROOM)
				.then(response => response.json())
				.then(response => response.map(a => new Player(a)))
				.catch(err => {console.error(err)});
		},
		sendTurn (turn) {
			socket.emit('turn', {
				turn,
				room: ROOM,
			})
		}
	}

}

export default initServerLogic;