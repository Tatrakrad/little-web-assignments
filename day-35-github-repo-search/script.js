(function() {


    //select inputs
    var searchForm = $( '.name-input' );
    var searchUser = $( '.name-input' ).val();
    var searchButton = $('.search-button');

    //select outputs
    var resultsDiv = $( '.results' );
    var usersList = $( ".users-list" );
    var githubUsersTemplate = $( ".github-users-template" );

    //input events
    searchButton.click(function(evt){

      searchUser = $( '.name-input' ).val();
      console.log(evt,evt.target);
      evt.preventDefault();
      console.log(searchUser);
      if(searchUser.length > 0){
        searchGithubUsers(searchUser);
      }

    });

    searchForm.keyup(function(evt){
      searchUser = $( '.name-input' ).val();
      if (evt.which === 13 && searchUser.length > 0){
        searchGithubUsers(searchUser);
      }
    });



    //api Call
    //api.github.com/users/
    //api.github.com/search/users

    function searchGithubUsers(username){

      console.log(username);
      console.log("clearing output");
      usersList.html("");

      var promise = $.ajax({
        type: 'GET',
        url: "https://api.github.com/search/users",
        data:{q:username},
        dataType: 'JSON',
        async:true,
      });

      promise.done(function(data){
        console.log("recieved data, =||= ::",data);
        //test
        // resultsDiv.append(JSON.stringify(data));


        for (var i=0; i<data.items.length;i++){
          var user = data.items[i];
          var repos = getUserRepos(user.login);
          console.log(repos);

          renderPage(user);
        }


      });

      function getUserRepos(username){
        var output;
        $.ajax({
          type: 'GET',
          url:"https://api.github.com/users/"+username+"/repos",
          dataType:'JSON',
          async:true,
        })
        .done(function(data){
          console.log("recieved",data);
          output = data;
          return output;
        })
        .fail(function(data){
          console.log("REPO COLLECTION FAILURE");
          return;
        });


      }

    }

    function renderPage(user,repos){
      //select template and add data
      var templateContent = githubUsersTemplate.html();

      var outputUser = Mustache.render(templateContent, user);
      usersList.append(outputUser);
    }

}());
