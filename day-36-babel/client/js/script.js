(function() {
  'use strict';

  var peopleListUL = document.querySelector('.people-list');
  console.log("Script here", peopleListUL);

  var people = ['Bob','Sue','Jack','Jill','Frank'];

  people.forEach(function(name){
    var li = document.createElement('li');
    li.textContent = name;

    peopleListUL.appendChild(li);
  });

  peopleListUL.addEventListener('click',(evt) =>{
    console.log("you hit that",evt.target);
  });

}());
