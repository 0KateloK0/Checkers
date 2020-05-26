function init () {

}

function getDiagonal (field, y, x, dir) {
	// dir === true means left-right diagonal avd dir === false vice versa
	let arr = Object.assign([], {
		i (r, c) {
			for (let index of Object.keys(this))
				if (!isNaN(Number(index)))
					if ((this[index].i == r) && (this[index].j == c))
						return index;
			return false;
		}
	});
	y = Number(y); x = Number(x); // if it'll pass as string this will cause to empty array as result
	if (dir) {
		for (let c = 0; (y + c < 8) && (x + c < 8); c++)
			arr[c] = field[y + c][x + c];
		for (let c = -1; (y + c >= 0) && (x + c >= 0); c--)
			arr[c] = field[y + c][x + c];
	}
	else {
		for (let c = 0; (y + c < 8) && (x - c >= 0); c++)
			arr[c] = field[y + c][x - c];
		for (let c = -1; (y + c >= 0) && (x - c < 8); c--)
			arr[c] = field[y + c][x - c];
	}
	return arr;
}

// remake with this logic: it's addicted to Checkers, it's field and etc.
class Checker {
	constructor (color, row, col) {
		this.color = color;
		this.queen = false; // when it initializes it's always not queen
		this.row = row;
		this.col = col
	}
	checkTurn (r1, c1) {
		let {row: r, col: c} = {...this};
		// checks that turn is possible (false - 0) and if so (1) and there is ONE enemy on way return 2 (eating turn)
		// this thing assumes that there are no other eating turn
		let d = getDiagonal(field, r, c, Math.sign(r1 - r) === Math.sign(c1 - c)),
			index = d.i(r1, c1);
		if (index) { // checks if on same diag
			if (d[index]) return 0; // checks if there is no other checker on new place
			if (!this.queen) {
				return (Math.abs(index) === 1) || 
						((Math.abs(index) === 2) && d[index - 1] && (d[index - 1].color !== this.color));
			}
			let counter = 0;
			// checks if there is no ally checkers on path and that its not more than one enemy checker on path
			for (let k = Math.sign(index); k !== index; k += Math.sign(index - k))
				if (d[k]) {
					if (d[k].color === this.color) return 0;
					else counter++;
				}
			if (counter === 0) return 1;
			else if (counter === 1) return 2;
			else return 0;
		}
		else return 0;
	}
}

class Turn {
	constructor (r, c, r1, c1) {
		
	}
}

// this file must give function which returns game state after work. It must be fully compatible with React element state

// extract this to another place
if (this.state.checked) {
	let {row: r, col: c} = {...this.state.checked};

	let checker = this.state.field[r][c];
	// rules
	// firstly check if turn is possible (new checker is on same diagonal and there isn't any checkers with same color on path)
	// then check if its eating turn
	// then make turn and check if there is any further eating turns
	// if so: checked stays as it is
	// if not: order changes

	switch (checker.checkTurn(r, c, row, col)) {
		case 0:
			this.setState({checked: false});
			break;
		case 2:
			// remove all enemy checkers from path
			for (let c = Math.sign(r - row); row !== r; c += Math.sign(r - row)) // it's not important if it's row or col comparsion
				field[row + c][col + c] = 0;
		default:
			// replace checker to new pos
			field[r][c] = field[row][col];
			field[row][col] = 0;
			this.setState({
				field,
				checked: false
			});
	}

}
else if (place.color === this.state.order) {
	this.setState({
		checked: {row, col}
	})
}