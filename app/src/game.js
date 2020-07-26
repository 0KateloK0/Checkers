import React from 'react';
import './game.css';
import {Game, TurnCommand, TurnBuilder} from './gameLogic.js';
import {CheckersUI, makeHintsEngine} from './checkers';
import initServerLogic from './serverLogic.js';

function Profile (props) {
	let {avatar_src: avatarSrc, FIO, money, rating} = props.user;
	return (
		<div className={'profile ' + (props.className || '') + (props.reverse ? 'reverse' : '')}>
			<div className="avatar-container">
				<img className="avatar-img" src={avatarSrc} alt="bl"/>
			</div>
			<div className="FIO-container">
				<span className="FIO">{FIO}</span>
			</div>
			<div className="rating-container">
				<img src="rating.png" alt="" className="rating-img"/>
				<span className="rating">{rating}</span>
			</div>
			<div className="money-container">
				<img src="chip.png" alt="" className="money-img"/>
				<span className="money">{money}</span>
			</div>
		</div>
		)
}

let Figure = props => <img className={"figures__checker-img" + (props.vis ? ' figures__checker-img_visible' : '')} 
								src={props.color + '.png'} alt="ch"/>;

// pureComponent is here beacuse React still render component even with props.amount == new.amount
class Figures extends React.PureComponent {
	render () {
		return (
			<div className="figures">
				{new Array(12).fill()
					.map((a, i) => <Figure key={i} 
								color={this.props.color} 
								vis={i + 1 <= this.props.amount}/>)}
			</div>
			)
	}
}

function History (props) {
	return (
		<div className="history">
			<ol className="history__list">
				{props.history.map((a, i) => 
					<li key={i} className="history__list-el">
						<span className="history__list-el-span">{a.toString()}</span>
					</li>)}
			</ol>
		</div>
		)
}

class PlayerInfo extends React.Component {
	render () {
		let {player: {
			user,
			color
		}, field, reverse, history} = this.props;
		let amount = field.reduce((arr, el) =>
				arr.concat(el.reduce((a, b) => b.color == color ? a.concat(b) : a, [])), []).length;
		return (
			<div className="info-container">
				<div className={'info' + (reverse ? ' reverse' : '')}>
					<Profile user={user} reverse={reverse}/>
					<div className="history-container">
						<History history={history} color={color}/>
					</div>
					<Figures amount={amount} color={color}/>
				</div>
			</div>
			)
	}
}

function GameStats ({
	time1, time2, order
}={}) {
	return (
		<div className="game-stats">
			
		</div>
		)
}

class CheckersGame extends React.Component {
	constructor (props) {
		super(props);
		this.game = new Game();
		let turn = new TurnCommand(this, this.game);
		let tb = new TurnBuilder(turn, this.game.makeShot());
		this.state = {
			game: this.game,
			tb
		}
		this.handleCheckersClick = this.handleCheckersClick.bind(this);
		this.engine = makeHintsEngine(1 | 2 | 4);
	}

	handleCheckersClick (e) {
		let [row, col] = [...e.target.closest('.checkers-cell')
						.getAttribute('pos').split('_').map(Number)];

		let r = this.state.tb.addCell(row, col);
		if (r) {
			this.setState(state => ({
				game: state.tb.game,
				tb: state.tb
			}));
		}
		if (this.state.tb.turn.state == 'complete') {
			let t = this.state.tb.getTurn();
			this.executeCommand(t);
			let turn = new TurnCommand(this, this.game);
			this.setState({
				tb: new TurnBuilder(turn, this.game.makeShot())
			})
		}
	}

	executeCommand (command) {
		if ( command.execute() ) {
			this.game.history.push(command);
			socket.emit('turn', {
				turn: command.makeShot(),
				room: ROOM,
			})
		}
	}

	render () {
		return (
			<div className="game">
				<div className="game-stats-container">
					<GameStats
						order={this.state.game.order} />
				</div>
				<div className="checkers-UI-container">
					<CheckersUI
						activePlayer={'white'}
						onClick={this.handleCheckersClick}
						field={this.engine(this.state.tb)} />
				</div>
			</div>
			)
	}
}

class CheckersSettings extends React.PureComponent {
	render () {
		let {activePlayer} = this.props;
		return (
			<div className="checkers-settings">
				<div className="bet-container">
					<div className="bet">
						<img src="chip.png" alt="" className="money-img"/> 10000
					</div>
				</div>
				<div className="engine-settings-container">
					<div className="engine-settings"></div>
				</div>
				<div className="time-settings-container">
					<div className="time-settings"></div>
				</div>
				<div className="submit-btn-container">
					<button className="submit-btn">Ready</button>
				</div>
			</div>
			)
	}
}

function UnsetUser ({color, handleClick}={}) {
	return (
		<div className="unset-user">
			<h2>{color[0].toUpperCase() + color.slice(1).toLowerCase()} player hasn't joined yet!</h2>
			<p>Press button if you want to join!</p>
			<button onClick={handleClick} data-color={color}>Join as {color}</button>
		</div>
	)
}

export default class App extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			game: new Game(),
			isGameStarted: false,
			player1: undefined,
			player2: undefined
		}

		this.handleUnsetPlayerBtnClick = this.handleUnsetPlayerBtnClick.bind(this);

		this.SERVER = initServerLogic();

		let self = this;
		this.SERVER.setCallbackOnEvent('player_joined', function ({color, playerData}={}) {
			if (color == 'white') self.setState({player1: Object.assign(playerData, {color})})
			else self.setState({player2: Object.assign(playerData, {color})});
		})
	}

	handleUnsetPlayerBtnClick (e) {
		let color = e.target.dataset.color;
		let self = this;
		this.SERVER.getPlayerInfo().then(result => {
			if (color == 'white') self.setState({player1: Object.assign(result, {color})})
			else self.setState({player2: Object.assign(result, {color})});
		}).then(function () {
			self.SERVER.emitPlayerJoinedEvent(color == 'white' ? self.state.player1 : self.state.player2);
		})
	}

	render () {
		if (this.state.isGameStarted) {
			return (
				<div className="app-container">
					<div className="app">
						<div className="player-container player1">
							<PlayerInfo
								player={this.state.player2}
								field={this.state.game.field}
								history={this.state.game.history || []} />
						</div>
						<div className="game-container">
							<CheckersGame />
						</div>
						<div className="player-container player2">
							<PlayerInfo
								player={this.state.player1}
								field={this.state.game.field}
								history={this.state.game.history || []} 
								reverse={true} />
						</div>
					</div>
				</div>
				)
		}
		else {
			return (
				<div className="app-container">
					<div className="app">
						<div className="player-container player1">
							{this.state.player1 ? 
								<Profile user={this.state.player1.user} /> : 
								<UnsetUser
									color="white"
									handleClick={this.handleUnsetPlayerBtnClick} />}
						</div>
						<div className="game-container">
							<CheckersSettings />
						</div>
						<div className="player-container player2">
							{this.state.player2 ? 
								<Profile user={this.state.player2.user} /> : 
								<UnsetUser
									color="black"
									handleClick={this.handleUnsetPlayerBtnClick} />}
						</div>
					</div>
				</div>
				)
		}
	}
}

// fiction
		/*this.player1 = {
			user: {
				avatarSrc: 'Artem.jpg',
				FIO: 'Artem Katelkin',
				money: 25347,
				rating: 1987,
			},
			timeLeft: 228000,
			color: 'white'
		}
		this.player2 = {
			user: {
				avatarSrc: 'Kirill.jpg',
				FIO: 'Kirill Glushkov',
				money: 18967,
				rating: 1999,
			},
			timeLeft: 224000,
			color: 'black'
		}*/

		// let self = this;

		/*SERVER.getPlayersList().then(response => {
			console.log(response);
			self.setState({
				players: response
			})
		})*/

		/*SERVER.setCallbackOnEvent('players_changed', function (players) {
			players = JSON.parse(players);
			self.setState({players});
		});
		
		SERVER.setCallbackOnEvent('turn', function (turn) {
			self.setState({
				newTurn: turn
			});
		});*/