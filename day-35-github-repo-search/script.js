(function() {


    //select inputs
    var searchForm = $( '.name-input' );
    var searchUser = $( '.name-input' ).val();
    var searchButton = $('.search-button');

    //select outputs
    var resultsDiv = $( '.results' );

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

        //select template and add data
        var usersList = $( ".users-list" );
        var githubUsersTemplate = $( ".github-users-template" );
        usersList.html("");
        var templateContent = githubUsersTemplate.html();

        for (var i=0; i<data.items.length;i++){
          var user = data.items[i];
          var output = Mustache.render(templateContent, user);
          usersList.append(output);
        }


      });

    }

}());
