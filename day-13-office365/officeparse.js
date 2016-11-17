//Use Node to read the file and log the "User Name" and "Display Name" fields.
var fs = require('fs');

var fileContents = fs.readFile('./Import_User_Sample_en.csv','utf-8',function(err,officeData){
  //console.log('cutting up some CSV');
  console.log('err', err);
  console.log('data', officeData);

  var rows = officeData.split('\n');
  console.log(rows[0]);
  // var userName = rows[0].split(',').indexOf('User Name');
  var userName = 0;
  console.log("User name is column..." + userName);
  var displayName = rows[0].split(',').indexOf('Display Name');
  console.log("displayName is column..." + displayName);

  for (var i = 0;i<rows.length;i++){
    var rowArray = rows[i].split(",");
    console.log(rowArray[userName],rowArray[displayName]);

  }

  console.log("i'm done");
});

console.log('Doing Things');
