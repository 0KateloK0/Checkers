import React from 'react';
import './checkers.css';

function CheckerImg ({color, queen}) {
	return <img className="checkers-img"
		src={color + (queen ? '-queen' : '') + '.png'}
		alt={color === 'white' ? 'wh' : 'bl'}/>
}

function CheckerField ({checker, bg, pos, checked}) {
	checker = checker ? <CheckerImg color={checker.color} queen={checker.queen} /> : undefined;
	return (
		<div className={'checkers-cell checkers-cell-' + bg + (checked ? ' checkers-cell-checked' : '')} 
			pos={pos}>
			{checker}
		</div>
		)
}

class Checkers extends React.Component {
	render () {
		let checked = (i, j) => this.props.checked && (i === this.props.checked.row) && (j === this.props.checked.col);
		return (
			<div className="checkers-field" onClick={this.props.onClick}>
				{this.props.field.reduce((arr, el, i) => 
					arr.concat(el.map((checker, j) => 
						<CheckerField
							key={i + '_' + j}
							pos={i + '_' + j}
							checker={checker}
							checked={checked(i, j)} 
							bg={(i + j) % 2 === 0 ? 'white' : 'black'}
						/>
						)), [])}
			</div>
			)
	}
}

// HOC for checkers
function CheckersUI ({activePlayer='white', ...passThrough}) {
	const ABC = 'abcdefgh';
	let cl = activePlayer === 'black' ? ' reverse' : '';
	return (
		<div className="checkers-UI">
			<div className={"checkers-UI__top-letters checkers-UI__letters" + cl}>
				{ABC.split('').map((a, i) => <span className="checkers-UI__letter" key={i}>{a}</span>)}
			</div>
			<div className={"checkers-UI__left-letters checkers-UI__letters" + cl}>
				{ABC.split('').map((a, i) => <span className="checkers-UI__letter" key={i}>{i+1}</span>)}
			</div>
			<div className={"checkers" + cl}> <Checkers {...passThrough}/> </div>
			<div className={"checkers-UI__right-letters checkers-UI__letters" + cl}>
				{ABC.split('').map((a, i) => <span className="checkers-UI__letter" key={i}>{i+1}</span>)}
			</div>
			<div className={"checkers-UI__bottom-letters checkers-UI__letters" + cl}>
				{ABC.split('').map((a, i) => <span className="checkers-UI__letter" key={i}>{a}</span>)}
			</div>
		</div>
		)
}

export {Checkers, CheckersUI}