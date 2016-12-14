var express =  require('express');
var app = express();

app.use(express.static('public'));



var get = function(req, res) {

  res.send({
    levels: [
      {
        name: 'blue',
        description: 'seared outside, 1 minute each side, ensure all edges are sealed.',
        imageUrl: 'http://i1095.photobucket.com/albums/i462/kieranbilginer/P1010048-1.jpg'
      },
      {
        name: 'rare',
        description: 'seared outside, 2 1/2 minutes each side.',
        imageUrl: 'http://reluctanthousedad.com/wp-content/uploads/2013/02/IMG_2036-1024x768.jpg'
      },
      {
        name: 'medium-rare',
        description: 'seared outside, 3-4 minutes each side.',
        imageUrl: 'http://images.huffingtonpost.com/2011-05-26-stripsteak_medium_rare_sm.jpg'
      },
      {
        name: 'medium',
        description: 'seared outside, 4 minutes each side.',
        imageUrl: 'http://f.tqn.com/y/bbq/1/S/a/K/steak_medium.jpg'
      },
      {
        name: 'medium-well',
        description: '5 minutes each side, and a waste of good steak.',
        imageUrl: 'http://www.chefkevinblakeman.com/uploads/images/a%20perfect%20steak/steak%20medium%20well.JPG'
      },
      {
        name: 'well done',
        description: '6 minutes each side, cooked enough to make you wonder if you have taste buds.',
        imageUrl: 'https://thecraftofcooking.files.wordpress.com/2010/09/img_2286.jpg'
      }
    ]
  })
}

app.get('/api/steak', get);

app.listen(5008, function() {
  console.log('Listening on port 5008');
});
