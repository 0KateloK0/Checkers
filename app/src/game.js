import React from 'react'; // let React = require('react');
import './game.css';
import {InitCommand, TurnCommand, CheckWinCommand} from './gameLogic.js';
import {Checkers, CheckersUI} from './checkers';

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

// pureComponent here is that with props.amount == new.amount React still renders el so that this might help
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
			<ul>
				{props.history.map((a, i) => 
					<li key={i}>
						<span>{i}</span><span>{a.toString()}</span>
					</li>)}
			</ul>
		</div>
		)
}

class PlayerInfo extends React.Component {
	render () {
		let {player: {
			user,
			timeLeft,
			color
		}, field, reverse} = this.props;
		let amount = field.reduce((arr, el) =>
				arr.concat(el.reduce((a, b) => b.color == color ? a.concat(b) : a, [])), []).length;
		return (
			<div className="info-container">
				<div className={'info' + (reverse ? ' reverse' : '')}>
					<Profile user={user} reverse={reverse}/>
					<Timer time={timeLeft}/>
					<Figures amount={amount} color={color}/>
				</div>
				<div className="history-container">
					<History history={[]} color={color}/>
				</div>
			</div>
			)
	}
}

class PlayersList extends React.Component {
	render () {
		return (
			<div className="players">

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

export default class CheckersGame extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			field: [], order: 'white',
			checked: undefined,
			win: false
		}
		this.handleCheckersClick = this.handleCheckersClick.bind(this);
		this.turn = new TurnCommand(this);
		this.checkWin = new CheckWinCommand(this);
		this.init = new InitCommand(this);
		this.history = [];

		// fiction
		this.player1 = {
			user: {
				avatarSrc: 'black-queen.png',
				FIO: 'Artem Ebat',
				money: 25347,
				rating: 1987,
			},
			timeLeft: 224000,
			color: 'black'
		}
		this.player2 = {
			user: {
				avatarSrc: 'white-queen.png',
				FIO: 'Kirill Ebat',
				money: 18967,
				rating: 1999,
			},
			timeLeft: 228000,
			color: 'white'
		}
	}

	restart () {
		let state = this.executeCommand(this.init);
		this.setState({...state, win: false});
	}

	componentDidMount () { this.restart(); }

	handleCheckersClick (e) {
		let [row, col] = [...e.target.closest('.checkers-cell').getAttribute('pos').split('_').map(Number)];
		let setChecked = function setChecked (row, col) {
			try {
				this.turn.selection = {row, col}
				this.setState({checked: this.turn.selection});
			}
			catch (err) {
				this.setState({checked: undefined});
			}
		}.bind(this);

		if (this.state.checked) {
			this.buffer = {row, col};
			let res = this.executeCommand(this.turn);
			if (res) {
				let {field, order, state} = res;
				this.setState({field});
				if (state === 'finished') {
					this.setState({ checked: undefined, order });
					let cw = this.executeCommand(this.checkWin).value;
					if (cw)
						this.setState({
							win: cw
						})
					this.turn = new TurnCommand(this);
				}
			}
			else
				setChecked(row, col)
		}
		else
			setChecked(row, col);
	}

	executeCommand (command) {
		let res = command.execute();
		if (res.state === 'finished')
			this.history.push(command);
		return res;
	}

	render () {
		return (
			<div className="app">
				<div className="game">
					<div className="player-container player1">
						<PlayerInfo player={this.player1} field={this.state.field}/>
					</div>
					<div className="game-container">
						<CheckersUI
							activePlayer={'white'}
							onClick={this.handleCheckersClick}
							field={this.state.field}
							checked={this.state.checked} />
					</div>
					<div className="player-container player2">
						<PlayerInfo player={this.player2} field={this.state.field} reverse={true}/>
					</div>
					<div className="chat-container">
						<Chat />
					</div>
					<div className="players-list-container">
						<PlayersList />
					</div>
				</div>
			</div>
			)
	}
}