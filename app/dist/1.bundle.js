(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckersGame; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _game_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _game_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_game_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gameLogic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _checkers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

 // let React = require('react');





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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, props.history.map(function (a, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, i), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, a.toString()));
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
          timeLeft = _this$props$player.timeLeft,
          color = _this$props$player.color,
          field = _this$props.field,
          reverse = _this$props.reverse;
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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Timer, {
        time: timeLeft
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Figures, {
        amount: amount,
        color: color
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "history-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(History, {
        history: [],
        color: color
      })));
    }
  }]);

  return PlayerInfo;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var PlayersList = /*#__PURE__*/function (_React$Component2) {
  _inherits(PlayersList, _React$Component2);

  var _super3 = _createSuper(PlayersList);

  function PlayersList() {
    _classCallCheck(this, PlayersList);

    return _super3.apply(this, arguments);
  }

  _createClass(PlayersList, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "players"
      });
    }
  }]);

  return PlayersList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Chat = /*#__PURE__*/function (_React$Component3) {
  _inherits(Chat, _React$Component3);

  var _super4 = _createSuper(Chat);

  function Chat() {
    _classCallCheck(this, Chat);

    return _super4.apply(this, arguments);
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

var CheckersGame = /*#__PURE__*/function (_React$Component4) {
  _inherits(CheckersGame, _React$Component4);

  var _super5 = _createSuper(CheckersGame);

  function CheckersGame(props) {
    var _this2;

    _classCallCheck(this, CheckersGame);

    _this2 = _super5.call(this, props);
    _this2.state = {
      field: [],
      order: 'white',
      checked: undefined,
      win: false
    };
    _this2.handleCheckersClick = _this2.handleCheckersClick.bind(_assertThisInitialized(_this2));
    _this2.turn = new _gameLogic_js__WEBPACK_IMPORTED_MODULE_2__["TurnCommand"](_assertThisInitialized(_this2));
    _this2.checkWin = new _gameLogic_js__WEBPACK_IMPORTED_MODULE_2__["CheckWinCommand"](_assertThisInitialized(_this2));
    _this2.init = new _gameLogic_js__WEBPACK_IMPORTED_MODULE_2__["InitCommand"](_assertThisInitialized(_this2));
    _this2.history = []; // fiction

    _this2.player1 = {
      user: {
        avatarSrc: 'black-queen.png',
        FIO: 'Artem Ebat',
        money: 25347,
        rating: 1987
      },
      timeLeft: 224000,
      color: 'black'
    };
    _this2.player2 = {
      user: {
        avatarSrc: 'white-queen.png',
        FIO: 'Kirill Ebat',
        money: 18967,
        rating: 1999
      },
      timeLeft: 228000,
      color: 'white'
    };
    return _this2;
  }

  _createClass(CheckersGame, [{
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
      this.restart();
    }
  }, {
    key: "handleCheckersClick",
    value: function handleCheckersClick(e) {
      var _ref = _toConsumableArray(e.target.closest('.checkers-cell').getAttribute('pos').split('_').map(Number)),
          row = _ref[0],
          col = _ref[1];

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
            var cw = this.executeCommand(this.checkWin).value;
            if (cw) this.setState({
              win: cw
            });
            this.turn = new _gameLogic_js__WEBPACK_IMPORTED_MODULE_2__["TurnCommand"](this);
          }
        } else setChecked(row, col);
      } else setChecked(row, col);
    }
  }, {
    key: "executeCommand",
    value: function executeCommand(command) {
      var res = command.execute();
      if (res.state === 'finished') this.history.push(command);
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
        player: this.player1,
        field: this.state.field
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_checkers__WEBPACK_IMPORTED_MODULE_3__["CheckersUI"], {
        activePlayer: 'white',
        onClick: this.handleCheckersClick,
        field: this.state.field,
        checked: this.state.checked
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "player-container player2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PlayerInfo, {
        player: this.player2,
        field: this.state.field,
        reverse: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chat-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Chat, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "players-list-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PlayersList, null))));
    }
  }]);

  return CheckersGame;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(13);
            var content = __webpack_require__(20);

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(15);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".app {\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n\tpadding: 30px 50px;\r\n}\r\n\r\n.game {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 1fr auto 1fr;\r\n\tgrid-template-rows: 1fr 0.5fr;\r\n\tgrid-template-areas: \"player1 game player2\"\r\n\t\t\t\t\t\t \"chat chat list\";\r\n}\r\n\r\n.player1 {\r\n\tgrid-area: player1;\r\n}\r\n\r\n.player2 {\r\n\tgrid-area: player2;\r\n}\r\n\r\n.game-container {\r\n\tgrid-area: game;\r\n}\r\n\r\n.chat-container {\r\n\tgrid-area: chat;\r\n}\r\n\r\n.players-list-container {\r\n\tgrid-area: list;\r\n}\r\n\r\n.avatar-img {\r\n\twidth: 150px;\r\n}\r\n\r\n.timer {\r\n\ttext-align: center;\r\n}\r\n\r\n.figures {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(13, 15px); /* 13 here instead of 12 cause in other case checkers would stick out */\r\n\tflex-direction: row-reverse;\r\n}\r\n\r\n.figures__checker-img {\r\n\tposition: relative;\r\n\twidth: 200%;\r\n\topacity: 0.5;\r\n}\r\n\r\n.figures__checker-img_visible {\r\n\topacity: 1;\r\n}\r\n\r\n.FIO {\r\n\tfont-family: 'Open-sans';\r\n}\r\n\r\n.player-container {\r\n\tdisplay: flex;\r\n}\r\n\r\n.info.reverse, .reverse.profile {\r\n\tflex-direction: column-reverse;\r\n}\r\n\r\n.profile {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n\tjustify-content: space-around;\r\n}\r\n\r\n.info {\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\t-webkit-flex-direction: column;\r\n\t-moz-flex-direction: column;\r\n\t-ms-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n}\r\n\r\n.info-container {\r\n\tdisplay: -webkit-flex;\r\n\tdisplay: -moz-flex;\r\n\tdisplay: -ms-flex;\r\n\tdisplay: -o-flex;\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitCommand", function() { return InitCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnCommand", function() { return TurnCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckWinCommand", function() { return CheckWinCommand; });
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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var game = new function () {
  // operator new here just to initialize 'this'
  var Checker = /*#__PURE__*/function () {
    function Checker(color, row, col) {
      var queen = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      _classCallCheck(this, Checker);

      this.color = color;
      this.queen = queen;
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
      return this;
    },
    toString: function toString() {
      return this.reduce(function (str, arr) {
        return arr.reduce(function (s, el) {
          if (!el) return s + '0';else if (el.color === 'white' && !el.queen) return s + '1';else if (el.color === 'white' && el.queen) return s + '2';else if (el.color === 'black' && !el.queen) return s + '3';else if (el.color === 'black' && el.queen) return s + '4';
        }, '');
      }, '');
    },
    fromString: function fromString(s) {
      if (s.length != 64) throw new Error('You trying to convert incompatible string');
      this.splice.apply(this, [0, this.length].concat(_toConsumableArray(s.split('').reduce(function (arr, c, i) {
        if (i % 8 === 0) arr.push([]);
        var j = Math.floor(i / 8);
        if (c == 0) arr[j].push(0);else if (c == 1) arr[j].push(new Checker('white', j, i % 8, false));else if (c == 2) arr[j].push(new Checker('white', j, i % 8, true));else if (c == 3) arr[j].push(new Checker('black', j, i % 8, false));else if (c == 4) arr[j].push(new Checker('black', j, i % 8, true));
        return arr;
      }, []))));
      return this;
    }
  });

  this.init = function () {
    this.field.fromString('03030303' + '30303030' + '03030303' + '00000000' + '00000000' + '10101010' + '01010101' + '10101010');
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
    var cont = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var checkRes = this.checkTurn(checker, row, col);
    var r = checker.row,
        c = checker.col;
    if (cont && checkRes === 1) return 0;

    switch (checkRes) {
      case 0:
        return 0;

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

    return this.postProc(checkRes, row, col);
  };

  this.postProc = function (checkRes, row, col) {
    // assumes checkRes is not 0
    if (checkRes == 2 && this.checkEatingTurns(this.field[row][col])) return 3;else {
      this.changeOrder();
      return checkRes;
    }
  };

  this.init();
}(); // just because i want to isolate whole game from UI part. After creation of server client and game properties will be set properly

var CheckersCommand = /*#__PURE__*/function () {
  function CheckersCommand(client) {
    _classCallCheck(this, CheckersCommand);

    this.client = client;
    this.game = game;
  }

  _createClass(CheckersCommand, [{
    key: "saveBackup",
    value: function saveBackup() {
      this.backup = this.game.field;
    }
  }]);

  return CheckersCommand;
}(); // init command also must be here


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
      return {
        state: 'finished',
        field: this.game.field,
        order: this.game.order
      };
    }
  }]);

  return InitCommand;
}(CheckersCommand);

var TurnCommand = /*#__PURE__*/function (_CheckersCommand2) {
  _inherits(TurnCommand, _CheckersCommand2);

  var _super2 = _createSuper(TurnCommand);

  function TurnCommand(client) {
    var _this;

    _classCallCheck(this, TurnCommand);

    _this = _super2.apply(this, arguments);
    _this.history = [];
    return _this;
  }

  _createClass(TurnCommand, [{
    key: "execute",
    value: function execute() {
      if (this.state === 'finished') throw new Error('This turn has already been finished');
      var _this$client$buffer = this.client.buffer,
          row = _this$client$buffer.row,
          col = _this$client$buffer.col;
      this.saveBackup(); // since client don't change command object, it's state saves from previous turn, so i can do this

      var res = this.game.makeTurn(this.selection, row, col, this.state === 'unfinished');

      if (res === 0) {
        this.state = 'rejected';
        return false;
      } else {
        if (res === 3) this.state = 'unfinished';else this.state = 'finished';
        return {
          field: this.game.field,
          order: this.game.order,
          state: this.state
        };
      }
    }
  }, {
    key: "selection",
    set: function set(value) {
      var row = value.row,
          col = value.col;
      if (this.game.field[row][col].color != this.game.order) throw new Error('Incorrect selection');
      this.checked = this.game.field[row][col];
    },
    get: function get() {
      return this.checked;
    }
  }]);

  return TurnCommand;
}(CheckersCommand);

var CheckWinCommand = /*#__PURE__*/function (_CheckersCommand3) {
  _inherits(CheckWinCommand, _CheckersCommand3);

  var _super3 = _createSuper(CheckWinCommand);

  function CheckWinCommand() {
    _classCallCheck(this, CheckWinCommand);

    return _super3.apply(this, arguments);
  }

  _createClass(CheckWinCommand, [{
    key: "execute",
    value: function execute() {
      return {
        value: this.game.checkWin(),
        state: 'service'
      };
    }
  }]);

  return CheckWinCommand;
}(CheckersCommand);



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkers", function() { return Checkers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckersUI", function() { return CheckersUI; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _checkers_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _checkers_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_checkers_css__WEBPACK_IMPORTED_MODULE_1__);
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




function CheckerImg(_ref) {
  var color = _ref.color,
      queen = _ref.queen;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "checkers-img",
    src: color + (queen ? '-queen' : '') + '.png',
    alt: color === 'white' ? 'wh' : 'bl'
  });
}

function CheckerField(_ref2) {
  var checker = _ref2.checker,
      bg = _ref2.bg,
      pos = _ref2.pos,
      checked = _ref2.checked;
  checker = checker ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CheckerImg, {
    color: checker.color,
    queen: checker.queen
  }) : undefined;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'checkers-cell checkers-cell-' + bg + (checked ? ' checkers-cell-checked' : ''),
    pos: pos
  }, checker);
}

var Checkers = /*#__PURE__*/function (_React$Component) {
  _inherits(Checkers, _React$Component);

  var _super = _createSuper(Checkers);

  function Checkers() {
    _classCallCheck(this, Checkers);

    return _super.apply(this, arguments);
  }

  _createClass(Checkers, [{
    key: "render",
    value: function render() {
      var _this = this;

      var checked = function checked(i, j) {
        return _this.props.checked && i === _this.props.checked.row && j === _this.props.checked.col;
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "checkers-field",
        onClick: this.props.onClick
      }, this.props.field.reduce(function (arr, el, i) {
        return arr.concat(el.map(function (checker, j) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CheckerField, {
            key: i + '_' + j,
            pos: i + '_' + j,
            checker: checker,
            checked: checked(i, j),
            bg: (i + j) % 2 === 0 ? 'white' : 'black'
          });
        }));
      }, []));
    }
  }]);

  return Checkers;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); // HOC for checkers


function CheckersUI(_ref3) {
  var _ref3$activePlayer = _ref3.activePlayer,
      activePlayer = _ref3$activePlayer === void 0 ? 'white' : _ref3$activePlayer,
      passThrough = _objectWithoutProperties(_ref3, ["activePlayer"]);

  var ABC = 'abcdefgh';
  var cl = activePlayer === 'black' ? ' reverse' : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkers-UI"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkers-UI__top-letters checkers-UI__letters" + cl
  }, ABC.split('').map(function (a, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "checkers-UI__letter",
      key: i
    }, a);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkers-UI__left-letters checkers-UI__letters" + cl
  }, ABC.split('').map(function (a, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "checkers-UI__letter",
      key: i
    }, i + 1);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkers" + cl
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Checkers, passThrough), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkers-UI__right-letters checkers-UI__letters" + cl
  }, ABC.split('').map(function (a, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "checkers-UI__letter",
      key: i
    }, i + 1);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkers-UI__bottom-letters checkers-UI__letters" + cl
  }, ABC.split('').map(function (a, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "checkers-UI__letter",
      key: i
    }, a);
  })));
}



/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(13);
            var content = __webpack_require__(24);

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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(15);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".checkers-field {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(8, 50px);\r\n\tgrid-template-rows: repeat(8, 50px);\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\t-o-user-select: none;\r\n\tuser-select: none;\r\n}\r\n\r\n.checkers-cell {\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\talign-items: center;\r\n}\r\n\r\n.checkers-cell-white {\r\n\tbackground: #F0F8F0;\r\n}\r\n\r\n.checkers-cell-black {\r\n\tbackground: #708090;\r\n}\r\n\r\n.checkers-cell-checked {\r\n\tbackground: green;\r\n}\r\n\r\n.checkers-img {\r\n\twidth: 43px;\r\n}\r\n\r\n.checkers-UI {\r\n\tdisplay: grid;\r\n\tgrid-template: [row1-start] \". top .\" 50px [row1-end]\r\n\t\t\t\t\t[row2-start] \"left main right\" auto [row2-end]\r\n\t\t\t\t\t[row3-start] \". bottom .\" 50px [row3-end]\r\n\t\t\t\t\t/ 50px auto 50px;\r\n}\r\n\r\n.checkers-UI__top-letters { grid-area: top; }\r\n.checkers-UI__left-letters { grid-area: left; }\r\n.checkers-UI__right-letters { grid-area: right; }\r\n.checkers-UI__bottom-letters { grid-area: bottom; }\r\n\r\n.checkers-UI__letters {\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\talign-items: center;\r\n}\r\n\r\n.checkers-UI__left-letters, .checkers-UI__right-letters {\r\n\tflex-direction: column-reverse;\r\n}\r\n\r\n.reverse.checkers-UI__left-letters, .reverse.checkers-UI__right-letters {\r\n\tflex-direction: column;\r\n}\r\n\r\n.reverse.checkers-UI__top-letters, .reverse.checkers-UI__bottom-letters {\r\n\tflex-direction: row-reverse;\r\n}\r\n\r\n.checkers {\r\n\tgrid-area: main;\r\n\tcursor: pointer;\r\n}\r\n\r\n.reverse.checkers {\r\n\ttransform: rotate(180deg);\r\n}\r\n\r\n.checkers-UI__letter {\r\n\tfont-family: 'Montserrat';\r\n}", ""]);
// Exports
module.exports = exports;


/***/ })
]]);