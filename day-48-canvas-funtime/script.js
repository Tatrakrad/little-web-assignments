// alert('Here I am, a JS Script!')

canvas1("#canvas-1");
canvas2("#canvas-2");
canvas3("#canvas-3");
canvas4("#canvas-4");
canvasAnimate("#canvas-5");

console.log("Script Loaded; And we call upon the author to explain, yes we do",window.document);

//example 1
function canvas1(selectCanvas) {
  var canvas = document.querySelector(selectCanvas);
  var context = canvas.getContext('2d');

  context.strokeStyle = '#FF0';
  context.fillStyle ='#00F';

  context.fillRect(20,20,100,100);
  context.strokeRect(20,20,100,100);
  context.strokeRect(60,60,100,100)

}

//example 2

function canvas2(selectCanvas){
  var canvas = document.querySelector(selectCanvas);
  var context = canvas.getContext('2d');

  context.fillStyle = '#F00';

  context.strokeRect(0,0,200,200);
  context.fillRect(20,100,50,100);

  context.fillStyle = '#0F0';
  context.fillRect(120,50,50,150);

}


//example 3

function canvas3(selectCanvas) {
  var canvas = document.querySelector(selectCanvas);
  var context = canvas.getContext('2d');

  context.lineWidth = 4;

  context.beginPath();
  context.moveTo(210,210);
  context.lineTo(280,260);
  context.lineTo(80,400);
  context.closePath();

  context.fill();
  context.stroke();

  context.beginPath();
  context.arc(50, 300, 30, 0, 2 * Math.PI);
  context.arc(50, 100, 30, 0.5*Math.PI, 1 * Math.PI,true);
  context.stroke();

  context.beginPath();
  context.arc(250,50,30,0,2*Math.PI);
  context.stroke();

  context.beginPath();
  context.arc(350,50,30,0,2*Math.PI);
  context.fill();
  context.stroke();


}

//example 4 pie chart

function canvas4(selectCanvas) {

  var canvas = document.querySelector(selectCanvas);
  var context = canvas.getContext('2d');

  context.fillStyle='#00f';
  context.beginPath();
  context.arc(50,300,30,0.5*Math.PI,1*Math.PI,true);
  context.lineTo(50,300);
  context.fill();

  context.fillStyle='#0f0';
  context.beginPath();
  context.arc(50,300,30,0.5*Math.PI,1*Math.PI,false);
  context.lineTo(50,300);
  context.fill();

}

function canvasAnimate(selectCanvas) {

  var canvas = document.querySelector(selectCanvas);
  var context = canvas.getContext('2d');

  var x = 0;
  var direction = 'right';

  console.log("context",context);

  var anim = setInterval(function(){

    if (direction === 'right'){
      x += 1;
    }
    else{
      x -= 1;
    }
    if (x >= 400){
      direction = 'left';
    }
    else if(x === 0) {
      direction = 'right';
    }

    context.clearRect(0,0,400,400);

    context.beginPath();
    context.arc(x,100,25,0.25*Math.PI,1.75*Math.PI, false);
    context.lineTo(x,100);
    context.fill();
  }, 15)

  var quit = window.setTimeout(function(){
    window.clearInterval(anim);
  },30000);

}
