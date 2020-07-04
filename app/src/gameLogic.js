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
	constructor (field, order='white') {
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
		if (field)
			this.field.fromString( field.toString() );
		this.order = order;
	}

	init () {
		this.field.fromString('03030303' + '30303030' + '03030303' + '00000000' + '00000000' +
			'10101010' + '01010101' + '10101010');
		this.order = 'white';
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
			if (field[d[index]]) return 0; // checks if there is no other checker on new place
			if (!queen) {
				switch (Math.abs(index)) {
					case 1:
						if (((Math.sign(index) > 0) && (color === 'black')) ||
							((Math.sign(index) < 0) && (color === 'white')))
							return 1;
						else return 0;
					case 2:
						let f = field[d[index - Math.sign(index)]];
						return f && (f.color !== color) ? 2 : 0;
					default: return 0;
				}
			}
			let counter = 0;
			// checks if there is no ally checkers on path and that its not more than one enemy checker on path
			for (let k = Math.sign(index); k !== index; k += Math.sign(index - k)) {
				let t = field[d[k]];
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
			game = new Game(field, this.order);
		if (c.length == 0) {
			let CET = game.checkEatingTurns(sel);
			if (!turn.selection) {
				// check whether you can select this or not
				if (!CET) {
					let c = field.get(sel);
					for (let i = 0; i < 8; i++)
						for (let j = 0; j < 8; j++)
							if ((field[i][j] != c) && (field[i][j].color == c.color))
								if (game.checkEatingTurns(new Pair(i, j)))
									return 0;
					return 1;
				}
				return 1;
			}
			else {
				// check if you can make a move (it's eating or there is no eating turns)
				let CCT = game.checkCheckerTurn(turn.selection, sel);
				if ((CCT == 1) && CET) return 0;
				res = 3;
			}
		}
		else {
			if (!(c.last.status & 4)) return 0;
			let CCT = game.checkCheckerTurn(c.last, sel);
			if (CCT == 2)
				res = 3;
			else return 0;
		}

		let checkForCont = () => {
			let gameCopy = new Game(field, this.order);
			if (c.last) {
				gameCopy.makeTurnStep(c.last, sel, 3);
			}
			else {
				gameCopy.makeTurnStep(turn.selection, sel, 3);
			}
			return gameCopy.checkEatingTurns(sel);
		}

		if ((res & 2) && checkForCont()) {
			return res | 4;
		}
		else {
			res = res | 16;
			let checker = field.get(sel);
			if ((!checker.queen) && (((checker.color === 'white') && (row === 0))
				|| ((checker.color === 'black') && (row === 7)))) return res | 8;
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

	checkEatingTurns (selection) {
		let {r, c} = selection;
		for (let i = r - 1; i >= 0; i--) {
			for (let j = c - 1; j >= 0; j--)
				if (this.checkCheckerTurn(selection, new Pair(i, j)) === 2) return true;
			for (let j = c + 1; j < 8; j++)
				if (this.checkCheckerTurn(selection, new Pair(i, j)) === 2) return true;
		}
		for (let i = r + 1; i < 8; i++) {
			for (let j = c - 1; j >= 0; j--)
				if (this.checkCheckerTurn(selection, new Pair(i, j)) === 2) return true;
			for (let j = c + 1; j < 8; j++)
				if (this.checkCheckerTurn(selection, new Pair(i, j)) === 2) return true;
		}
		return false;
	}
}

// just because i want to isolate whole game from UI part. After creation of server client and game properties will be set properly
class CheckersCommand {
	constructor (client, game) {
		this.client = client;
		this.game = game;
	}
	saveBackup () {
		this.backup = this.game.field;
	}
}

// init command also must be here
class InitCommand extends CheckersCommand {
	execute () {
		this.game.init();
		return {
			field: this.game.field,
			order: this.game.order
		}
	}
}

class TurnCommand extends CheckersCommand {
	constructor () {
		super(...arguments);
		this.selection = undefined;
		this.cells = [];
		Object.defineProperty(this.cells, 'last', {
			get () { return this[this.length - 1] }
		})
	}

	addCell (row, col) {
		let p = new Pair(row, col),
			check = this.game.checkSelectionInContext(p, this.client.state.field, this);
		if (!check) return 0;
		if (this.selection)
			this.cells.push(Object.assign(p, { state: check }));
		else
			this.selection = p;
		if (check & 16)
			this.state = 'complete';
		console.log(this);
	}

	popCell () {
		this.cells.pop();
	}

	execute () {
		this.game.makeFullTurn(this);
		this.state = 'finished';
	}
}

class CheckWinCommand extends CheckersCommand {
	execute () {
		return {
			value: this.game.checkWin(),
			state: 'service'
		}
	}
}

export {Game, InitCommand, TurnCommand, CheckWinCommand}