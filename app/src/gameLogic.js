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
	constructor () {
		function Checker (color, queen=false) {
			this.color = color;
			this.queen = queen;
		}

		this.field = new Proxy(Object.assign([], {
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
				return this.reduce((str, arr) => arr.reduce((s, el) => {
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
			}
		}), {
			set (target, key, value) {
				if (key instanceof Pair) {
					target[key.r][key.c] = value;
				}
				else
					return Reflect.set(...arguments);
			},
			get (target, key) {
				if (!(key in target))
					try {
						let p = new Pair(key);
						return target[p.r][p.c];
					}
					catch (err) {
						return Reflect.get(target, key);
					}
				else return Reflect.get(target, key);
			}
		});
		// this.init();
	}

	init () {
		this.field.fromString('03030303' + '30303030' + '03030303' + '00000000' + '00000000' +
			'10101010' + '01010101' + '10101010');
		this.order = 'white';
	}

	changeOrder () {
		this.order = this.order == 'white' ? 'black' : 'white';
	}

	replaceChecker (r, c, row, col) {
		this.field[row][col] = this.field[r][c];
		this.field[r][c] = 0;
	}

	deleteChecker (row, col) {
		this.field[row][col] = 0;
	}

	checkCheckerTurn (selection, row, col) {
		let {row: r, col: c} = {...selection},
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

	checkTurn (selection, row, col) {
		// there is no need to check wheter checker is right color or not. game does not know which client matches which color
		let field = this.field;
		switch (this.checkCheckerTurn(selection, row, col)) {
			case 0: return 0;
			case 2: return 2;
			case 1:
				// check for any eating turns possible. if so return 0 if not return 1
				// also add trigger: if previous turn had done, this check is unnecessary
				// possible optimisation: look only for diagonals 
				let field = this.field, c = field[new Pair(selection)];
				for (let i = 0; i < 8; i++)
					for (let j = 0; j < 8; j++)
						if ((field[i][j] != c) && (field[i][j].color == c.color))
							if (this.checkEatingTurns({row: i, col: j}))
								return 0;
				return 1;
		}
	}

	checkEatingTurns (selection) {
		let {row, col} = selection;
		for (let i = row - 1; i >= 0; i--) {
			for (let j = col - 1; j >= 0; j--)
				if (this.checkCheckerTurn(selection, i, j) === 2) return true;
			for (let j = col + 1; j < 8; j++)
				if (this.checkCheckerTurn(selection, i, j) === 2) return true;
		}
		for (let i = row + 1; i < 8; i++) {
			for (let j = col - 1; j >= 0; j--)
				if (this.checkCheckerTurn(selection, i, j) === 2) return true;
			for (let j = col + 1; j < 8; j++)
				if (this.checkCheckerTurn(selection, i, j) === 2) return true;
		}
		return false;
	}

	checkWin () {
		let c1 = 0, c2 = 0;
		for (let i = 0; i < 8; i++) {
			for (let j = 0; j < 8; j++) {
				if (this.field[i][j].color === 'white') c1++;
				else if (this.field[i][j].color === 'black') c2++;
			}
		}
		if (c1 === 0) return 'black';
		else if (c2 === 0) return 'white';
		else return false;
	}

	makeTurn (selection, row, col, cont=false) {
		let checkRes = this.checkTurn(selection, row, col);
		let {row: r, col: c} = selection;
		if (cont && (checkRes === 1)) return 0;
		switch (checkRes) {
			case 0: return 0;
			case 2:
				// remove all enemy checkers from path
				for (let k = 1; row + k * Math.sign(r - row) !== r; k++) // it's not important if it's row or col comparsion
					this.deleteChecker(r + k * Math.sign(row - r), c + k * Math.sign(col - c));
			case 1:
				// replace checker to new pos
				this.replaceChecker(r, c, row, col);
				let checker = this.field[row][col];
				if ((!checker.queen) && (((checker.color === 'white') && (row === 0))
					|| ((checker.color === 'black') && (row === 7)))) checker.queen = true;
				break;
		}
		return this.postProc(checkRes, row, col);
	}

	postProc (checkRes, row, col) {
		// assumes checkRes is not 0
		if ((checkRes == 2) && this.checkEatingTurns({row, col}))
			return 3;
		else {
			this.changeOrder();
			return checkRes;
		}
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
			state: 'fuck up',
			field: this.game.field,
			order: this.game.order
		}
	}
}

class TurnCommand extends CheckersCommand {
	constructor () {
		super(...arguments);
		this.history = [];
	}

	set selection (value) {
		let {row, col} = value;
		if (this.game.field[row][col].color != this.game.order) throw new Error('Incorrect selection');
		this.checked = value;
	}

	get selection () { return this.checked }

	execute () {
		if (this.state === 'finished') throw new Error('This turn has already been finished');
		let {row, col} = this.client.buffer;
		this.saveBackup();
		// since client don't change command object, it's state saves from previous turn, so i can do this
		let res = this.game.makeTurn(this.selection, row, col, this.state === 'unfinished');
		if (res === 0) {
			this.state = 'rejected';
			return false;
		}
		else {
			if (res === 3) this.state = 'unfinished';
			else {
				this.state = 'finished';
				this.row = row;
				this.col = col;
			}
			return {
				field: this.game.field,
				order: this.game.order,
				state: this.state
			}
		}
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