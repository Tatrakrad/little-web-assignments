"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

window.SW = window.SW || {};

(function () {
  var PlanetDetail = function (_React$Component) {
    _inherits(PlanetDetail, _React$Component);

    function PlanetDetail(props) {
      _classCallCheck(this, PlanetDetail);

      props.value = props.value || "";

      var _this = _possibleConstructorReturn(this, (PlanetDetail.__proto__ || Object.getPrototypeOf(PlanetDetail)).call(this, props));

      _this.state = {
        isSelected: false
      };
      return _this;
    }

    _createClass(PlanetDetail, [{
      key: "toggle",
      value: function toggle() {
        this.setState({
          isSelected: !this.state.isSelected
        });
      }
    }, {
      key: "render",
      value: function render() {
        var selectedClass;

        if (this.state.isSelected) {
          selectedClass += "on";

          planetInfo = React.createElement(
            "div",
            { className: "planet-info" },
            React.createElement(
              "ul",
              null,
              React.createElement(
                "li",
                null,
                "Orbital Period ",
                this.planetDetail.orbital_period
              ),
              React.createElement(
                "li",
                null,
                "Rotation Period ",
                this.planetDetail.rotation_period
              ),
              React.createElement(
                "li",
                null,
                "Diameter ",
                this.planetDetail.diameter
              ),
              React.createElement(
                "li",
                null,
                "Climate ",
                this.planetDetail.climate
              ),
              React.createElement(
                "li",
                null,
                "Gravity ",
                this.planetDetail.gravity
              )
            )
          );
        }

        return planetInfo;
      }
    }]);

    return PlanetDetail;
  }(React.Component);

  var PlanetListComponent = function (_React$Component2) {
    _inherits(PlanetListComponent, _React$Component2);

    function PlanetListComponent() {
      _classCallCheck(this, PlanetListComponent);

      var _this2 = _possibleConstructorReturn(this, (PlanetListComponent.__proto__ || Object.getPrototypeOf(PlanetListComponent)).call(this));

      _this2.state = {
        apiResult: {}
      };

      return _this2;
    }

    _createClass(PlanetListComponent, [{
      key: "loadPlanets",
      value: function loadPlanets() {
        var _this3 = this;

        console.log('load the planets');

        $.ajax({
          url: 'http://swapi.co/api/planets',
          data: { page: 1 }
        }).done(function (data) {
          console.log('Now, I have Data Now.', data);
          _this3.setState({
            apiResult: data
          });
        }).fail(function () {
          console.log('ajax failed');
          window.alert('trouble!');
        });
      } //end of loadPlanets function

    }, {
      key: "componentDidMount",
      value: function componentDidMount() {

        console.log('PlanetListComponent.componentDidMount');

        this.loadPlanets();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        console.log('PlanetListComponent.componentWillUnmount');
      }
    }, {
      key: "render",
      value: function render() {
        console.log('render', this.state);
        var planetList;

        if (this.state.apiResult.results != null) {
          planetList = React.createElement(
            "ul",
            null,
            this.state.apiResult.results.map(function (planet) {
              return React.createElement(
                "li",
                { key: planet.url },
                "It's ",
                planet.name
              );
            })
          );
        }

        return React.createElement(
          "div",
          { className: "planet-list" },
          React.createElement(
            "h1",
            null,
            "Planet List"
          ),
          planetList
        );
      }
    }]);

    return PlanetListComponent;
  }(React.Component);

  SW.PlanetListComponent = PlanetListComponent;
})();
//# sourceMappingURL=planet-list-component.js.map
