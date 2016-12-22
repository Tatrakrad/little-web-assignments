'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {

  var wat = function wat() {
    console.log('yo arrow function\n this means transpiling ES6 with Babel is Happening.');
  };
  wat();

  var mountNode = document.querySelector('#some-selector');

  var AnotherComponent = function (_React$Component) {
    _inherits(AnotherComponent, _React$Component);

    function AnotherComponent() {
      _classCallCheck(this, AnotherComponent);

      return _possibleConstructorReturn(this, (AnotherComponent.__proto__ || Object.getPrototypeOf(AnotherComponent)).apply(this, arguments));
    }

    _createClass(AnotherComponent, [{
      key: 'render',
      value: function render() {

        return React.createElement(
          'div',
          { className: 'another-component' },
          React.createElement(
            'p',
            null,
            '"I can\'t believe it, ',
            this.props.newName,
            '!"'
          )
        );
      }
    }]);

    return AnotherComponent;
  }(React.Component);

  var HelloMessage = function (_React$Component2) {
    _inherits(HelloMessage, _React$Component2);

    function HelloMessage() {
      _classCallCheck(this, HelloMessage);

      return _possibleConstructorReturn(this, (HelloMessage.__proto__ || Object.getPrototypeOf(HelloMessage)).apply(this, arguments));
    }

    _createClass(HelloMessage, [{
      key: 'render',
      value: function render() {
        var name = 'Miriam';
        var passName = 'Bobby';
        return React.createElement(
          'div',
          null,
          'Hello ',
          name,
          '!',
          React.createElement(AnotherComponent, { newName: passName })
        );
      }
    }]);

    return HelloMessage;
  }(React.Component);

  ReactDOM.render(React.createElement(HelloMessage, null), mountNode);
})();
//# sourceMappingURL=script.js.map
