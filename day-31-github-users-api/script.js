(function() {

  var theList = document.querySelector('.user-list');

  var promise = $.ajax({
    url: 'https://api.github.com/search/users?q=poptart'
  });

  promise.done(function(data){
    console.log('data back!', data);

    for (var i = 0; i < data.items.length; i++){
      var user = data.items[i];
      console.log('the user',user);

      var li = document.createElement('li');
      var aTag = document.createElement('a');
      var liImage = document.createElement('img');
      // aTag.setAttribute('href',"html_url.htm");
      aTag.textContent = user.login;
      aTag.href = user.html_url;
      //li.textContent = user.login;
      li.appendChild(aTag);

      liImage.src = user.avatar_url;
      li.appendChild(liImage);

      theList.appendChild(li);
    }
  });


})();
