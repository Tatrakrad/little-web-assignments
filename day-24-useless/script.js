(function(){
  //gamestate vars
  var cash = 0;
  var spins = 0;
  var plays = 0;
  //no spins until ready;
  var ready = false;

  // var reels = [document.querySelector('.reel-one'),document.querySelector('.reel-two'),document.querySelector('reel-three')];


  var reelOne = document.querySelector('.reel-one');
  var reelTwo = document.querySelector('.reel-two');
  var reelThree = document.querySelector('.reel-three');

  //slot machine object
  var slotMachineReels = {
    spinning:false,
    reels:[reelOne,reelTwo,reelThree],
    reelPositions:[0,0,0,0]
  };

  var potentialPositions = {

  };
  //spritesheet @600% splits 64x64
  //svg-sprite-social has 5 rows 6 columns



}());
