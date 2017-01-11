'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mountNode = document.querySelector('#react-root');

var AComponentWithValidationAndOtherStuff = function (_React$Component) {
  _inherits(AComponentWithValidationAndOtherStuff, _React$Component);

  function AComponentWithValidationAndOtherStuff() {
    _classCallCheck(this, AComponentWithValidationAndOtherStuff);

    var _this = _possibleConstructorReturn(this, (AComponentWithValidationAndOtherStuff.__proto__ || Object.getPrototypeOf(AComponentWithValidationAndOtherStuff)).call(this));

    _this.state = {
      number: 0
    };
    return _this;
  }

  _createClass(AComponentWithValidationAndOtherStuff, [{
    key: 'increment',
    value: function increment() {
      var newNumber = this.state.number + 1;
      this.setState({
        number: newNumber
      });
    }
  }, {
    key: 'attemptSubmit',
    value: function attemptSubmit(evt) {
      evt.preventDefault();

      console.log(this.firstNameInput);

      var makeAjaxCall = true;
      if (this.firstNameInput.value === '') {
        makeAjaxCall = false;
        //mark that one wrong
        this.setState({
          firstNameInvalid: true
        });
      } else {
        this.setState({
          firstNameInvalid: false
        });
      }

      if (this.lastNameInput.value === '') {
        makeAjaxCall = false;
        this.setState({
          lastNameInvalid: true
        });
      } else {
        this.setState({
          lastNameInvalid: false
        });
      }

      //ajax if all is good
      if (makeAjaxCall) {
        console.log('ajax!');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log('render', 'what is in state?', this.state);

      var firstNameInputClass = '';
      if (this.state.firstNameInvalid) {
        firstNameInputClass = 'invalid';
      }

      var lastNameInputClass = '';
      if (this.state.lastNameInvalid) {
        lastNameInputClass = 'invalid';
      }

      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          null,
          this.state.number
        ),
        React.createElement(
          'button',
          { onClick: function onClick() {
              _this2.increment();
            } },
          'increment'
        ),
        React.createElement('hr', null),
        React.createElement(
          'form',
          { onSubmit: function onSubmit(evt) {
              _this2.attemptSubmit(evt);
            } },
          React.createElement('input', { className: firstNameInputClass, placeholder: 'first name', ref: function ref(input) {
              _this2.firstNameInput = input;
            } }),
          React.createElement('input', { className: lastNameInputClass, placeholder: 'last name', ref: function ref(input) {
              _this2.lastNameInput = input;
            } }),
          React.createElement(
            'button',
            null,
            'Save'
          )
        )
      );
    }
  }]);

  return AComponentWithValidationAndOtherStuff;
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
        { className: 'container' },
        React.createElement(AComponentWithValidationAndOtherStuff, null)
      );
    }
  }]);

  return AppComponent;
}(React.Component);

ReactDOM.render(React.createElement(AppComponent, null), mountNode);
//# sourceMappingURL=script.js.map
