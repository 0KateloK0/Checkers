import React from 'react';
import {} from './gameLogic.js';
import {Checkers} from './checkers.js';
import './main.css'

class CheckersRoom extends React.PureComponent {
	render () {
		return (
			<div className="room">
				<div className="checkers-view">
					<Checkers field={this.props.field}/>
				</div>
				<div className="room-options">

				</div>
			</div>
			)
	}
}

export default class App extends React.Component {
	constructor (props) {
		if (!props.games) {
			//fetch('')
		}
		this.state = {
			games: props.games || []
		}
		// add events
	}
	render () {
		return (
			<div className="main">
				{this.state.games.map((a, i) => <CheckersRoom
						key={i}
						field={a}/>)}
			</div>
			)
	}
}