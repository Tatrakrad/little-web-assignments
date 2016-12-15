var fs = require('fs');
  var babeRuth = '';


var output = fs.readFile('players_r_ruthba01_batting_standard.csv', 'utf-8',function(err,data){
  var lines = data.split('\n');
  var year = lines[1].split(',').indexOf('Year');
  var rbi = lines[1].split(',').indexOf('RBI');
  var isYear = /\d\d\d\d/g;

  for (var i=1;i<lines.length;i++){
    var rowArr = lines[i].split(',');
    //console.log(rowArr[year].match(isYear), rowArr[year]);
    if(rowArr[year].match(isYear)){
      babeRuth = rowArr[year] + " " + rowArr[rbi] + "\n";
      console.log(babeRuth);
    }else{
      continue;
    }

  }
});

//read and log csv
// var fs = require('fs');
//   var babeRuth = '';
//
//
// var output = fs.readFile('players_r_ruthba01_batting_standard.csv', 'utf-8',function(err,data){
//   var lines = data.split('\n');
//   var year = lines[1].split(',').indexOf('Year');
//   var rbi = lines[1].split(',').indexOf('RBI');
//
//   for (var i=0;i<lines.length;i++){
//     var rowArr = lines[i].split(',');
//     babeRuth = rowArr[year] + " " + rowArr[rbi] + "\n";
//     console.log(babeRuth);
//
//   }
// });
// read and log csv
