'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {

  //data should flow ONE WAY
  //or seperate function to object outside components and use as argument

  var mountNode = document.querySelector('#react-root');
  var auth = btoa("4d892accbfd6b61cb0118fe2a5ce0baeebe5dad7");

  var GithubRepos = function (_React$Component) {
    _inherits(GithubRepos, _React$Component);

    function GithubRepos() {
      _classCallCheck(this, GithubRepos);

      return _possibleConstructorReturn(this, (GithubRepos.__proto__ || Object.getPrototypeOf(GithubRepos)).call(this));
    }

    _createClass(GithubRepos, [{
      key: 'componentWillMount',
      value: function componentWillMount() {}
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {}
    }, {
      key: 'keyUpHappened',
      value: function keyUpHappened(evt) {
        console.log(evt.keyCode);
        if (evt.keyCode === 13) {
          // console.log(evt.target.value);
          // GithubRepos.searchRepos(evt.target.value);
          this.setState({
            query: evt.target.value,
            page: 1
          });
          this.searchRepos(evt.target.value, 1);
        }
      }
    }, {
      key: 'nextButton',
      value: function nextButton() {
        var newPage = this.state.page;

        if (newPage < this.state.maxPage) {
          newPage++;

          this.setState({
            page: newPage
          });

          this.searchRepos(this.state.query, this.state.page);
        }
      }
    }, {
      key: 'backButton',
      value: function backButton() {
        var newPage = this.state.page;

        if (newPage > 1) {

          newPage--;

          this.setState({
            page: newPage
          });

          this.searchRepos(this.state.query, this.state.page);
        }
      }
    }, {
      key: 'searchRepos',
      value: function searchRepos(query, page) {
        var _this2 = this;

        $.ajax({
          type: 'GET',
          url: "https://api.github.com/search/repositories",
          data: { q: query, page: page },
          dataType: 'JSON',
          async: true,
          headers: {
            "Authorization": "Basic " + auth
          }
        }).done(function (repoData) {
          //test
          console.log("recieved data ==>", repoData);

          _this2.setState({
            apiResult: repoData,
            maxPage: Math.ceil(repoData.total_count / 30)
          });
        }).fail(function () {
          console.log("API Call Failure");
          window.alert('API FAILURE');
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        // console.log("render sees page as",this.state.pageNum);
        // console.log("render bar sees max-page as",this.state.maxPage);
        var searchBox;
        var pageButtons;
        var showResults;

        searchBox = React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            { className: 'search-box' },
            React.createElement('input', { className: 'repo-input',
              placeholder: 'Type a repo name and hit Enter',
              onKeyUp: function onKeyUp(evt) {
                _this3.keyUpHappened(evt);
              } })
          )
        );

        if (this.state !== null && this.state.apiResult !== undefined && this.state.page !== undefined) {

          showResults = React.createElement(
            'div',
            { className: 'repos-list' },
            ' ',
            React.createElement(Results, { returned: this.state.apiResult })
          );

          if (this.state.maxPage > 1) {
            console.log("button bar sees page as", this.state.page);
            console.log("button bar sees max-page as", this.state.maxPage);
            pageButtons = React.createElement(
              'div',
              { className: 'pages' },
              React.createElement(
                'span',
                { className: 'back',
                  onClick: function onClick() {
                    _this3.backButton();
                  } },
                'Back'
              ),
              React.createElement(
                'span',
                { className: 'page-num' },
                this.state.page,
                '/',
                this.state.maxPage
              ),
              React.createElement(
                'span',
                { className: 'next',
                  onClick: function onClick() {
                    _this3.nextButton();
                  } },
                'Next'
              )
            );
          }
        }

        return React.createElement(
          'div',
          null,
          searchBox,
          pageButtons,
          showResults
        );
      }
    }]);

    return GithubRepos;
  }(React.Component);

  var Results = function (_React$Component2) {
    _inherits(Results, _React$Component2);

    function Results() {
      _classCallCheck(this, Results);

      return _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).call(this));
    }

    _createClass(Results, [{
      key: 'render',
      value: function render() {
        var results = React.createElement(
          'ul',
          { className: 'results' },
          this.props.returned.items.map(function (repo) {
            return React.createElement(
              'li',
              { key: repo.id },
              React.createElement(
                'div',
                { className: 'repo-listing' },
                React.createElement(
                  'a',
                  { href: repo.html_url },
                  repo.name
                ),
                React.createElement(
                  'div',
                  { className: 'repo-owner' },
                  React.createElement(
                    'a',
                    { href: repo.owner.html_url },
                    repo.owner.login
                  )
                )
              )
            );
          })
        );

        return React.createElement(
          'div',
          null,
          results
        );
      }
    }]);

    return Results;
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
        return React.createElement(
          'div',
          null,
          'React works!',
          React.createElement(GithubRepos, null)
        );
      }
    }]);

    return AppComponent;
  }(React.Component);

  ReactDOM.render(React.createElement(AppComponent, null), mountNode);
})();
//# sourceMappingURL=script.js.map
