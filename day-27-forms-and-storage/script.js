(function(){

  var button = document.querySelector('.add-person-button');

  var firstNameInput = document.querySelector('.first-name-input');
  var lastNameInput = document.querySelector('.last-name-input');

  var peopleList = document.querySelector('.people-list');

  button.addEventListener('click',addPerson);

  lastNameInput.addEventListener('keydown',function(evt){
    //console.log evt reads keystrokes down on this element
    // console.log(evt);
    // console.log('keydown',lastNameInput.value);
  });

  lastNameInput.addEventListener('keyup',function(evt){
    console.log('keyup',lastNameInput.value,evt);
    if (evt.keyCode === 13){
      addPerson();
    }
  });

  function addPerson(){
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;

    var li = document.createElement('li');
    li.textContent = firstName + ' ' + lastName;
    peopleList.appendChild(li);

    //clear value of inputs;
    firstNameInput.value = '';
    lastNameInput.value = '';
  }

})();
