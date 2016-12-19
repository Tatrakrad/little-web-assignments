(function() {


    //select inputs
    var searchForm = $( '.repo-input' );
    var searchRepos = $( '.repo-input' ).val();
    var searchButton = $('.search-button');

    //paginate
    var backButton = $('.back');
    var nextButton = $('.next');
    var pageDisplay = $('.page-num');
    var pageNum = 1;
    var maxPage;

    //select outputs
    var resultsDiv = $( '.results' );
    var reposList = $( ".repos-list" );
    var githubReposTemplate = $( ".github-repos-template" );

    //input events
    searchButton.click(function(evt){

      searchRepos = $( '.repo-input' ).val();
      // console.log(evt,evt.target);
      evt.preventDefault();
      // console.log(searchRepos);
      pageNum = 1;
      if(searchRepos.length > 0){
        searchGithubRepos(searchRepos,pageNum);
      }

    });

    searchForm.keyup(function(evt){
      searchRepos = $( '.repo-input' ).val();
      pageNum = 1;
      if (evt.which === 13 && searchRepos.length > 0){
        searchGithubRepos(searchRepos,pageNum);
      }
    });

    nextButton.click(function(){
      // searchRepos = $( '.repo-input' ).val();
      if (pageNum < maxPage/30){
        pageNum++;
        searchGithubRepos(searchRepos,pageNum);
      }else{
        return;
      }

    });

    backButton.click(function(evt){
      // searchRepos = $( '.repo-input' ).val();
      if (pageNum > 1){
        pageNum--;
        searchGithubRepos(searchRepos,pageNum);
      }else{
        return;
      }

    });


    //api Call
    //api.github.com/users/
    //api.github.com/search/users
    //api.github.com/search/repos

    function searchGithubRepos(reponame,pageNum){

      console.log(reponame);
      console.log("clearing output");
      reposList.html("");

      var promise = $.ajax({
        type: 'GET',
        url: "https://api.github.com/search/repositories",
        data:{q:reponame, page:pageNum},
        dataType: 'JSON',
        async:true,
      });

      promise.done(function(data){
        maxPage = data.total_count;
        $('.pages').removeClass("hidden");
        //test
        console.log("recieved data, =||= ::",data);
        console.log("maxpage ",maxPage)
        // resultsDiv.append(JSON.stringify(data));
        //button check used to be here
        if(maxPage > 0){
          pageDisplay.html(pageNum + " / " + maxPage);
          renderPage(data);
        }else{
          reposList.addClass('hidden');
          pageDisplay.html("No Results");
        }

      });

      promise.fail(function(){
        console.log("Nothing on GITHUB today");
      });

    }


    function renderPage(content){
      console.log(content);

      //adjust button render states
      if (pageNum > 1 && backButton.hasClass('inactive')){
        backButton.removeClass('inactive');
      }else if (!backButton.hasClass('inactive') && pageNum < 2) {
        backButton.addClass('inactive');
      }
      if (pageNum < maxPage && maxPage > 1){
        nextButton.removeClass('inactive');
      }else if (!nextButton.hasClass('inactive')){
        nextButton.addClass('inactive')
      }

      //select template and add data
      var templateContent = githubReposTemplate.html();
      var outputRepos = Mustache.render(templateContent,content);
      reposList.append(outputRepos);

      //unhide output and navigator
      reposList.removeClass("hidden");

    }

}());
