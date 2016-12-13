(function() {

  console.log("we're in the pipe, five by five >:I");

  var promise = $.ajax({
    url: '/api/pics'
  });

  var apiData;
  var picturesList = document.querySelector('.pictures-list');

  promise.done(function(data){

    apiData = data;
    console.log('data',data);

    for (var i=0; i<data.pictures.length; i++){
      var picture = data.pictures[i];

      var li = document.createElement('li');
      li.setAttribute('pic-index',i);
      var thumbnail = document.createElement('img');
      thumbnail.src = picture.thumbnail;
      li.appendChild(thumbnail);
      picturesList.appendChild(li);

    }

  });

  picturesList.addEventListener('click',function(evt){



  });



}());
