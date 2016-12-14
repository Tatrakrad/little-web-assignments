(function() {

  var steakList = $( ".steak-list" );
  // var steakList = document.querySelector(".steak-list");
  console.log(steakList,"steakList");

  var promise = $.ajax({
    url:'http://localhost:5008/api/steak'
  });

  promise.done(function(data){
    console.log("got data! ==> ",data);
    var html = '';

    for (var i=0; i<data.levels.length;i++){

      var steak = data.levels[i];
      console.log("some steak", steak);

      var output = Mustache.render("<li><h2>{{name}}</h2><p>{{description}}</p><img src={{imageUrl}}></img></li>", steak);

      html+= output;


      // var steakLi = document.createElement('li');
      // var steakName = document.createElement('h2');
      // var steakDescription = document.createElement('p');
      // var steakPic = document.createElement('img');
      //
      // steakName.textContent = steak.name;
      // steakDescription.textContent = steak.description;
      // steakPic.src = steak.imageUrl;
      //
      // steakLi.appendChild(steakName);
      // steakLi.appendChild(steakPic);
      // steakLi.appendChild(steakDescription);
      //
      // steakList.appendChild(steakLi);

      steakList.html(html);

    }



  });

}());
