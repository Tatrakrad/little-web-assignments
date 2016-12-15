(function() {

  // $.ajaxSetup({
  //   headers: {
  //     'Authorization': "5d205e6e6d7944a89e11e7b87129911c"
  //   }
  // });

  //base 64 encoding/decoding for string function  (conversion for ASCII to binary for network friendly traffic);
  var auth = btoa("5d205e6e6d7944a89e11e7b87129911c");
  console.log(auth);

  var promise =$.ajax({
    type: 'GET',
    url: "https://punkapi.com/api/v1/beers",
    dataType: 'json',
     async: true,
     headers: {
      "Authorization": "Basic " + auth
    },
  });

  promise.done(function(data){
    console.log(data);
    // document.pre(JSON.stringify(data));

    var beerStuffList = document.querySelector('.beer-stuff');
    var templateScript = document.querySelector('.beer-template');
    var templateHtml = templateScript.innerHTML;

    var html = '';
    for (var i = 0; i < data.length; i++){
      var beer = data[i];

      var output = Mustache.render(templateHtml, beer);
      html += output;
    }
    beerStuffList.innerHTML = html;
  });

}());
