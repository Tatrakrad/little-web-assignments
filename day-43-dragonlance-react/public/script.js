'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mountNode = document.querySelector('#react-root');

var CharacterInfo = function (_React$Component) {
  _inherits(CharacterInfo, _React$Component);

  function CharacterInfo(props) {
    _classCallCheck(this, CharacterInfo);

    return _possibleConstructorReturn(this, (CharacterInfo.__proto__ || Object.getPrototypeOf(CharacterInfo)).call(this, props));
  }

  _createClass(CharacterInfo, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'character-entry' },
        React.createElement(
          'ol',
          null,
          React.createElement(
            'li',
            null,
            React.createElement(
              'h2',
              null,
              this.props.character.name
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement(
              'h3',
              null,
              this.props.character.race
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement(
              'p',
              null,
              this.props.character.description
            )
          )
        )
      );
    }
  }]);

  return CharacterInfo;
}(React.Component);

var AppComponent = function (_React$Component2) {
  _inherits(AppComponent, _React$Component2);

  function AppComponent() {
    _classCallCheck(this, AppComponent);

    return _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).apply(this, arguments));
  }

  _createClass(AppComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadCharacters();
    }
  }, {
    key: 'loadCharacters',
    value: function loadCharacters() {
      var _this3 = this;

      $.ajax({
        url: 'http://localhost:5000/api/dragonlance'
      }).done(function (data) {
        console.log('now i have data now', data);
        _this3.setState({
          apiResult: data
        });
      }).fail(function () {
        console.log('ajax failed');
        window.alert('trouble!');
      });
    }
  }, {
    key: 'render',
    value: function render() {

      var charList;

      if (this.state !== null) {
        charList = React.createElement(
          'ul',
          null,
          this.state.apiResult.characters.map(function (char) {
            return React.createElement(CharacterInfo, { key: char.name, character: char });
          })
        );
      }

      return React.createElement(
        'div',
        { className: 'char-list' },
        React.createElement(
          'h2',
          null,
          'Characters:'
        ),
        charList
      );
    }
  }]);

  return AppComponent;
}(React.Component);

ReactDOM.render(React.createElement(AppComponent, null), mountNode);
//# sourceMappingURL=script.js.map
