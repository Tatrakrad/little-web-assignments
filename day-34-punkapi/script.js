(function() {

  var nextButton = document.querySelector('.next-button');
  nextButton.addEventListener('click',function(){
    console.log('clicked ',nextButton);
    page ++;
    requestData();

    previousButton.classList.remove('hidden');
  });

  var previousButton = document.querySelector('.previous-button');
  previousButton.addEventListener('click',function(){
    console.log('clicked ',previousButton);

    page --;

    if (page === 1){
      //you could just return
      //or hide previous button
      previousButton.classList.add('hidden');
    }

    requestData();
  });

  //base 64 encoding/decoding for string function  (conversion for ASCII to binary for network friendly traffic);
  var auth = btoa("5d205e6e6d7944a89e11e7b87129911c");
  console.log(auth);

  var page = 1;

  function requestData(){

    var promise =$.ajax({
      type: 'GET',
      url: "https://punkapi.com/api/v1/beers?page=" + page,
      dataType: 'json',
       async: true,
       headers: {
        "Authorization": "Basic " + auth
      },
    });

    promise.done(function(data){
      // console.log(data);
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
  }
  requestData();

}());
