'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {

  //select inputs
  var searchForm = (0, _jquery2.default)('.repo-input');
  var searchRepos = (0, _jquery2.default)('.repo-input').val();
  var searchButton = (0, _jquery2.default)('.search-button');

  console.log(searchForm);
  console.log(searchRepos);
  console.log(searchButton);

  //paginate
  var backButton = (0, _jquery2.default)('.back');
  var nextButton = (0, _jquery2.default)('.next');
  var pageDisplay = (0, _jquery2.default)('.page-num');
  var pageNum = 1;
  var maxPage;

  //select outputs
  var resultsDiv = (0, _jquery2.default)('.results');
  var reposList = (0, _jquery2.default)(".repos-list");
  var githubReposTemplate = (0, _jquery2.default)(".github-repos-template");

  //the cure for a rate limit 403 error?
  var auth = btoa("4d892accbfd6b61cb0118fe2a5ce0baeebe5dad7");

  searchButton.on('click', function (evt) {
    console.log('u clicked');
    searchRepos = (0, _jquery2.default)('.repo-input').val();
    // console.log(evt,evt.target);
    evt.preventDefault();
    // console.log(searchRepos);
    pageNum = 1;
    if (searchRepos.length > 0) {
      searchGithubRepos(searchRepos, pageNum);
    }
  });

  searchForm.keyup = function (evt) {
    console.log('u hit enter?');
    searchRepos = (0, _jquery2.default)('.repo-input').val();
    pageNum = 1;
    if (evt.which === 13 && searchRepos.length > 0) {
      searchGithubRepos(searchRepos, pageNum);
    }
  };

  nextButton.click = function () {
    // searchRepos = $( '.repo-input' ).val();
    if (pageNum < maxPage) {
      pageNum++;
      searchGithubRepos(searchRepos, pageNum);
    } else {
      return;
    }
  };

  backButton.click = function () {
    // searchRepos = $( '.repo-input' ).val();
    if (pageNum > 1) {
      pageNum--;
      searchGithubRepos(searchRepos, pageNum);
    } else {
      return;
    }
  };

  //api Call
  //api.github.com/users/
  //api.github.com/search/users
  //api.github.com/search/repos

  function searchGithubRepos(reponame, pageNum) {

    console.log(reponame);
    console.log("clearing output");
    reposList.html("");

    var promise = _jquery2.default.ajax({
      type: 'GET',
      url: "https://api.github.com/search/repositories",
      data: { q: reponame, page: pageNum },
      dataType: 'JSON',
      async: true,
      headers: {
        "Authorization": "Basic " + auth
      }
    });

    promise.done = function (data) {
      maxPage = Math.ceil(data.total_count / 30);
      (0, _jquery2.default)('.pages').removeClass("hidden");
      //test
      console.log("recieved data, =||= ::", data);
      console.log("maxpage ", maxPage);
      // resultsDiv.append(JSON.stringify(data));
      //button check used to be here
      if (maxPage > 0) {
        pageDisplay.html(pageNum + " / " + maxPage);
        renderPage(data);
      } else {
        reposList.addClass('hidden');
        pageDisplay.html("No Results");
      }
    };

    promise.fail = function () {
      console.log("Nothing on GITHUB today");
      alert("GITHUB NOT DOING IT FOR YOU");
    };
  }

  function renderPage(content) {
    console.log(content);

    //adjust button render states
    if (pageNum > 1 && backButton.hasClass('inactive')) {
      backButton.removeClass('inactive');
    } else if (!backButton.hasClass('inactive') && pageNum < 2) {
      backButton.addClass('inactive');
    }
    if (pageNum < maxPage && maxPage > 1) {
      nextButton.removeClass('inactive');
    } else if (!nextButton.hasClass('inactive')) {
      nextButton.addClass('inactive');
    }

    //select template and add data
    var templateContent = githubReposTemplate.html();
    var outputRepos = Mustache.render(templateContent, content);
    reposList.append(outputRepos);

    //unhide output and navigator
    reposList.removeClass("hidden");
  }
})();
//# sourceMappingURL=script.js.map