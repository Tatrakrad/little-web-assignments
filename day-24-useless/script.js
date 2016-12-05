(function(){
  //gamestate vars
  var cash = 0;
  var spins = 0;
  var plays = 0;
  //no spins until ready;
  var ready = true;

  var playButton = document.getElementById("play");
  //spritesheet @600% splits 64x64
  //svg-sprite-social has 5 rows 6 columns, 30 potential outcomes per reel


  //slot machine object
  var slotMachine = {
    spinning:false,
    reels:[document.getElementById('reel-one'),document.getElementById('reel-two'),document.getElementById('reel-three'),document.getElementById('reel-four')],
    reelPositions:[30,30,30,30],
    setReelPos: function(pos1,pos2,pos3,pos4){
      var newPos1 = potentialPositions[pos1];
      var newPos2 = potentialPositions[pos2];
      var newPos3 = potentialPositions[pos3];
      var newPos4 = potentialPositions[pos4];
      console.log(slotMachine.reels[0]);
      this.reels[0].classList.toggle(newPos1);
      this.reels[1].classList.toggle(newPos2);
      this.reels[2].classList.toggle(newPos3);
      this.reels[3].classList.toggle(newPos4);
    },
    spin: function(){
      var newPos = [0,0,0,0];
      var spinTime = setInterval(function(){
        spinning=true;
        for(var i=0; i<=4;i++){
          var random = Math.ceil(Math.random()*potentialPositions.length);
          newPos[i]=random;
          // console.log(newPos);
        }
        slotMachine.setReelPos(newPos[0],newPos[1],newPos[2],newPos[3]);
      },100);
      setTimeout(function(){clearInterval(spinTime);
        spinning = false;
        ready = true;
        console.log(spinning);
        console.log(ready);
        slotMachine.resetReels(spinning);
        },6000);


    },
    resetReels: function(cantReset){
      if(!cantReset){
        for(var i=0;i<slotMachine.reels.length;i++){
          slotMachine.reels[i].classname = "reel selection-box";
        }
      }else{
        console.log('problems');
      }
    }
  };



  var potentialPositions = ["blanktwin","cake","skyline","bell","person","smile","twoperson","addpeople","nobell","happy","addperson","dead","sad","darkbell","ringbell","sleepbell","emptyperson","laugh","selection-box","camera","doubleperson","buildings","plusone","crank","bars","earth","mortarboard","frown","neutral","fire"];


  var play = function(){
    if (ready){
      ready = !ready;
      slotMachine.spin();

    }else{
      console.log('not ready');
      return;
    }
  };
  console.log(slotMachine.reelPositions);
  playButton.addEventListener('click',play);

}());
