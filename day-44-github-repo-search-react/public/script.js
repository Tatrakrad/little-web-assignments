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

  //placeholder

  var SearchBar = function (_React$Component) {
    _inherits(SearchBar, _React$Component);

    function SearchBar() {
      _classCallCheck(this, SearchBar);

      return _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this));
    }

    _createClass(SearchBar, [{
      key: 'keyUpHappened',
      value: function keyUpHappened(evt) {
        console.log(evt.keyCode);
        if (evt.keyCode === 13) {
          // console.log(evt.target.value);
          // GithubRepos.searchRepos(evt.target.value);
          this.setState({
            request: evt.target.value
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var doSearch;

        if (this.state !== null) {
          doSearch = React.createElement(GithubRepos, { query: this.state.request, page: 1 });
          console.log('maxPage');
        }

        return React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            { className: 'search-box' },
            React.createElement('input', { className: 'repo-input',
              placeholder: 'Type a repo name and hit Enter',
              onKeyUp: function onKeyUp(evt) {
                _this2.keyUpHappened(evt);
              } })
          ),
          doSearch
        );
      }
    }]);

    return SearchBar;
  }(React.Component);

  var GithubRepos = function (_React$Component2) {
    _inherits(GithubRepos, _React$Component2);

    function GithubRepos() {
      _classCallCheck(this, GithubRepos);

      return _possibleConstructorReturn(this, (GithubRepos.__proto__ || Object.getPrototypeOf(GithubRepos)).call(this));
    }

    _createClass(GithubRepos, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        console.log('component mounted', this.props);
        // this.searchRepos(this.state.query);
        // this.setState({
        //   query:this.props.query,
        //   pageNum:this.props.page
        // })
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {

        this.searchRepos(this.props.query, this.props.page);
        this.setState({
          query: this.props.query,
          pageNum: this.props.page
        });
      }
    }, {
      key: 'nextButton',
      value: function nextButton() {
        var page = this.state.pageNum;

        if (page <= this.state.maxPage) {
          page++;

          this.setState({
            pageNum: page
          });

          this.searchRepos(this.state.query, this.state.pageNum);
        }
      }
    }, {
      key: 'backButton',
      value: function backButton() {
        var page = this.state.pageNum;

        if (page > 0) {

          page--;

          this.setState({
            pageNum: page
          });

          this.searchRepos(this.state.query, this.state.pageNum);
        }
      }
    }, {
      key: 'searchRepos',
      value: function searchRepos(query, page) {
        var _this4 = this;

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

          _this4.setState({
            apiResult: repoData,
            maxPage: Math.ceil(repoData.total_count / 30) + 1
          });
        }).fail(function () {
          console.log("API Call Failure");
          window.alert('API FAILURE');
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this5 = this;

        // console.log("render sees page as",this.state.pageNum);
        // console.log("render bar sees max-page as",this.state.maxPage);
        var searchResults;
        var pageButtons;

        if (this.state !== null && this.state.apiResult !== undefined && this.state.pageNum !== undefined) {
          searchResults = React.createElement(
            'ul',
            { className: 'results' },
            this.state.apiResult.items.map(function (repo) {
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

          if (this.state.maxPage > 1) {
            console.log("button bar sees page as", this.state.pageNum);
            console.log("button bar sees max-page as", this.state.maxPage);
            pageButtons = React.createElement(
              'div',
              { className: 'pages' },
              React.createElement(
                'span',
                { className: 'back',
                  onClick: function onClick() {
                    _this5.backButton();
                  } },
                'Back'
              ),
              React.createElement(
                'span',
                { className: 'page-num' },
                this.state.pageNum,
                '/',
                this.state.maxPage
              ),
              React.createElement(
                'span',
                { className: 'next',
                  onClick: function onClick() {
                    _this5.nextButton();
                  } },
                'Next'
              )
            );
          }
        }

        return React.createElement(
          'div',
          null,
          pageButtons,
          React.createElement(
            'div',
            { className: 'repos-list' },
            ' ',
            searchResults,
            '  '
          )
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
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          'React works!',
          React.createElement(SearchBar, null)
        );
      }
    }]);

    return AppComponent;
  }(React.Component);

  ReactDOM.render(React.createElement(AppComponent, null), mountNode);
})();
//# sourceMappingURL=script.js.map
