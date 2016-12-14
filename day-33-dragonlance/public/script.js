(function() {
  console.log('write code here!');

  jQuery(function(){
    console.log('JQueezy ready to go!');

    var charactersList = $( ".characters-list" );

    var promise = $.ajax({
      url:'http://localhost:5003/api/dragonlance'
    });

    promise.done(function(data){
      console.log("Got some stuff ==> ",data);

      var html = '';

      for(var i = 0; i < data.characters.length; i++){

       var character = data.characters[i];

       var output = Mustache.render("<li><h2>{{name}}</h2><h3 class='race'>{{race}}</h3><p class='description'>{{description}}</li>", character);
       html += output;

      }

      // console.log(html);
      charactersList.html(html);

    });

  });

}());
