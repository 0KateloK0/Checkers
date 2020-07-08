import React from 'react';
import './checkers.css';

function CheckerImg ({ghost, color, queen}) {
	return <img className={"checkers-img" + (ghost ? ' checkers-img-ghost' : '') }
		src={color + (queen ? '-queen' : '') + '.png'}
		alt={color === 'white' ? 'wh' : 'bl'}/>
}

function CheckerField ({checker, bg, pos, state}) {
	checker = (checker || state & 4) ? <CheckerImg 
		ghost={state & 4}
		color={checker.color}
		queen={checker.queen || state & 8} /> : undefined;
	return (
		<div className={'checkers-cell checkers-cell-' + bg + 
				(state & 1 ? ' checkers-cell-movable' : '') +
				(state & 2 ? ' checkers-cell-checked' : '')
				} 
			pos={pos}>
			{checker}
		</div>
		)
}

class Checkers extends React.Component {
	render () {
		// let checked = (i, j) => this.props.checked && (i === this.props.checked.row) && (j === this.props.checked.col);
		return (
			<div className="checkers-field" onClick={this.props.onClick}>
				{this.props.field.reduce((arr, el, i) => 
					arr.concat(el.map(({value, state}, j) => 
						<CheckerField
							key={i + '_' + j}
							pos={i + '_' + j}
							checker={value}
							state={state}
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

function makeHintsEngine (c) {
	return function HintsEngine (tb) {
		let f = tb.game.field.slice();
		if (!tb.turn.selection && c & 1) {
			// light up all checkers, that are movable
			return f.map((arr, i) => 
				arr.map((a, j) => {
					let r = tb.addCell(i, j);
					if (r) tb.popCell();
					return {
						value: a,
						state: r ? 1 : 0
					};
				}));
		}
		else if (tb.turn.selection) {
			let cells = tb.turn.cells,
				sel = tb.turn.selection;
			return f.map((arr, i) =>
				arr.map((a, j) => {
					let state = 0;
					if (c & 2) {
						if (cells.length > 0 && cells.last.r == i && cells.last.c == j ||
							cells.length == 0 && sel.r == i && sel.c == j)
							state = state | 2;
					}
					/*if (c & 4) {
						if (Math.abs(i - sel.r) == Math.abs(j - sel.c)) { // just for optimisation
							let r = tb.addCell(i, j);
							if (r) {
								let d = f1.getDiagonal(sel.r, sel.c, i - sel.r == j - sel.c),
									index = Math.sign(i - sel.r);
								for (let k = index; i + k !=  ; k += index)
								if (tb.game.field[i][j].queen)
									state = state | 8;
								tb.popCell();
								state = state | 4;
							}
						}
					}*/
					return {
						value: a,
						state
					}
				})
				);
			// light up corresponding fields
			// algorithm: i make fiction move on fiction game (FICTIONNNNNN)
			// than i compare all fields and by this lighting up them
		}
	}
}

export {Checkers, CheckersUI, makeHintsEngine}