var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/api/pics', function(req, res) {
  res.send({
    pictures: [
      {
        thumbnail: 'george-lucas-library-thumbnail.jpg',
        fullSize: 'george-lucas-library.jpg',
        description: 'This is the library of George Lucas. Sure, he ruined my childhood with episodes I-III but at least he has a cool place to read.'
      },
      {
        thumbnail: 'library-1-thumbnail.jpg',
        fullSize: 'library-1.jpg',
        description: 'Library #1'
      },
      {
        thumbnail: 'library-2-thumbnail.jpg',
        fullSize: 'library-2.jpg',
        description: 'Library #2'
      },
      {
        thumbnail: 'library-3-thumbnail.png',
        fullSize: 'library-3.jpg',
        description: 'Library #3'
      },
      {
        thumbnail: 'library-4-thumbnail.jpg',
        fullSize: 'library-4.jpg',
        description: 'Library #4'
      }
    ]
  });
});

app.listen(5005, function() {
  console.log('listening on port 5005');
});
