(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Checkers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _game_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _game_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_game_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gameLogic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

 // let React = require('react');




function CheckerImg(_ref) {
  var color = _ref.color,
      queen = _ref.queen;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "checker-img",
    src: color + (queen ? '-queen' : '') + '.png',
    alt: color === 'white' ? 'wh' : 'bl'
  });
}

function CheckerField(props) {
  var checker = props.checker ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CheckerImg, {
    color: props.checker.color,
    queen: props.checker.queen
  }) : undefined;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'checker-field checker-field-' + props.bg + (props.checked ? ' checker-field-checked' : ''),
    onClick: props.onClick,
    pos: props.pos
  }, checker);
}

var Checkers = /*#__PURE__*/function (_React$Component) {
  _inherits(Checkers, _React$Component);

  var _super = _createSuper(Checkers);

  function Checkers(props) {
    var _this;

    _classCallCheck(this, Checkers);

    _this = _super.call(this, props);
    _this.state = {
      field: [],
      order: 'white',
      checked: undefined
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.turn = new _gameLogic_js__WEBPACK_IMPORTED_MODULE_2__["TurnCommand"](_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Checkers, [{
    key: "handleClick",
    value: function handleClick(e) {
      // just add temporary that it has not color
      var _ref2 = _toConsumableArray(e.target.closest('.checker-field').getAttribute('pos').split('_')),
          row = _ref2[0],
          col = _ref2[1]; // maybe i'll need to remake this later


      if (this.state.checked) {
        this.buffer = {
          row: Number(row),
          col: Number(col)
        };
        var res = this.turn.execute();

        switch (res) {
          case 0:
            if (this.state.field[row][col]) this.setState(function (state) {
              return {
                checked: state.field[row][col]
              };
            });else this.setState({
              checked: undefined
            });
            break;

          case 2:
          case 1:
            this.setState({
              checked: undefined
            });
            break;

          case 3:
            break;
        }
      } else {
        if (this.state.field[row][col] && this.state.field[row][col].color === this.state.order) this.setState(function (state) {
          return {
            checked: state.field[row][col]
          };
        });else this.setState({
          checked: undefined
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var ic = new _gameLogic_js__WEBPACK_IMPORTED_MODULE_2__["InitCommand"](this); // idk wheter this is duck or not..

      ic.execute();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var checked = function checked(i, j) {
        return _this2.state.checked && i === _this2.state.checked.row && j === _this2.state.checked.col;
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "field"
      }, this.state.field.reduce(function (arr, el, i) {
        return arr.concat(el.map(function (checker, j) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CheckerField, {
            key: i + '_' + j,
            pos: i + '_' + j,
            checker: checker,
            checked: checked(i, j),
            bg: (i + j) % 2 === 0 ? 'white' : 'black',
            onClick: _this2.handleClick
          });
        }));
      }, []));
    }
  }]);

  return Checkers;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); // export default Checkers;




/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(13);
            var content = __webpack_require__(18);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(15);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".field {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(8, 50px);\r\n\tgrid-template-rows: repeat(8, 50px);\r\n}\r\n\r\n.checker-field {\r\n\r\n}\r\n\r\n.checker-field-white {\r\n\tbackground: #FFFF66;\r\n}\r\n\r\n.checker-field-black {\r\n\tbackground: #CC6600;\r\n}\r\n\r\n.checker-field-checked {\r\n\tbackground: green;\r\n}\r\n\r\n.checker-img {\r\n\twidth: 50px;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitCommand", function() { return InitCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnCommand", function() { return TurnCommand; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var game = new function () {
  // operator new here just to initialize 'this'
  var Checker = /*#__PURE__*/function () {
    function Checker(color, row, col) {
      _classCallCheck(this, Checker);

      this.color = color;
      this.queen = false; // when it initializes it's always not queen

      this.changeCoords(row, col);
    }

    _createClass(Checker, [{
      key: "changeCoords",
      value: function changeCoords(row, col) {
        this.row = row;
        this.col = col;
      }
    }]);

    return Checker;
  }();

  this.field = [];
  Object.assign(this.field, {
    getDiagonal: function getDiagonal(y, x, dir) {
      // dir === true means left-right diagonal avd dir === false vice versa
      var arr = Object.assign([], _defineProperty({}, Symbol.iterator, function () {
        var current = [].map.call(Object.keys(this), Number).filter(function (a) {
          return !isNaN(a);
        }).reduce(function (a, b) {
          return b < a ? b : a;
        }); // finds smallest index 

        var self = this;
        return {
          current: current,
          next: function next() {
            if (self[current] !== undefined) return {
              value: self[current++],
              done: false
            };else return {
              done: true
            };
          }
        };
      }));
      y = Number(y);
      x = Number(x); // if it'll pass as string this will cause to empty array as result

      if (dir) {
        for (var c = 0; y + c < 8 && x + c < 8; c++) {
          arr[c] = this[y + c][x + c];
        }

        for (var _c = -1; y + _c >= 0 && x + _c >= 0; _c--) {
          arr[_c] = this[y + _c][x + _c];
        }
      } else {
        for (var _c2 = 0; y + _c2 < 8 && x - _c2 >= 0; _c2++) {
          arr[_c2] = this[y + _c2][x - _c2];
        }

        for (var _c3 = -1; y + _c3 >= 0 && x - _c3 < 8; _c3--) {
          arr[_c3] = this[y + _c3][x - _c3];
        }
      }

      return arr; // add iterator method to this array obj
    },
    flush: function flush() {
      this.splice(0, this.length);
    }
  });

  this.init = function () {
    var field = this.field; // this is not copy because we must change original array. BE CAREFUL!

    field.flush(); // just to be sure. and this might be possible if in same room game restarts

    for (var i = 0; i < 8; i++) {
      field.push([]);

      for (var j = 0; j < 8; j++) {
        if (i % 2 === j % 2) {
          if (i < 3) field[i].push(new Checker('black', i, j));else if (i > 4) field[i].push(new Checker('white', i, j));else field[i].push(0);
        } else field[i].push(0);
      }
    }

    this.order = 'white';
  };

  this.changeOrder = function () {
    this.order = this.order == 'white' ? 'black' : 'white';
  };

  this.replaceChecker = function (r, c, row, col) {
    this.field[row][col] = this.field[r][c];
    this.field[row][col].changeCoords(row, col);
    this.field[r][c] = 0;
  };

  this.deleteChecker = function (row, col) {
    this.field[row][col] = 0;
  };

  this.checkCheckerTurn = function (checker, row, col) {
    var _checker = _objectSpread({}, checker),
        r = _checker.row,
        c = _checker.col,
        queen = _checker.queen,
        color = _checker.color; // checks that turn is possible (false - 0) and if so (1) and there is ONE enemy on way return 2 (eating turn)
    // this thing assumes that there are no other eating turn


    if (Math.abs(row - r) === Math.abs(col - c)) {
      // checks if on same diag
      var d = this.field.getDiagonal(r, c, Math.sign(row - r) === Math.sign(col - c)),
          index = row - r; // it's not important if this is row or col comparsion

      if (d[index]) return 0; // checks if there is no other checker on new place

      if (!queen) {
        switch (Math.abs(index)) {
          case 1:
            if (Math.sign(index) > 0 && color === 'black' || Math.sign(index) < 0 && color === 'white') return 1;else return 0;

          case 2:
            return d[index - Math.sign(index)] && d[index - Math.sign(index)].color !== color ? 2 : 0;

          default:
            return 0;
        }
      }

      var counter = 0; // checks if there is no ally checkers on path and that its not more than one enemy checker on path

      for (var k = Math.sign(index); k !== index; k += Math.sign(index - k)) {
        if (d[k]) {
          if (d[k].color === color) return 0;else counter++;
        }
      }

      if (counter === 0) return 1;else if (counter === 1) return 2;else return 0;
    } else return 0;
  };

  this.checkEatingTurns = function (checker) {
    var row = checker.row,
        col = checker.col;

    for (var i = row - 1; i >= 0; i--) {
      for (var j = col - 1; j >= 0; j--) {
        if (this.checkCheckerTurn(checker, i, j) === 2) return true;
      }

      for (var _j = col + 1; _j < 8; _j++) {
        if (this.checkCheckerTurn(checker, i, _j) === 2) return true;
      }
    }

    for (var _i = row + 1; _i < 8; _i++) {
      for (var _j2 = col - 1; _j2 >= 0; _j2--) {
        if (this.checkCheckerTurn(checker, _i, _j2) === 2) return true;
      }

      for (var _j3 = col + 1; _j3 < 8; _j3++) {
        if (this.checkCheckerTurn(checker, _i, _j3) === 2) return true;
      }
    }

    return false;
  };

  this.checkTurn = function (checker, row, col) {
    // there is no need to check wheter checker is right color or not. game does not know which client matches which color
    var field = this.field;

    switch (this.checkCheckerTurn(checker, row, col)) {
      case 0:
        return 0;

      case 2:
        return 2;

      case 1:
        // check for any eating turns possible. if so return 0 if not return 1
        // also add trigger: if previous turn had done, this check is unnecessary
        // possible optimisation: look only for diagonals 
        for (var i = 0; i < 8; i++) {
          for (var j = 0; j < 8; j++) {
            if (field[i][j] != checker && field[i][j].color == checker.color) if (this.checkEatingTurns(field[i][j])) return 0;
          }
        }

        return 1;
    }
  };

  this.checkWin = function () {
    var c1 = 0,
        c2 = 0;

    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        if (this.field[i][j].color === 'white') c1++;else if (this.field[i][j].color === 'black') c2++;
      }
    }

    if (c1 === 0) return 'black';else if (c2 === 0) return 'white';else return false;
  };

  this.makeTurn = function (checker, row, col) {
    var checkRes = this.checkTurn(checker, row, col);
    var r = checker.row,
        c = checker.col;

    switch (checkRes) {
      case 0:
        return 0;

      case 3: // actions under 1, 2 and 3 states are same: we need to delete all checkers that are on way and move right checker

      case 2:
        // remove all enemy checkers from path
        for (var k = 1; row + k * Math.sign(r - row) !== r; k++) {
          // it's not important if it's row or col comparsion
          this.deleteChecker(r + k * Math.sign(row - r), c + k * Math.sign(col - c));
        }

      case 1:
        // replace checker to new pos
        this.replaceChecker(r, c, row, col);
        if (!checker.queen && (checker.color === 'white' && row === 0 || checker.color === 'black' && row === 7)) checker.queen = true;
        break;
    }
    /*if (this.checkWin())
    	*/


    if (checkRes == 2 && this.checkEatingTurns(this.field[row][col])) return 3;else if (checkRes == 0) {
      return 0;
    } else {
      this.changeOrder();
      return checkRes;
    }
  };

  this.init();
}(); // just because i want to isolate whole game from UI part. After creation of server client and game properties will be set properly

var CheckersCommand = function CheckersCommand(client) {
  _classCallCheck(this, CheckersCommand);

  this.client = client;
  this.game = game;
}; // init command also must be here


var InitCommand = /*#__PURE__*/function (_CheckersCommand) {
  _inherits(InitCommand, _CheckersCommand);

  var _super = _createSuper(InitCommand);

  function InitCommand() {
    _classCallCheck(this, InitCommand);

    return _super.apply(this, arguments);
  }

  _createClass(InitCommand, [{
    key: "execute",
    value: function execute() {
      this.game.init();
      this.client.setState({
        field: this.game.field,
        order: this.game.order // this thing will not exist after i'll create server

      });
    }
  }]);

  return InitCommand;
}(CheckersCommand);

var TurnCommand = /*#__PURE__*/function (_CheckersCommand2) {
  _inherits(TurnCommand, _CheckersCommand2);

  var _super2 = _createSuper(TurnCommand);

  function TurnCommand() {
    _classCallCheck(this, TurnCommand);

    return _super2.apply(this, arguments);
  }

  _createClass(TurnCommand, [{
    key: "execute",
    value: function execute() {
      // buffer will contain choosed checker and new position
      var res = this.game.makeTurn(this.client.state.checked, this.client.buffer.row, this.client.buffer.col);
      var ns = {
        field: this.game.field,
        order: this.game.order
      };

      switch (res) {
        case 0:
        case 1:
        case 2:
          ns.checked = undefined;

        case 3:
          break;
      }

      this.client.setState(ns);
      return res;
    }
    /*undo () {
    
    }*/

  }]);

  return TurnCommand;
}(CheckersCommand);
/*let history = [];

function executeCommand (cmd) {
	if (cmd.execute())
		history.push(cmd);
}*/




/***/ })

}]);