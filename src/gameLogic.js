// there must be commands: undo, turn, surrender. when server will be ready, server logic will be 'editor' thing and
// player sreen will be API thing. player will send his selected checker position and new place to this checker to stand on
// then game logic will refactor this commands and game state will change. Only problem is that server must not response
// on what player checked. Client must reject thing, so it's not so isolated game logic from players view...

// issue: checking turn for possibility is happening in game logic, so maybe i should move whole logic to this place
// even that player can choose wrong checker. And what about multy-turns???

// at the moment: game is 'editor'. this object has some methods like makeTurn, init, etc. This object is reponsible for game logic
// interaction with client is going by commands pattern. the only thing commands does to client is setting its state
// issues: uncompleted checkTurn system, unrealised continuing eating



let game = new (function () { // operator new here just to initialize 'this'
	class Checker {
		constructor (color, row, col) {
			this.color = color;
			this.queen = false; // when it initializes it's always not queen
			this.row = row;
			this.col = col
		}
	}

	this.field = [];
	Object.assign(this.field, {
		getDiagonal (y, x, dir) {
			// dir === true means left-right diagonal avd dir === false vice versa
			let arr = Object.assign([], {
				[Symbol.iterator] () {
					let current = [].map.call(Object.keys(this), Number).filter(a => !isNaN(a)).
									reduce((a, b) => b < a ? b : a); // finds smallest index 
					let self = this;
					return {
						current,
						next () {
							if (self[current] !== undefined)
								return { value: self[current++], done: false }
							else
								return { done: true }
						}
					}
				}
			});
			y = Number(y); x = Number(x); // if it'll pass as string this will cause to empty array as result
			if (dir) {
				for (let c = 0; (y + c < 8) && (x + c < 8); c++)
					arr[c] = this[y + c][x + c];
				for (let c = -1; (y + c >= 0) && (x + c >= 0); c--)
					arr[c] = this[y + c][x + c];
			}
			else {
				for (let c = 0; (y + c < 8) && (x - c >= 0); c++)
					arr[c] = this[y + c][x - c];
				for (let c = -1; (y + c >= 0) && (x - c < 8); c--)
					arr[c] = this[y + c][x - c];
			}
			return arr; // add iterator method to this array obj
		},
		flush () {
			this.splice(0, this.length);
		}
		/*,
		copy () {

		}*/
	});

	this.init = function () {
		let field = this.field; // this is not copy because we must change original array. BE CAREFUL!
		field.flush(); // just to be sure. and this might be possible if in same room game restarts
		for (let i = 0; i < 8; i++) {
			field.push([]);
			for (let j = 0; j < 8; j++) {
				if (i % 2 === j % 2) {
					if (i < 3)
						field[i].push(new Checker('black', i, j));
					else if (i > 4)
						field[i].push(new Checker('white', i, j));
					else
						field[i].push(0);
				}
				else field[i].push(0);
			}
		}
		this.order = 'white';
	}

	this.changeOrder = function () {
		this.order = this.order == 'white' ? 'black' : 'white';
	}

	this.replaceChecker = function (r, c, row, col) {
		this.field[row][col] = this.field[r][c];
		this.field[r][c] = 0;
	}
	this.deleteChecker = function (i, j) {
		this.field[i][j] = 0;
	}
	this.checkCheckerTurn = function (checker, row, col) {
		let {row: r, col: c, queen, color} = {...checker};
		// checks that turn is possible (false - 0) and if so (1) and there is ONE enemy on way return 2 (eating turn)
		// this thing assumes that there are no other eating turn
		let check = Math.sign(row - r) === Math.sign(col - c);
		if (check) { // checks if on same diag
			let d = this.field.getDiagonal(r, c, check),
				index = row - r; // it's not important if this is row or col comparsion
			if (d[index]) return 0; // checks if there is no other checker on new place
			if (!queen) {
				switch (Math.abs(index)) {
					case 1: return 1;
					case 2: return d[index - 1] && (d[index - 1].color !== color) ? 2 : 0;
					default: return 0;
				}
			}
			let counter = 0;
			// checks if there is no ally checkers on path and that its not more than one enemy checker on path
			for (let k = Math.sign(index); k !== index; k += Math.sign(index - k))
				if (d[k]) {
					if (d[k].color === color) return 0;
					else counter++;
				}
			if (counter === 0) return 1;
			else if (counter === 1) return 2;
			else return 0;
		}
		else return 0;
	}

	this.checkTurn = function ({checker, row, col}) {
		// there is no need to check wheter checker is right color or not. game does not know which client matches which color
		let field = this.field;
		switch (this.checkCheckerTurn(checker, row, col)) {
			case 0: return 0;
			case 2:
				// check if there next turn is possible. if so return 3 if not return 2
				let {row: r, col: c} = {...checker};

				function check (d) {
					for (let {row: y, col: x} of d) {
						if ((field[y][x] != checker) && (this.checkCheckerTurn(checker, y, x) == 2))
							return true;
					}
					return false;
				}

				return check(field.getDiagonal(r, c, true)) || check(field.getDiagonal(r, c, false)) ? 3 : 2;
			case 1:
				// check for any eating turns possible. if so return 0 if not return 1
				// also add trigger: if previous turn had done, this check is unnecessary
				// possible optimisation: look only for diagonals 
				for (let i = 0; i < 8; i++) {
					for (let j = 0; j < 8; j++) {
						if ((field[i][j] != checker) && (field[i][j].color == checker.color)) {
							let self = this;
							function check (d) {
								for (let {row: r, col: c} of d) {
									if (self.checkCheckerTurn(field[i][j], r, c) == 2)
										return true;
								}
								return false;
							}
							if (check(field.getDiagonal(i, j, true)) || check(field.getDiagonal(i, j, false)))
								return 0;
						}
					}
				}
				return 1;
		}
	}

	this.makeTurn = function ({checker, row, col}) {
		let checkRes = this.checkTurn({checker, row, col});
		let {row: r, col: c} = checker;
		switch (checkRes) {
			case 0: return 0;
			case 3: // actions under 1, 2 and 3 states are same: we need to delete all checkers that are on way and move right checker
			case 2:
				// remove all enemy checkers from path
				for (let c = Math.sign(r - row); row !== r; c += Math.sign(r - row)) // it's not important if it's row or col comparsion
					this.deleteChecker(row + c, col + c);
			case 1:
				// replace checker to new pos
				this.replaceChecker(r, c, row, col);
				return checkRes;
		}
	}

	this.init();
})();

// just because i want to isolate whole game from UI part. After creation of server client and game properties will be set properly
class CheckersCommand {
	constructor (client) {
		this.client = client;
		this.game = game;
	}
}

// init command also must be here
class InitCommand extends CheckersCommand {
	execute () {
		this.game.init();
		this.client.setState({
			field: this.game.field,
			order: this.game.order // this thing will not exist after i'll create server
		});
	}
}

class TurnCommand extends CheckersCommand {
	execute () {
		// buffer will contain choosed checker and new position
		let res = this.game.makeTurn(this.client.buffer);
		// we must check here if client corresponds to right order
		this.client.setState({
			field: this.game.field,
			order: this.game.order
		})
	}
}

