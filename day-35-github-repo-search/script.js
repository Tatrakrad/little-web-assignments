(function() {


    //select inputs
    var searchForm = $( '.repo-input' );
    var searchRepos = $( '.repo-input' ).val();
    var searchButton = $('.search-button');

    //select outputs
    var resultsDiv = $( '.results' );
    var reposList = $( ".repos-list" );
    var githubReposTemplate = $( ".github-repos-template" );

    //input events
    searchButton.click(function(evt){

      searchRepos = $( '.repo-input' ).val();
      console.log(evt,evt.target);
      evt.preventDefault();
      console.log(searchRepos);
      if(searchRepos.length > 0){
        searchGithubRepos(searchRepos);
      }

    });

    searchForm.keyup(function(evt){
      searchRepos = $( '.repo-input' ).val();
      if (evt.which === 13 && searchRepos.length > 0){
        searchGithubRepos(searchRepos);
      }
    });



    //api Call
    //api.github.com/users/
    //api.github.com/search/users
    //api.github.com/search/repos

    function searchGithubRepos(reponame){

      console.log(reponame);
      console.log("clearing output");
      reposList.html("");

      var promise = $.ajax({
        type: 'GET',
        url: "https://api.github.com/search/repositories",
        data:{q:reponame},
        dataType: 'JSON',
        async:true,
      });

      promise.done(function(data){
        console.log("recieved data, =||= ::",data);
        //test
        // resultsDiv.append(JSON.stringify(data));

        renderPage(data);

      });

      promise.fail(function(){
        console.log("Nothing on GITHUB today");
      });

    }


    function renderPage(content){
      console.log(content);

      //select template and add data
      var templateContent = githubReposTemplate.html();
      var outputRepos = Mustache.render(templateContent,content);
      reposList.append(outputRepos);
    }

}());
