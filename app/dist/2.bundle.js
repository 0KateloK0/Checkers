(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckersGame; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _game_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _game_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_game_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gameLogic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _checkers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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





/*import io from 'socket.io-client';

let promisify = f => function (...args) {
	return new Promise((resolve, reject) => {
		function callback (err, results) {
			if (err) reject(err);
			else resolve(results);
		}
		f.call(this, ...args, callback);
	})
}
*/

function Timer(props) {
  var t = Math.floor(props.time / 1000);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "timer"
  }, Math.floor(t / 60), ":", t % 60);
}

function Profile(props) {
  var _props$user = props.user,
      avatarSrc = _props$user.avatarSrc,
      FIO = _props$user.FIO,
      money = _props$user.money,
      rating = _props$user.rating;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'profile ' + (props.className || '') + (props.reverse ? 'reverse' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "avatar-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "avatar-img",
    src: avatarSrc,
    alt: "bl"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "FIO-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "FIO"
  }, FIO)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rating-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "rating"
  }, rating)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "money-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "money"
  }, money)));
}

var Figure = function Figure(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "figures__checker-img" + (props.vis ? ' figures__checker-img_visible' : ''),
    src: props.color + '.png',
    alt: "ch"
  });
}; // pureComponent here is that with props.amount == new.amount React still renders el so that this might help


var Figures = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Figures, _React$PureComponent);

  var _super = _createSuper(Figures);

  function Figures() {
    _classCallCheck(this, Figures);

    return _super.apply(this, arguments);
  }

  _createClass(Figures, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "figures"
      }, new Array(12).fill().map(function (a, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Figure, {
          key: i,
          color: _this.props.color,
          vis: i + 1 <= _this.props.amount
        });
      }));
    }
  }]);

  return Figures;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

function History(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "history"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    className: "history__list"
  }, props.history.map(function (a, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: i,
      className: "history__list-el"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "history__list-el-span"
    }, a.toString()));
  })));
}

var PlayerInfo = /*#__PURE__*/function (_React$Component) {
  _inherits(PlayerInfo, _React$Component);

  var _super2 = _createSuper(PlayerInfo);

  function PlayerInfo() {
    _classCallCheck(this, PlayerInfo);

    return _super2.apply(this, arguments);
  }

  _createClass(PlayerInfo, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$player = _this$props.player,
          user = _this$props$player.user,
          color = _this$props$player.color,
          field = _this$props.field,
          reverse = _this$props.reverse,
          history = _this$props.history;
      var amount = field.reduce(function (arr, el) {
        return arr.concat(el.reduce(function (a, b) {
          return b.color == color ? a.concat(b) : a;
        }, []));
      }, []).length;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "info-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'info' + (reverse ? ' reverse' : '')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Profile, {
        user: user,
        reverse: reverse
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "history-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(History, {
        history: history,
        color: color
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Figures, {
        amount: amount,
        color: color
      })));
    }
  }]);

  return PlayerInfo;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Player = /*#__PURE__*/function (_React$PureComponent2) {
  _inherits(Player, _React$PureComponent2);

  var _super3 = _createSuper(Player);

  function Player() {
    _classCallCheck(this, Player);

    return _super3.apply(this, arguments);
  }

  _createClass(Player, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          _this$props2$player = _this$props2.player,
          state = _this$props2$player.state,
          FIO = _this$props2$player.user.FIO,
          rest = _objectWithoutProperties(_this$props2, ["player"]);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", rest, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "player-list__info-FIO"
      }, FIO));
    }
  }]);

  return Player;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

var PlayersList = /*#__PURE__*/function (_React$PureComponent3) {
  _inherits(PlayersList, _React$PureComponent3);

  var _super4 = _createSuper(PlayersList);

  function PlayersList() {
    _classCallCheck(this, PlayersList);

    return _super4.apply(this, arguments);
  }

  _createClass(PlayersList, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "players"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "players-list"
      }, this.props.players.map(function (a, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Player, {
          key: i,
          className: "players-list__info",
          player: a
        });
      })));
    }
  }]);

  return PlayersList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

var Chat = /*#__PURE__*/function (_React$Component2) {
  _inherits(Chat, _React$Component2);

  var _super5 = _createSuper(Chat);

  function Chat() {
    _classCallCheck(this, Chat);

    return _super5.apply(this, arguments);
  }

  _createClass(Chat, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chat"
      });
    }
  }]);

  return Chat;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function GameStats() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      time1 = _ref.time1,
      time2 = _ref.time2,
      order = _ref.order;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gameStats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Timer, {
    time: time2
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Timer, {
    time: time1
  }));
}

var CheckersGame = /*#__PURE__*/function (_React$Component3) {
  _inherits(CheckersGame, _React$Component3);

  var _super6 = _createSuper(CheckersGame);

  function CheckersGame(props) {
    var _this2;

    _classCallCheck(this, CheckersGame);

    _this2 = _super6.call(this, props);
    _this2.state = {
      field: [],
      order: 'white',
      checked: undefined,
      win: false
    };
    _this2.handleCheckersClick = _this2.handleCheckersClick.bind(_assertThisInitialized(_this2));
    _this2.history = [];
    _this2.players = []; // temporary
    // fiction

    _this2.player1 = {
      user: {
        avatarSrc: 'Artem.jpg',
        FIO: 'Artem Katelkin',
        money: 25347,
        rating: 1987
      },
      timeLeft: 228000,
      color: 'white'
    };
    _this2.player2 = {
      user: {
        avatarSrc: 'Kirill.jpg',
        FIO: 'Kirill Glushkov',
        money: 18967,
        rating: 1999
      },
      timeLeft: 224000,
      color: 'black'
    };
    return _this2;
  }

  _createClass(CheckersGame, [{
    key: "makeHistoryObject",
    value: function makeHistoryObject() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$selection = _ref2.selection,
          r = _ref2$selection.row,
          c = _ref2$selection.col,
          row = _ref2.row,
          col = _ref2.col;

      return {
        r: r,
        c: c,
        row: row,
        col: col,
        toString: function toString() {
          var ABC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
          return "".concat(ABC[r]).concat(c, "-").concat(ABC[row]).concat(col);
        }
      };
    }
  }, {
    key: "restart",
    value: function restart() {
      var state = this.executeCommand(this.init);
      this.setState(_objectSpread(_objectSpread({}, state), {}, {
        win: false
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.game = new _gameLogic_js__WEBPACK_IMPORTED_MODULE_2__["Game"]();
      var init = new _gameLogic_js__WEBPACK_IMPORTED_MODULE_2__["InitCommand"](this, this.game);
      this.executeCommand(init);
    }
  }, {
    key: "handleCheckersClick",
    value: function handleCheckersClick(e) {
      var _ref3 = _toConsumableArray(e.target.closest('.checkers-cell').getAttribute('pos').split('_').map(Number)),
          row = _ref3[0],
          col = _ref3[1];

      var setChecked = function setChecked(row, col) {
        try {
          this.turn.selection = {
            row: row,
            col: col
          };
          this.setState({
            checked: this.turn.selection
          });
        } catch (err) {
          this.setState({
            checked: undefined
          });
        }
      }.bind(this);

      if (this.state.checked) {
        this.buffer = {
          row: row,
          col: col
        };
        var res = this.executeCommand(this.turn);

        if (res) {
          var field = res.field,
              order = res.order,
              state = res.state;
          this.setState({
            field: field
          });

          if (state === 'finished') {
            this.setState({
              checked: undefined,
              order: order
            });
            var cw = this.game.checkWin();
            if (cw) this.setState({
              win: cw
            });
            this.turn = new _gameLogic_js__WEBPACK_IMPORTED_MODULE_2__["TurnCommand"](this, game);
          }
        } else setChecked(row, col);
      } else setChecked(row, col);
    }
  }, {
    key: "executeCommand",
    value: function executeCommand(command) {
      var res = command.execute();

      if (res.state === 'finished') {
        this.history.push(this.makeHistoryObject(command));
        /*console.log(JSON.stringify(command));
        socket.emit('turn', {
        	data: JSON.stringify(command)
        })*/
      }

      return res;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "app"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "player-container player1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PlayerInfo, {
        player: this.player2,
        field: this.state.field,
        history: this.history
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GameStats, {
        time1: this.player1.timeLeft,
        time2: this.player2.timeLeft,
        order: this.state.order
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_checkers__WEBPACK_IMPORTED_MODULE_3__["CheckersUI"], {
        activePlayer: 'white',
        onClick: this.handleCheckersClick,
        field: this.state.field,
        checked: this.state.checked
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "player-container player2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PlayerInfo, {
        player: this.player1,
        field: this.state.field,
        reverse: true,
        history: this.history
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chat-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Chat, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "players-list-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PlayersList, {
        players: this.players
      }))));
    }
  }]);

  return CheckersGame;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



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
exports.push([module.i, ".app {\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n\tpadding: 30px 50px;\r\n}\r\n\r\n.game {\r\n\tmin-width: 500px;\r\n\twidth: 80%;\r\n\tmax-width: 800px;\r\n\tmargin: auto;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 1fr 3fr 1fr;\r\n\tgrid-template-rows: 1fr 0.5fr;\r\n\tgrid-template-areas: \"player1 game player2\"\r\n\t\t\t\t\t\t \"chat chat list\";\r\n\tgrid-column-gap: 30px;\r\n}\r\n\r\n.player1 {\r\n\tgrid-area: player1;\r\n}\r\n\r\n.player2 {\r\n\tgrid-area: player2;\r\n}\r\n\r\n.game-container {\r\n\tgrid-area: game;\r\n}\r\n\r\n.chat-container {\r\n\tgrid-area: chat;\r\n}\r\n\r\n.players-list-container {\r\n\tgrid-area: list;\r\n}\r\n\r\n.avatar-img {\r\n\twidth: 100%;\r\n\tdisplay: block;\r\n}\r\n\r\n.timer {\r\n\ttext-align: center;\r\n}\r\n\r\n.figures {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(13, 1fr); /* 13 here instead of 12 cause in other case checkers would stick out */\r\n\tflex-direction: row-reverse;\r\n}\r\n\r\n.figures__checker-img {\r\n\tposition: relative;\r\n\twidth: 200%;\r\n\topacity: 0.5;\r\n}\r\n\r\n.figures__checker-img_visible {\r\n\topacity: 1;\r\n}\r\n\r\n.FIO {\r\n\tfont-family: 'Open-sans';\r\n}\r\n\r\n.player-container {\r\n\tdisplay: flex;\r\n}\r\n\r\n.info.reverse, .reverse.profile {\r\n\tflex-direction: column-reverse;\r\n}\r\n\r\n.profile {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n\tjustify-content: space-around;\r\n}\r\n\r\n.info {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\t-webkit-flex-direction: column;\r\n\t-moz-flex-direction: column;\r\n\t-ms-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n}\r\n\r\n.info-container {\r\n\tdisplay: -webkit-flex;\r\n\tdisplay: -moz-flex;\r\n\tdisplay: -ms-flex;\r\n\tdisplay: -o-flex;\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n}\r\n\r\n.gameStats {\r\n\theight: 30px;\r\n\tdisplay: -webkit-flex;\r\n\tdisplay: -moz-flex;\r\n\tdisplay: -ms-flex;\r\n\tdisplay: -o-flex;\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n\tbackground: #F0F0FA;\r\n\tborder: 1px solid silver;\r\n\tborder-radius: 10px;\r\n}\r\n\r\n.history-container {\r\n\tmax-height: 150px;\r\n\theight: 150px;\r\n\tbackground: #F0F0FA;\r\n\tborder: 1px solid silver;\r\n\tborder-radius: 10px;\r\n\tpadding: 5px;\r\n}\r\n\r\n.history {\r\n\theight: 100%;\r\n\tmax-height: 100%;\r\n\toverflow-y: auto;\r\n\toverflow-y: -moz-scrollbars-none;\r\n\t-ms-overflow-y-style: none;\r\n}\r\n\r\n.history::-webkit-scrollbar {\r\n\twidth: 4px;\r\n\tcursor: pointer;\r\n}\r\n.history::-webkit-scrollbar-button { background: transparent }\r\n.history::-webkit-scrollbar-track {\r\n\tbackground-color: silver;\r\n\tborder-radius: 3px;\r\n}\r\n.history::-webkit-scrollbar-track-piece { background-color: transparent }\r\n.history::-webkit-scrollbar-thumb {\r\n\tbackground-color: #666;\r\n\tborder-radius: 3px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.history__list {\r\n\tmargin: 0;\r\n\tfont-size: 14px;\r\n}\r\n\r\n.history__list-el {\r\n\tpadding: 3px;\r\n}\r\n\r\n.history__list-el::before {\r\n\tfont-size: 12px;\r\n}\r\n\r\n.history__list-el-span {\r\n\theight: 12px;\r\n\tline-height: 12px;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ })

}]);