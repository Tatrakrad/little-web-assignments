

var theList = document.querySelector('#the-list');

var groceryList = [
  'sausage',
  'shrimp',
  'Texjoy',
  'Dr Pepper',
  'steak',
  'Tostitos',
  'cheese',
  'gum'
];

//Add code here!
function appendList(){

  for(var i = 0; i<groceryList.length; i++){
    var newLi = document.createElement('LI');
    newLi.textContent = groceryList[i];
    theList.appendChild(newLi);

  }
}

appendList();
