"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
  var Related = function (_React$Component) {
    _inherits(Related, _React$Component);

    function Related() {
      _classCallCheck(this, Related);

      return _possibleConstructorReturn(this, (Related.__proto__ || Object.getPrototypeOf(Related)).apply(this, arguments));
    }

    _createClass(Related, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          { className: "related" },
          React.createElement(
            "h3",
            null,
            "RELATED"
          ),
          React.createElement(
            "ul",
            null,
            React.createElement(
              "li",
              null,
              React.createElement(
                "h4",
                null,
                "Curse of the Zelman Curse"
              ),
              React.createElement(
                "div",
                { className: "date" },
                "2 March 2013"
              ),
              React.createElement(
                "div",
                { className: "category" },
                "In \"Apple\""
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "h4",
                null,
                "Val Head: Web Animation in the Design Process"
              ),
              React.createElement(
                "div",
                { className: "date" },
                "8 November 2016"
              ),
              React.createElement(
                "div",
                { className: "category" },
                "In \"An Event Apart\""
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "h4",
                null,
                "Like and Friend are broken in Facebook."
              ),
              React.createElement(
                "div",
                { className: "date" },
                "3 March 2011"
              ),
              React.createElement(
                "div",
                { className: "category" },
                "In \"Design\""
              )
            )
          )
        );
      }
    }]);

    return Related;
  }(React.Component);

  window.Blog.Related = Related;
})();
//# sourceMappingURL=related.js.map