"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Link = require("./Components/Link/Link.js");

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var suffixes = [".com", ".gov", ".net", ".org"];

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      text: '',
      link: ''
    };
    _this.handleChange = _this.handleChange.bind(_this);
    window.state = function () {
      console.log(_this.state);
    };
    return _this;
  }

  _createClass(App, [{
    key: "check",
    value: function check(textStr) {
      var acceptable = void 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = suffixes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var elem = _step.value;

          acceptable = textStr.indexOf(elem);
          if (acceptable > -1) {
            var n = textStr.lastIndexOf(" ", acceptable);
            var linkStr = textStr.substring(n + 1, acceptable + 4);
            if (!linkStr.includes("http://")) {
              this.setState({ link: "http://" + linkStr });
            } else {
              this.setState({ link: linkStr });
            }
            break;
          } else {
            this.setState({ link: '' });
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var val = event.target.value;
      this.setState({ text: val });
      this.check(val);
    }
  }, {
    key: "render",
    value: function render() {
      var linkURL = this.state.link;
      return _react2.default.createElement(
        "div",
        { className: "app" },
        _react2.default.createElement(
          "div",
          { className: "text" },
          "Enter your text here:",
          _react2.default.createElement("br", null),
          _react2.default.createElement("input", {
            name: "text",
            placeholder: "Preview!",
            onChange: this.handleChange
          })
        ),
        this.state.link ? _react2.default.createElement(_Link2.default, { linkFromParent: linkURL }) : null
      );
    }
  }]);

  return App;
}(_react.Component);

;

exports.default = App;

//{event => this.setState({text: event.target.value})}

//algorithm should look for the string that ends in those things
//use .indexOf, then find the first whitespace before that
//index of whitespace to either index of next whitespace or end
//needs a redirect