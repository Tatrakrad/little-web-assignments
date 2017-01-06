"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {

  var mountNode = document.querySelector('#react-root');
  var auth = btoa("4d892accbfd6b61cb0118fe2a5ce0baeebe5dad7");

  //placeholder
  var pageNum = 1;
  var query = "blue boomerang";

  var InterfaceComponent = function (_React$Component) {
    _inherits(InterfaceComponent, _React$Component);

    function InterfaceComponent() {
      _classCallCheck(this, InterfaceComponent);

      return _possibleConstructorReturn(this, (InterfaceComponent.__proto__ || Object.getPrototypeOf(InterfaceComponent)).call(this));
    }

    _createClass(InterfaceComponent, [{
      key: "keyUpHappened",
      value: function keyUpHappened(evt) {
        console.log(evt.keyCode);
        if (evt.keyCode === 13) {
          console.log(evt.target.value);
          // GithubRepos.searchRepos(evt.target.value);
          this.setState({
            request: evt.target.value
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var doSearch;

        if (this.state !== null) {
          doSearch = React.createElement(GithubRepos, { query: this.state.request });
        }

        return React.createElement(
          "div",
          { className: "search-box" },
          React.createElement("input", { className: "repo-input",
            placeholder: "Type a repo name and hit Enter",
            onKeyUp: function onKeyUp(evt) {
              _this2.keyUpHappened(evt);
            } }),
          doSearch
        );
      }
    }]);

    return InterfaceComponent;
  }(React.Component);

  var GithubRepos = function (_React$Component2) {
    _inherits(GithubRepos, _React$Component2);

    function GithubRepos() {
      _classCallCheck(this, GithubRepos);

      return _possibleConstructorReturn(this, (GithubRepos.__proto__ || Object.getPrototypeOf(GithubRepos)).call(this));
    }

    _createClass(GithubRepos, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        console.log('component mounted');
        this.searchRepos(this.props.query);
      }
    }, {
      key: "searchRepos",
      value: function searchRepos(query) {
        var _this4 = this;

        $.ajax({
          type: 'GET',
          url: "https://api.github.com/search/repositories",
          data: { q: query, page: pageNum },
          dataType: 'JSON',
          async: true,
          headers: {
            "Authorization": "Basic " + auth
          }
        }).done(function (repoData) {
          //test
          console.log("recieved data ==>", repoData);
          //
          _this4.setState({
            apiResult: repoData
          });
        }).fail(function () {
          console.log("API Call Failure");
          window.alert('API FAILURE');
        });
      }
    }, {
      key: "render",
      value: function render() {
        var searchResults;

        if (this.state != null) {
          searchResults = React.createElement(
            "ul",
            null,
            this.state.apiResult.items.map(function (repo) {
              return React.createElement(
                "li",
                { key: repo.id },
                React.createElement(
                  "div",
                  null,
                  repo.name
                ),
                React.createElement(
                  "div",
                  null,
                  repo.owner.login
                )
              );
            })
          );
        }

        return React.createElement(
          "div",
          { className: "repos-list" },
          " ",
          searchResults,
          " "
        );
      }
    }]);

    return GithubRepos;
  }(React.Component);

  var AppComponent = function (_React$Component3) {
    _inherits(AppComponent, _React$Component3);

    function AppComponent() {
      _classCallCheck(this, AppComponent);

      return _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).apply(this, arguments));
    }

    _createClass(AppComponent, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          null,
          "React works!",
          React.createElement(InterfaceComponent, null)
        );
      }
    }]);

    return AppComponent;
  }(React.Component);

  ReactDOM.render(React.createElement(AppComponent, null), mountNode);
})();
//# sourceMappingURL=script.js.map
