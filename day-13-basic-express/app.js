var express = require('express');
var app = express();

app.use(express.static('public'))

//
// app.get('/', function(req, res) {
//   res.send(index.html);

// });

// app.get('/pageone', function(req, res){
//  res.send(pageone.html);
//
// });
//
// app.get('/pagetwo', function(req, res){
//  res.send(responsivedesign.png);
//
// });
//
app.get('/pagethree', function(req, res){
 res.sendFile('./public/pagethree.html');

});
//
// app.get('/pagefour', function(req, res){
//  res.render(index.html);
//
// });

app.listen(3000, function() {
  console.log('Listening on port 3000');

});
