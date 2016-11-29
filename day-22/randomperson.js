// group people at random in this class
console.log("=========================================================");

var people = ['Miguel','Chelsey','David','Chad','Taylor','Kyle','Kianna'];

//
// for(var i=0; i < people.length + randomPeople.length; i++){
//   var randomPersonIndex = Math.random();
//   randomPersonIndex = randomPersonIndex * people.length;
//   randomPersonIndex = Math.floor(randomPersonIndex);
//   var personInAnArray = people.splice(randomPersonIndex,1);
//   randomPeople.push(personInAnArray[0]);
// }

function shuffleGroup(peopleArr,num){
  console.log("Our people are ",peopleArr);
  var tempPeople = [];
  var groups = {};
  var randomPeople = [];

  for(var i=0; i<num; i++){

   tempPeople = peopleArr;

    while(tempPeople.length > 0){

      var randomPersonIndex = Math.random();
      randomPersonIndex = randomPersonIndex * tempPeople.length;
      randomPersonIndex = Math.floor(randomPersonIndex);
      var personInAnArray = tempPeople.splice(randomPersonIndex,1);
      randomPeople.push(personInAnArray[0]);

    }
    groups[i] = randomPeople;
    Math.random();
  }

  return groups;

}

console.log(shuffleGroup(people,44));
