'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {

  var mountNode = document.querySelector('#react-root');

  var ClickToggleComponent = function (_React$Component) {
    _inherits(ClickToggleComponent, _React$Component);

    function ClickToggleComponent() {
      _classCallCheck(this, ClickToggleComponent);

      var _this = _possibleConstructorReturn(this, (ClickToggleComponent.__proto__ || Object.getPrototypeOf(ClickToggleComponent)).call(this));

      _this.state = {
        currentClass: ''
      };
      return _this;
    }

    _createClass(ClickToggleComponent, [{
      key: 'toggle',
      value: function toggle() {
        if (this.state.currentClass !== 'on') {
          this.setState({
            currentClass: 'on'
          });
        } else {
          this.setState({
            currentClass: ''
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return React.createElement(
          'div',
          { className: this.state.currentClass, onClick: function onClick() {
              _this2.toggle();
            } },
          'Click Me'
        );
      }
    }]);

    return ClickToggleComponent;
  }(React.Component);

  var AppComponent = function (_React$Component2) {
    _inherits(AppComponent, _React$Component2);

    function AppComponent() {
      _classCallCheck(this, AppComponent);

      return _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).apply(this, arguments));
    }

    _createClass(AppComponent, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          { className: 'react-content' },
          React.createElement(ClickToggleComponent, null),
          React.createElement(ClickToggleComponent, null),
          React.createElement(ClickToggleComponent, null),
          React.createElement(ClickToggleComponent, null)
        );
      }
    }]);

    return AppComponent;
  }(React.Component);

  ReactDOM.render(React.createElement(AppComponent, null), mountNode);
})();
//# sourceMappingURL=script.js.map
