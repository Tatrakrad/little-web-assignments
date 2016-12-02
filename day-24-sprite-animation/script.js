var cat = document.querySelector(".sprite");

var position = 1;
var direction = 'right';

setInterval(function(){

  if(direction === 'left'){
    cat.classList.toggle('flipped');
  }

  switch (position) {
    case 1:
        cat.classList.remove("frame-2");
        cat.classList.remove("frame-3");
        cat.classList.remove("frame-4");
        cat.classList.add("frame-1");

      break;

    case 2:
        cat.classList.remove("frame-1");
        cat.classList.remove("frame-3");
        cat.classList.remove("frame-4");
        cat.classList.add("frame-2");
      break;

    case 3:
        cat.classList.remove("frame-2");
        cat.classList.remove("frame-1");
        cat.classList.remove("frame-4");
        cat.classList.add("frame-3");
      break;

    case 4:
      cat.classList.remove("frame-2");
      cat.classList.remove("frame-1");
      cat.classList.remove("frame-3");
      cat.classList.add("frame-4");


    break;

    default:

  }
    if (position == 4){
      position = 1;
    }else{
      position ++;
    }

    console.log('the position is ',position);
    if (position >= 4){
      direction = "left";
    }else if (position <= 1){
      direction = 'right';
    }


  },600);
