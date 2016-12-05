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
  var slotMachineReels = {
    spinning:false,
    reels:[document.getElementById('reel-one'),document.querySelector('.reel-two'),document.querySelector('.reel-three'),document.querySelector('.reel-four')],
    reelPositions:[18,18,18,18],
    setReelPos: function(pos1,pos2,pos3,pos4){
      var newPos1 = potentialPositions[pos1];
      console.log(this.reels[0].classlist);
      this.reels[0].classlist.toggle(newpos1);
    }
  };

  console.log(slotMachineReels);
  console.log(slotMachineReels.reels[0]);

  var potentialPositions = ["blanktwin","cake","skyline","bell","person","smile","twoperson","addpeople","nobell","happy","addperson","dead","sad","darkbell","ringbell","sleepbell","emptyperson","laugh","selection-box","camera","doubleperson","buildings","plusone","crank","bars","earth","mortarboard","frown","neutral","fire"];


  var spin = function(){
    var newPos = [0,0,0,0];
    var spinTime = setInterval(function(){
      for(var i=0; i<slotMachineReels.reelPositions.length;i++){
        var random = Math.ceil(Math.random()*potentialPositions.length);
        newPos[i]=random;
        console.log(newPos);
      }
      slotMachineReels.setReelPos(newPos[0],newPos[1],newpos[2],newPos[3]);
    },500);
    setTimeout(function(){clearInterval(spinTime);},5000);

  };


  var play = function(){
    if (ready){
      ready = !ready;
      spin();

    }else{
      console.log('not ready');
      return;
    }
  };

  playButton.addEventListener('click',play);

}());
