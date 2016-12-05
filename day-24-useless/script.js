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


  var reelOne = document.querySelector('.reel-one');
  var reelTwo = document.querySelector('.reel-two');
  var reelThree = document.querySelector('.reel-three');
  var reelFour = document.querySelector('.reel-four');

  console.log(reelOne);

  //slot machine object
  var slotMachineReels = {
    spinning:false,
    reels:[reelOne,reelTwo,reelThree,reelFour],
    reelPositions:[18,18,18,18]
  };

  console.log(slotMachineReels);
  
  var potentialPositions = ["blanktwin","cake","skyline","bell","person","smile","twoperson","addpeople","nobell","happy","addperson","dead","sad","darkbell","ringbell","sleepbell","emptyperson","laugh","selection-box","camera","doubleperson","buildings","plusone","crank","bars","earth","mortarboard","frown","neutral","fire"];

  console.dir(potentialPositions);

  var spin = function(){
    var spinTime = setInterval(function(){
      for(var i=0; i<slotMachineReels.reelPositions.length;i++){
        var random = Math.ceil(Math.random()*slotMachineReels.reelPositions.length);
        slotMachineReels.reelPositions[i]=random;
      }
      setReelPos(slotMachineReels.reelPositions[0],slotMachineReels.reelPositions[1],slotMachineReels.reelPositions[2],slotMachineReels.reelPositions[3]);
      setTimeout(function(){clearInterval(spin);},5000);
    },500);
  };

  var setReelPos = function(pos1,pos2,pos3,pos4){
    slotMachineReels.reels[1].classlist.toggle(potentialPositions[pos1]);
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

  playButton.addEventListener('click',play());

}());
