'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = function (_Component) {
  _inherits(Link, _Component);

  function Link(props) {
    _classCallCheck(this, Link);

    var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));

    _this.state = {
      link: _this.props.linkFromParent,
      stuff: '',
      message: '',
      title: '',
      description: '',
      image: 'http://ia.media-imdb.com/images/rock.jpg'
    };
    return _this;
  }

  _createClass(Link, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'link' },
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement('meta', { charSet: 'utf-8' }),
          _react2.default.createElement(
            'title',
            null,
            this.state.link
          ),
          _react2.default.createElement('meta', { property: 'og:title', content: this.state.title }),
          _react2.default.createElement('meta', { property: 'og:type', content: 'website' }),
          _react2.default.createElement('meta', { property: 'og:url', content: 'http://www.imdb.com/title/tt0117500/' }),
          _react2.default.createElement('meta', { property: 'og:image', content: 'http://ia.media-imdb.com/images/rock.jpg' }),
          _react2.default.createElement('meta', { property: 'og:description', content: 'Hello world notice me senpai' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'linktext' },
          _react2.default.createElement(
            'a',
            { href: this.state.link },
            this.state.link
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'image' },
          _react2.default.createElement('img', { src: this.state.image })
        )
      );
    }
  }, {
    key: 'createCORS',
    value: function createCORS(method, url) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.withCredentials = true;
      console.log(xhr);
      return xhr;
    }
  }, {
    key: 'getTitle',
    value: function getTitle(text) {
      return text.match('<title>(.*)?</title>')[1];
    }

    // getDescription(text){
    //   return text.match('<meta name="description" content="(.*)?" />');
    // }

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.createCORS("GET", this.state.link);
      _axios2.default.get(this.state.link).then(function (res) {
        _this2.setState({ title: _this2.getTitle(res.data) });
        console.log(_this2.state);
      }).catch(function (err) {
        _this2.setState({ message: err });
        console.log(_this2.state);
      });
    }
  }]);

  return Link;
}(_react.Component);

exports.default = Link;