'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
  var mountNode = document.querySelector('#react-root');

  var AppComponent = function (_React$Component) {
    _inherits(AppComponent, _React$Component);

    function AppComponent() {
      _classCallCheck(this, AppComponent);

      return _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).apply(this, arguments));
    }

    _createClass(AppComponent, [{
      key: 'divClick',
      value: function divClick() {
        console.log('you clicked on that div!');
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var dataExample = [{
          firstName: 'Jane',
          lastName: 'Doe',
          age: 35,
          id: 0
        }, {
          firstName: 'Bob',
          lastName: 'Dole',
          age: 86,
          id: 1
        }, {
          firstName: 'Stephen',
          lastName: 'Spielberg',
          age: 68,
          id: 2
        }];

        var listItems = dataExample.map(function (person) {
          return React.createElement(
            'ul',
            { key: person.id },
            React.createElement(
              'li',
              null,
              'First Name: ',
              person.firstName
            ),
            React.createElement(
              'li',
              null,
              'Last Name: ',
              person.lastName
            ),
            React.createElement(
              'li',
              null,
              'Age: ',
              person.age
            )
          );
        });

        var myGreeting = "Hello There";

        console.log('what is in that variable?', listItems);

        return React.createElement(
          'div',
          { className: 'app-component' },
          React.createElement(
            'p',
            { onClick: function onClick() {
                console.log("hello");
              } },
            myGreeting
          ),
          React.createElement('br', null),
          React.createElement(
            'div',
            { onClick: function onClick() {
                _this2.divClick();
              } },
            'Click me as well bro \u2665'
          ),
          React.createElement(
            'ul',
            null,
            listItems
          ),
          React.createElement(
            'p',
            null,
            '\u2191 The above renders a list from a variable that is mapped \u2191'
          ),
          React.createElement(
            'p',
            null,
            '\u2193 The below maps the array of objects in the JSX \u2193'
          ),
          dataExample.map(function (person) {
            return React.createElement(MyPersonApp.PersonComponent, { key: person.id, firstName: person.firstName, lastName: person.lastName, age: person.age });
          })
        );
      }
    }]);

    return AppComponent;
  }(React.Component);

  ReactDOM.render(React.createElement(AppComponent, null), mountNode);
})();
//# sourceMappingURL=script.js.map
