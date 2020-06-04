import React from 'react';
import './checkers.css';
import {InitCommand, TurnCommand} from './gameLogic.js';

function CheckerImg ({color, queen}) {
	return <img className="checker-img" src={color + (queen ? '-queen' : '') + '.png'} alt=""/>
}

function CheckerField (props) {
	let checker = props.checker ? <CheckerImg color={props.checker.color} queen={props.checker.queen} /> : undefined;
	/*let checker;
	if (props.checker)
		checker = <CheckerImg color={props.checker.color} queen={props.checker.queen} />;*/
	return (
		<div className={'checker-field checker-field-' + props.bg + (props.checked ? ' checker-field-checked' : '')} 
			onClick={props.onClick} pos={props.pos}>
			{checker}
		</div>
		)
}

class Checkers extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			field: [], order: 'white',
			checked: undefined
		}

		this.handleClick = this.handleClick.bind(this);
		this.turn = new TurnCommand(this);
	}

	handleClick (e) {
		// just add temporary that it has not color
		let [row, col] = [...e.target.closest('.checker-field').getAttribute('pos').split('_')]; // maybe i'll need to remake this later
		if (this.state.checked) {
			this.buffer = {row: Number(row), col: Number(col)};
			let res = this.turn.execute();
			switch (res) {
				case 0:
					if (this.state.field[row][col])
						this.setState(state => ({checked: state.field[row][col]}));
					else
						this.setState({checked: undefined});
					break;
				case 2:
				case 1:
					this.setState({checked: undefined});
					break;
				case 3:
					break;
			}
		}
		else {
			if (this.state.field[row][col] && (this.state.field[row][col].color === this.state.order))
				this.setState(state => ({
					checked: state.field[row][col]
				}));
			else
				this.setState({checked: undefined});
		}

	}

	componentDidMount () {
		let ic = new InitCommand(this); // idk wheter this is duck or not..
		ic.execute();
	}

	render () {
		let checked = (i, j) => this.state.checked && (i === this.state.checked.row) && (j === this.state.checked.col);
		return (
			<div className="field">
				{this.state.field.reduce((arr, el, i) => 
					arr.concat(el.map((checker, j) => 
						<CheckerField
							key={i + '_' + j}
							pos={i + '_' + j}
							checker={checker}
							checked={checked(i, j)} 
							bg={(i + j) % 2 === 0 ? 'white' : 'black'} onClick={this.handleClick}
						/>
						)), [])}
			</div>
			)
	}
}

export default Checkers;