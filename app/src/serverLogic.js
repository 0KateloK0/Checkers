import io from 'socket.io-client';

function initServerLogic () {
	let socket = io.connect('ws://' + document.domain + ':' + location.port);
	const ROOM = Number(location.pathname.match(/\/(\d*)$/)[1]);
	socket.on('connect', function () {
		socket.emit('join_room', {
			room: ROOM
		});
	})
	let CURRENT_PLAYER_ID;
	(function getCurrentPlayerID () {
		fetch('/get_current_player_id').then(response => response.text())
		.then(response => {
			console.log(response);
			CURRENT_PLAYER_ID = Number(response);
		}).catch(err => {
			getCurrentPlayerID();
		})
	})();


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
		getRoomsList () {
			return fetch('/rooms_list')
				.then(response => response.json())
				.then(response => response.map(a => new Player(a)))
				.catch(err => {console.error(err)});
		},
		getPlayerInfo (id) {
			if (!id) id = CURRENT_PLAYER_ID;
			return fetch('/player_info/'+id)
				.then(response => response.json())
				.catch(err => {console.error(err)});
		},
		getCurrentPlayerID () {
			return CURRENT_PLAYER_ID;
		},
		sendTurn (turn) {
			socket.emit('turn', {
				turn,
				room: ROOM,
			})
		},
		emitPlayerJoinedEvent (data) {
			socket.emit('player_joined', {
				playerData: data,
				room: ROOM
			});
		}
	}

}

export default initServerLogic;