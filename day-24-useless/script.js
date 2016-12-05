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
    setReelPos: function(setPos){
      // var newPos1 = potentialPositions[setPos[0]];
      // var newPos2 = potentialPositions[setPos[1]];
      // var newPos3 = potentialPositions[setPos[2]];
      // var newPos4 = potentialPositions[setPos[3]];
      // console.log(slotMachine.reels);
      this.reels[0].className = potentialPositions[setPos[0]];
      this.reels[1].className = potentialPositions[setPos[1]];
      this.reels[2].className = potentialPositions[setPos[2]];
      this.reels[3].className = potentialPositions[setPos[3]];

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
        slotMachine.setReelPos(newPos);
      },200);
      setTimeout(function(){clearInterval(spinTime);
        spinning = false;
        ready = true;
        console.log(spinning);
        console.log(ready);
        slotMachine.resetReels(spinning);
        },6000);


    },
    resetReels: function(cantReset){
      console.log('should reset now');
      if(!cantReset){
        for(var i=0;i<slotMachine.reels.length;i++){
          slotMachine.reels[i].className = "reel selection-box";
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
