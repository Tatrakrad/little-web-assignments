//Use Node to read the file and log the "User Name" and "Display Name" fields.
var fs = require('fs');

var fileContents = fs.readFile('./Import_User_Sample_en.csv','utf-8',function(err,officeData){
  console.log('Gutting some CSV');
  console.log('err', err);
  console.log('data', officeData);

  var rows = officeData.split('\n');
  var userName = rows[0].indexOf('User Name');
  var displayName = rows[0].indexOf('Display Name');

  for (var i = 1;i<rows.length;i++){
    var officeColumn = rows[i];
    officeColumn = officeColumn.split(",");
    console.log(officeColumn[userName],officeColumn[displayName]);

  }


});

console.log('Doing Things');
