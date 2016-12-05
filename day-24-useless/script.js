(function(){
  //gamestate vars
  var cash = 10;
  var spins = 0;
  var plays = 0;
  //no spins until ready;
  var ready = true;

  var playButton = document.getElementById("play");
  //spritesheet @600% splits 64x64
  //svg-sprite-social has 5 rows 6 columns, 30 potential outcomes per reel

  //TOP display
  var facerow = document.querySelectorAll('.button.neutral');
  var moneybox = document.querySelector('.cash');
  moneybox.innerHTML = "$ " + cash;
  console.log(facerow);

  //slot machine object
  var slotMachine = {
    spinning:false,
    reels:[document.getElementById('reel-one'),document.getElementById('reel-two'),document.getElementById('reel-three'),document.getElementById('reel-four')],
    reelPositions:[],
    setReelPos: function(setPos){
      // for(var i = 0; i<this.reels.length;i++){
      //   this.reels[i] = potentialPositions[setPos[i]];
      // } cant loop
      this.reels[0].className = potentialPositions[setPos[0]];
      this.reels[1].className = potentialPositions[setPos[1]];
      this.reels[2].className = potentialPositions[setPos[2]];
      this.reels[3].className = potentialPositions[setPos[3]];

    },
    spin: function(){
      //if newPos has initial value of 0,0,0,0, triggers automatic win?
      var newPos = [];
      var spinTime = setInterval(function(){
        spinning=true;
        for(var i=0; i<4;i++){
          var random = Math.floor(Math.random()*potentialPositions.length);
          newPos[i]=random;
          // console.log(newPos);
        }
        slotMachine.setReelPos(newPos);
      },200);
      setTimeout(function(){
        clearInterval(spinTime);
        slotMachine.reelPositions=newPos;
        console.log(slotMachine.reelPositions);
        bet(slotMachine.reelPositions);
        spinning = false;
        },6000);

    },
    resetReels: function(cantReset){
      console.log('should reset now');
      if(!cantReset){
        for(var i=0;i<slotMachine.reels.length;i++){
          slotMachine.reels[i].className = "reel selection-box";
        }
        //now that we've reset, can spin again
       ready = true;
      }else{
        console.log('problems');
      }
    }
  };



 // ["blanktwin","cake","skyline","bell","person","smile","twoperson","addpeople","nobell","happy","addperson","dead","sad","darkbell","ringbell","sleepbell","emptyperson","laugh","selection-box","camera","doubleperson","buildings","plusone","crank","bars","earth","mortarboard","frown","neutral","fire"];

  var potentialPositions = ["neutral","frown","dead","sad","happy","laugh"];

  var bet = function(results){
    var win = false;
    for(var i =0; i<results.length; i++){
      if (results[i] !== results[0]){
        win = false;
        break;
      }else{
        win = true;
      }
    }

    if(win){
      console.log('big winner');
      cash += 2;
      for (var j=0; j<facerow.length; i++){
        facerow[j].classList.add('happy');
      }
    }else{
      console.log('big loser');
      cash --;
    }

  };

  var play = function(){
    //will only be ready on first play, after a reset (2nd push), AND not currently in play (spinning)

    if (ready && cash>0){
      ready = !ready;
      slotMachine.spin();
      plays ++;
      console.log("plays",plays);
      console.log("cash",cash);
      moneybox.innerHTML = "$ " + cash;
    }else if(!ready && cash>0){
      slotMachine.resetReels(slotMachine.spinning);
    }else{
      //game over!
      console.log('ESCORT THIS DEADBEAT OFF THE PREMISES');
      for (var i=0; i<facerow.length; i++){
        facerow[i].classList.toggle('neutral');
        facerow[i].classList.toggle('dead');
      }
      moneybox.innerHTML = "NOPE";
    }
  };
  console.log(slotMachine.reelPositions);
  playButton.addEventListener('click',play);

}());
