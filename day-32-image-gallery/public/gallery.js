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

    console.log(evt.target);
    var attr;
    if (evt.target.tagName === 'LI'){
      attr = evt.target.getAttribute('pic-index');
    }else if(evt.target.tagName === 'IMG'){
      attr = evt.target.parentNode.getAttribute('pic-index');
    }else{

    }

    console.log(attr);

    //dont display the image of an attributeless non listitem!
    if(attr !== undefined){

      var currentlySelected = document.querySelector('.selected');
      if (currentlySelected !== null){
        currentlySelected.classList.remove('selected');
      }
      evt.target.classList.add('selected');

      var showPic = apiData.pictures[attr];
      console.log("show this picture", showPic);
      //picture object to display fullSize with description

      var picDisplay = document.querySelector('.display');
      picDisplay.innerHTML = " ";

      var img = document.createElement('img');
      img.src = showPic.fullSize;

      var caption = document.createElement('h3');
      caption.textContent = showPic.description;

      //append image to display
      picDisplay.appendChild(img);
      picDisplay.appendChild(caption);


    }


  });



}());
