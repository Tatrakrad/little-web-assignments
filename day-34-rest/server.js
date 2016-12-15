var express = require('express');
var app = express();

//body parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:false }));

app.use(express.static('public'));

var data = [];

app.get('/api/data', function(req, res){
  console.log('get happened');
  res.send(data);
});

app.post('/api/data',function(req, res){
  console.log('post happened', req.body);
  data.push(req.body.word);
  res.send("Good Job. You made a Post!\nThe world stands in awe.");
});


app.listen(5020,function(){
  console.log("listening on port 5020");
});
