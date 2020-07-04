import React from 'react';
import './game.css';
import {Game, InitCommand, TurnCommand, CheckWinCommand} from './gameLogic.js';
import {Checkers, CheckersUI} from './checkers';
/*import io from 'socket.io-client';

let promisify = f => function (...args) {
	return new Promise((resolve, reject) => {
		function callback (err, results) {
			if (err) reject(err);
			else resolve(results);
		}
		f.call(this, ...args, callback);
	})
}
*/
function Timer (props) {
	let t = Math.floor(props.time / 1000);
	return (
		<span className="timer">{Math.floor(t / 60)}:{t % 60}</span>
		)
}

function Profile (props) {
	let {avatarSrc, FIO, money, rating} = props.user;
	return (
		<div className={'profile ' + (props.className || '') + (props.reverse ? 'reverse' : '')}>
			<div className="avatar-container">
				<img className="avatar-img" src={avatarSrc} alt="bl"/>
			</div>
			<div className="FIO-container">
				<span className="FIO">{FIO}</span>
			</div>
			<div className="rating-container">
				<span className="rating">{rating}</span>
			</div>
			<div className="money-container">
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

class Player extends React.PureComponent {
	render () {
		let {player: {
			state,
			user: {FIO}
		}, ...rest} = this.props;
		return (
			<li {...rest}>
				<span className="player-list__info-FIO">{FIO}</span>
			</li>
			)
	}
}

class PlayersList extends React.PureComponent {
	render () {
		return (
			<div className="players">
				<ul className="players-list">
				{this.props.players.map(
					(a, i) => <Player key={i} className="players-list__info" player={a}></Player>
					)}
				</ul>
			</div>
			)
	}
}

class Chat extends React.Component {
	render () {
		return (
			<div className="chat">

			</div>
			)
	}
}

function GameStats ({
	time1, time2, order
}={}) {
	return (
		<div className="game-stats">
			<Timer time={time2} />
			<Timer time={time1} />
		</div>
		)
}

// pattern builder:
// result: field with hints
// builder: thing that implemepnts field hints functions.
// this thing will be recreated every time with new turn
// director: thing that implements sepcific settings. gets builder as input
// application: always different

/*let functions = {
	beforeTurn () {
		// creates hints that explain which turns are possible
	},
	afterSelection () {

	},
	afterContTurn () {

	},
	afterTurn () {
		// creates hint that shows which turn had done
	}
}

function maxHints (field, turn) {
	if (turn == undefined) {
		return functions.beforeTurn().bind(field);
	}
	else if (turn.selection != undefined) {
		return functions.afterSelection().bind(field);
	}
	else if (turn.state == 'finished') {
		return functions.afterTurn().bind(field);
	}
}*/

class CheckersGame extends React.Component {
	constructor (props) {
		super(props);
		this.game = new Game();
		this.turn = new TurnCommand(this, this.game);
		this.state = {
			...new InitCommand(this, this.game).execute(),
		}
		this.handleCheckersClick = this.handleCheckersClick.bind(this);
		this.history = [];
	}

	restart () {
		let state = this.executeCommand(this.init);
		this.setState({...state, win: false});
	}

	handleCheckersClick (e) {
		let [row, col] = [...e.target.closest('.checkers-cell').getAttribute('pos').split('_').map(Number)];

		this.turn.addCell(row, col);
		if (this.turn.state == 'complete') {
			this.executeCommand(this.turn);
			this.turn = new TurnCommand(this, this.game);
		}
	}

	executeCommand (command) {
		command.execute();
	}

	render () {
		return (
			<div className="game">
				<div className="game-stats-container">
					<GameStats
						time1={13}
						time2={14} 
						order={this.state.order} />
				</div>
				<div className="checkers-UI-container">
					<CheckersUI
						activePlayer={'white'}
						onClick={this.handleCheckersClick}
						field={this.state.field}
						checked={this.state.checked} />
				</div>
			</div>
			)
	}
}

export default class App extends React.Component {
	constructor (props) {
		super(props);
		// fiction
		this.player1 = {
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
		}

		this.players = [];
	}

	render () {
		return (
			<div className="app-container">
				<div className="app">
					<div className="player-container player1">
						<PlayerInfo
							player={this.player2}
							field={[[]]}
							history={[]} />
					</div>
					<div className="game-container">
						<CheckersGame />
					</div>
					<div className="player-container player2">
						<PlayerInfo
							player={this.player1}
							field={[[]]}
							reverse={true}
							history={[]} />
					</div>
					<div className="chat-container">
						<Chat />
					</div>
					<div className="players-list-container">
						<PlayersList players={this.players}/>
					</div>
				</div>
			</div>
			)
	}
}