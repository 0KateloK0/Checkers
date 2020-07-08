class Pair {
	constructor (obj) {
		if (arguments.length == 1) {
			switch (typeof obj) {
				case 'string':
					if (isNaN(Number(obj))) {
						if (/^[a-h][1-8]$/i.test(obj)) {
							this.r = Number( Pair.ABC().indexOf(obj[0]) );
							this.c = Number(obj[1]);
						}
						else
							throw new Error('Incompatible input for pair');
					}
					else {
						obj = Number(obj);
						this.r = Math.floor(obj / 8);
						this.c = obj % 8;
					}
					break;
				case 'number':
					this.r = Math.floor(obj / 8);
					this.c = obj % 8;
					break;
				default:
					try {
						let {row: r, col: c} = {...obj};
						this.r = Number(r); this.c = Number(c);
					}
					catch (err) {
						throw new Error('Incompatible input for pair');
					}
			}
		}
		else {
			this.r = Number(arguments[0]);
			this.c = Number(arguments[1]);
		}
	}
	toString () {
		return Pair.ABC()[this.r] + this.c.toString();
	}
	static ABC () { return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] }
}

class Game {
	constructor (obj={}) {
		function Checker (color, queen=false) {
			this.color = color;
			this.queen = queen;
		}

		this.field = Object.assign([], {
			getDiagonal (y, x, dir) {
				// dir === true means left-right diagonal avd dir === false vice versa
				let arr = [];
				y = Number(y); x = Number(x); // if it'll pass as string this will cause to empty array as result
				if (dir) {
					for (let c = 0; (y + c < 8) && (x + c < 8); c++)
						arr[c] = new Pair(y + c, x + c);
					for (let c = -1; (y + c >= 0) && (x + c >= 0); c--)
						arr[c] = new Pair(y + c, x + c);
				}
				else {
					for (let c = 0; (y + c < 8) && (x - c >= 0); c++)
						arr[c] = new Pair(y + c, x - c);
					for (let c = -1; (y + c >= 0) && (x - c < 8); c--)
						arr[c] = new Pair(y + c, x - c);
				}
				return arr;
			},
			flush () {
				this.splice(0, this.length);
				return this;
			},
			toString () {
				return this.reduce((str, arr) => str + arr.reduce((s, el) => {
						if (!el) return s + '0';
						else if ((el.color === 'white') && !el.queen) return s + '1';
						else if ((el.color === 'white') && el.queen) return s + '2';
						else if ((el.color === 'black') && !el.queen) return s + '3';
						else if ((el.color === 'black') && el.queen) return s + '4';
					}, '') ,'');
			},
			fromString (s) {
				if (s.length != 64) throw new Error('You trying to convert incompatible string');
				this.splice(0, this.length, ...s.split('').reduce((arr, c, i) => {
					if (i % 8 === 0) arr.push([]);
					let j = Math.floor(i / 8);
					if (c == 0) arr[j].push(0);
					else if (c == 1) arr[j].push(new Checker('white', false));
					else if (c == 2) arr[j].push(new Checker('white', true));
					else if (c == 3) arr[j].push(new Checker('black', false));
					else if (c == 4) arr[j].push(new Checker('black', true));
					return arr;
				}, []));
				return this;
			},
			get (pair) {
				return this[pair.r][pair.c];
			}
		});
		this.init(obj.field, obj.order);
	}

	makeShot () {
		return {
			field: this.field.toString(),
			order: this.order
		}
	}

	fromShot (shot) {
		this.field.fromString(shot.field);
		this.order = shot.order;
	}

	init (field, order='white') {
		this.field.fromString(field ? field.toString() : 
			'03030303' + '30303030' + '03030303' + '00000000' + '00000000' +
			'10101010' + '01010101' + '10101010' );
		this.order = order;
	}

	checkCheckerTurn (selection, {r: row, c: col}) {
		let {r, c} = {...selection},
			field = this.field,
			{color, queen} = {...field[r][c]};
		// checks that turn is possible (false - 0) and if so (1) and there is ONE enemy on way return 2 (eating turn)
		// this thing assumes that there are no other eating turn
		if (Math.abs(row - r) === Math.abs(col - c)) { // checks if on same diag
			let d = field.getDiagonal(r, c, Math.sign(row - r) === Math.sign(col - c)),
				index = row - r; // it's not important if this is row or col comparsion
			if (field.get(d[index])) return 0; // checks if there is no other checker on new place
			if (!queen) {
				switch (Math.abs(index)) {
					case 1:
						if (((Math.sign(index) > 0) && (color === 'black')) ||
							((Math.sign(index) < 0) && (color === 'white')))
							return 1;
						else return 0;
					case 2:
						let f = field.get(d[index - Math.sign(index)]);
						return f && (f.color !== color) ? 2 : 0;
					default: return 0;
				}
			}
			let counter = 0;
			// checks if there is no ally checkers on path and that its not more than one enemy checker on path
			for (let k = Math.sign(index); k !== index; k += Math.sign(index - k)) {
				let t = field.get(d[k]);
				if (t) {
					if (t.color === color) return 0;
					else counter++;
				}
			}
			if (counter === 0) return 1;
			else if (counter === 1) return 2;
			else return 0;
		}
		else return 0;
	}

	checkSelectionInContext (sel, field, turn) {
		let c = turn.cells,
			res = 0,
			game = new Game({field, order: this.order});
		if (c.length == 0) {
			if (!turn.selection) {
				if (field.get(sel).color != game.order) return 0;
				let CET = game.checkTurns(sel);
				if (CET == 0) return 0;
				if (CET == 1) {
					let c = field.get(sel);
					for (let i = 0; i < 8; i++)
						for (let j = 0; j < 8; j++)
							if ((field[i][j] != c) && (field[i][j].color == c.color))
								if (game.checkTurns(new Pair(i, j)) == 2)
									return 0;
					return 1;
				}
				return 1;
			}
			else {
				let CET = game.checkTurns(turn.selection) == 2;
				let CCT = game.checkCheckerTurn(turn.selection, sel);
				if ((CCT == 0) || ((CCT == 1) && CET)) return 0;
				res = CCT == 2 ? 3 : 1;
			}
		}
		else {
			if (!(c.last.state & 4)) return 0;
			let CCT = game.checkCheckerTurn(c.last, sel);
			if (CCT == 2)
				res = 3;
			else return 0;
		}

		let checkForCont = () => {
			let gameCopy = new Game({field, order: this.order});
			if (c.last) {
				gameCopy.makeTurnStep(c.last, sel, 7);
			}
			else {
				gameCopy.makeTurnStep(turn.selection, sel, 7);
			}
			return gameCopy.checkTurns(sel) == 2;
		}

		if ((res & 2) && checkForCont()) {
			return res | 4;
		}
		else {
			res = res | 16;
			let checker = field.get(c.last ? c.last : turn.selection);
			if ((!checker.queen) && (((checker.color === 'white') && (sel.r === 0))
				|| ((checker.color === 'black') && (sel.r === 7)))) return res | 8;
			return res;
		}
	}

	checkFullTurn (turn) {
		// lets return 0 if turn is impossible, otherwise return sequence, compatible with makeTurn
		let field = this.field.slice();
		let sel = this.checkSelectionInContext(turn.selection, field, {cells: []});
		if (!sel) return 0;
		return turn.cells.reduce((a, b, i) => {
			if (a == 0) return 0;
			let r = this.checkSelectionInContext(b, field, { selection: a[0], cells: a.slice(1) });
			if (r == 0) return 0;
			a.push(Object.assign(b, { state: r }))
			this.makeTurnStep.call({field}, a.cells[a.cells.length - 1], b, r);
		}, [turn.selection]);
	}

	makeTurnStep ({r, c}, {r: row, c: col}, s) {
		if (s == 0) return false;
		if (s & 1) {
			this.field[row][col] = this.field[r][c];
			this.field[r][c] = 0;
		}
		if (s & 2) {
			for (let k = 1; row + k * Math.sign(r - row) !== r; k++) // it's not important if it's row or col comparsion
				this.field[r + k * Math.sign(row - r)][c + k * Math.sign(col - c)] = 0;
		}
		if (s & 8) {
			this.field[row][col].queen = true;
		}
		if (s & 16) {
			this.order = this.order == 'white' ? 'black' : 'white';
		}
		return true;
	}

	makeFullTurn (turn) {
		turn.cells.reduce((a, b) => {
			this.makeTurnStep(a, b, b.state);
			return b;
		}, turn.selection);
	}

	checkTurns (selection) {
		let {r, c} = selection,
			res = 0;
		for (let d of Object.entries( this.field.getDiagonal(r, c, true) ))
			if (d[0]) {
				let check = this.checkCheckerTurn(selection, d[1]);
				if ((check == 1) && (res != 2)) res = 1;
				else if (check == 2) res = 2;
			}
		for (let d of Object.entries( this.field.getDiagonal(r, c, false) ))
			if (d[0]) {
				let check = this.checkCheckerTurn(selection, d[1]);
				if ((check == 1) && (res != 2)) res = 1;
				else if (check == 2) res = 2;
			}
		return res;
	}
}

class TurnBuilder {
	constructor (turn, gameShot) {
		this.turn = turn;
		this.game = new Game();
		this.game.fromShot(gameShot);
		this.history = [];
	}

	addCell (row, col) {
		let p = new Pair(row, col),
			check = this.game.checkSelectionInContext(p, this.game.field, this.turn),
			t = this.turn;

		if (!check) {
			if (t.selection) {
				if (!t.cells.last) {
					t.selection = undefined;
					return this.addCell(...arguments);
				}
				return 0;
			}
			return 0;
		}

		if (t.selection) {
			this.history.push(this.game.makeShot());
			if (t.cells.length >= 1)
				this.game.makeTurnStep(t.cells.last, p, check);
			else
				this.game.makeTurnStep(t.selection, p, check);
			t.cells.push(Object.assign(p, { state: check }));
		}
		else
			t.selection = p;

		if (check & 16)
			t.state = 'complete';

		return check;
	}

	popCell () {
		if (this.turn.cells.length > 0) {
			this.game.fromShot(this.history[this.history.length - 1]);
			this.history.pop();
			this.turn.cells.pop();
		}
		else {
			this.turn.selection = undefined;
		}
	}

	getTurn () {
		let t = new TurnCommand(this.turn.client, this.turn.game);
		t.cells = this.turn.cells;
		t.selection = this.turn.selection;
		t.history = this.history.slice();
		return t;
	}
}

class TurnCommand {
	constructor (client, game) {
		this.client = client;
		this.game = game;
		this.selection = undefined;
		this.cells = [];
		Object.defineProperty(this.cells, 'last', {
			get () { return this[this.length - 1] }
		});
		this.history = [];
	}

	execute () {
		this.game.makeFullTurn(this);
		this.state = 'finished';
		this.client.setState({
			game: this.game
		})
	}

	undo () {

	}
}

export {Game, TurnCommand, TurnBuilder}