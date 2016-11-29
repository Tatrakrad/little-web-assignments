// this is what Math.random(); does

// var count = 255;
//
// for (var i=0; i<count; i++){
//   var rand = Math.random();
//   console.log(rand);
//}
//all between 0 and 0.99999999999

// this is how we get a random number that we might want
// by multiplying our Math.random by a range of indexes and rounding with Math.ceil or Math.floor

var messages = [
  "HELLO",
  "NOPE",
  "GOODBYE",
  "YES",
  "Parpo",
  "Down in Memphis, Tennessee",
  "There lives a girl named Cindy",
  "Uptown Jug Champions",
  "I present to you this Iron Cross",
  "She grows unimaginable plant life in there",
  "We showed up and nothing happened",
  "Columbo is a fictional detective"
];
//
// var countMessages = 64;
//
// for (var i = 0; i < countMessages; i++) {
//   var rand = Math.random();
//   rand = rand * messages.length;
//   rand = Math.floor(rand);
//   //rounds down to an integer. if we used *.ceil instead we would sometimes get one over the highest index
//   console.log(i,rand,messages[rand]);
// }

console.log('---------------------------------------\n');
console.log('------------20 sided dice--------------\n');

var dieSides = 20;

var roll = function(d,rolls){
  result = [];
  for (var i = 0; i<= rolls; i++){
    result.push( Math.ceil(Math.random() * dieSides));

  }
  return result;
};

console.log(roll(dieSides,32));
console.log('---------------------------------------\n');
