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

      for(var i = 0; i < data.characters.length; i++){

       var character = data.characters[i];

       var newLi = $('<li/>');
       var addName = $('<h2/>').text(character.name);
       var addRace = $('<h3/>').text(character.race);
       var addDesc = $('<p/>').text(character.description);

       newLi.append(addName);
       newLi.append(addRace);
       newLi.append(addDesc);

       charactersList.append(newLi);

      }

    });

  });

}());
