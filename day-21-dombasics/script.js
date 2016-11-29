//

console.log("testing testing");

console.log('document is here', window.document);

console.log('count of body children', document.body.children.length);

console.log('second child', document.body.children[2]);

var strangeList = document.getElementById('strange-list');
console.log('that list', strangeList);

var myHeader = document.getElementById('header');
myHeader.textContent = "Welcome to the World of Benedict Cumberbatch";

var showUl = document.querySelector('ul');
console.log("The ul i found is: ", showUl);

var allParagraphs = document.querySelectorAll('p');
console.log("Here are all my p tagged texts ", allParagraphs);

//use querySelectorAll to grab all the items in list
//change the text of every item to something

var allListItems = document.querySelectorAll('li');
console.log("all list items ",allListItems);

for(var i=0; i<allListItems.length; i++){
  allListItems[i].textContent = "Benedict Cumberbatch";
}

//grab the list
//change the text of just the children
var secondList = document.querySelector('#second-list');
console.log('second list', secondList.children);
for(var i=0; i<secondList.children.length; i++){
  secondList.children[i].textContent = "Buckminster Fuller Built a Spaceship";
}

var newSection = document.querySelector('#add-stuff-here');
newSection.innerHTML = '<p>New paragraph!</p><h2>New Header!</h2>';
var str = '<h3>Some Cities</h3>';

var cities = ['Yonkers','Lancaster','Philadelphia','Chicago','Peoria'];

str += '<ul style=background:black;color:white;padding:1em;>';
for (var i=0; i < cities.length; i++){
  str += '<li>' + cities[i] + '</li>';
}
str += '</ul>';

newSection.innerHTML = str;

console.log(newSection);

var testButton = document.querySelector('button');
testButton.addEventListener('click', function(){
  console.log("egads ive been clicked");
  testButton.textContent = "o no u broke everything";
  document.querySelector("#add-event").innerHTML += "<H2><br>NOW LOOK WHAT YOU'VE GONE AND DONE</H2>";
});
