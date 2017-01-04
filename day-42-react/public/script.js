'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mountNode = document.querySelector('#react-root');

var StarwarsApiSampleComponent = function (_React$Component) {
  _inherits(StarwarsApiSampleComponent, _React$Component);

  function StarwarsApiSampleComponent() {
    _classCallCheck(this, StarwarsApiSampleComponent);

    var _this = _possibleConstructorReturn(this, (StarwarsApiSampleComponent.__proto__ || Object.getPrototypeOf(StarwarsApiSampleComponent)).call(this));

    _this.state = {
      apiResult: {
        results: []
      }
    };
    //above mimics format of our api call
    return _this;
  }

  _createClass(StarwarsApiSampleComponent, [{
    key: 'clicky',
    value: function clicky() {
      var _this2 = this;

      $.ajax({
        url: 'http://swapi.co/api/starships',
        data: { page: 1 }
      }).done(function (data) {
        console.log('Now, I have Data Now.', data);
        _this2.setState({
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
      var _this3 = this;

      return React.createElement(
        'div',
        { className: 'starwars-api-sample-content' },
        React.createElement(
          'h2',
          null,
          'Star Wars!'
        ),
        React.createElement(
          'button',
          { onClick: function onClick() {
              _this3.clicky();
            } },
          'load data'
        ),
        React.createElement(
          'ul',
          null,
          this.state.apiResult.results.map(function (ship) {
            return React.createElement(
              'li',
              { key: ship.url },
              'It\'s a/an/the ',
              ship.name,
              ' '
            );
          })
        )
      );
    }
  }]);

  return StarwarsApiSampleComponent;
}(React.Component);

var LunchPlace = function (_React$Component2) {
  _inherits(LunchPlace, _React$Component2);

  function LunchPlace() {
    _classCallCheck(this, LunchPlace);

    return _possibleConstructorReturn(this, (LunchPlace.__proto__ || Object.getPrototypeOf(LunchPlace)).apply(this, arguments));
  }

  _createClass(LunchPlace, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'li',
        { className: 'lunch-component' },
        this.props.place.name,
        ' - ',
        this.props.place.location,
        React.createElement(
          'ol',
          null,
          'Favorite Foods:',
          this.props.place.favoriteFoods.map(function (food, index) {
            return React.createElement(
              'li',
              { key: index },
              food
            );
          })
        )
      );
    }
  }]);

  return LunchPlace;
}(React.Component);

var AppComponent = function (_React$Component3) {
  _inherits(AppComponent, _React$Component3);

  function AppComponent() {
    _classCallCheck(this, AppComponent);

    return _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).apply(this, arguments));
  }

  _createClass(AppComponent, [{
    key: 'render',
    value: function render() {

      var dataDallasLunch = [{
        name: 'Metropolitan Cafe',
        location: '2030 Main St.',
        favoriteFoods: ['diablo panini', 'reuben'],
        id: 0
      }, {
        name: 'Mudhen',
        location: 'Farmers Market',
        favoriteFoods: ['steak and rice bowl', 'parpos unlimited', 'duck nips'],
        id: 2
      }, {
        name: 'Moe\'s',
        location: '2121 Main St.',
        favoriteFoods: ['gastric rage chola', 'cardiac arrabiata'],
        id: 1
      }, {
        name: 'Jimmy John\'s',
        location: '1414 Elm St.',
        favoriteFoods: ['BLT', '2 blts', 'salt and vinegar chipes'],
        id: 3
      }];

      return React.createElement(
        'div',
        { className: 'app-component' },
        React.createElement(
          'ul',
          null,
          dataDallasLunch.map(function (place) {
            return React.createElement(LunchPlace, { key: place.id, place: place });
          })
        ),
        React.createElement(StarwarsApiSampleComponent, null)
      );
    }
  }]);

  return AppComponent;
}(React.Component);

ReactDOM.render(React.createElement(AppComponent, null), mountNode);
//# sourceMappingURL=script.js.map
