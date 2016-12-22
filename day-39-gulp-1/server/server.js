var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(7654, function(){
  console.log("listening on port 7654... ");
});
