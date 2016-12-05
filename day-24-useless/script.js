(function(){
  //gamestate vars
  var cash = 0;
  var spins = 0;
  var plays = 0;
  //no spins until ready;
  var ready = false;

  //spritesheet @600% splits 64x64
  //svg-sprite-social has 5 rows 6 columns, 30 potential outcomes per reel


  var reelOne = document.querySelector('.reel-one');
  var reelTwo = document.querySelector('.reel-two');
  var reelThree = document.querySelector('.reel-three');
  var reelFour = document.querySelector('.reel-four');

  //slot machine object
  var slotMachineReels = {
    spinning:false,
    reels:[reelOne,reelTwo,reelThree,reelFour],
    reelPositions:[18,18,18,18]
  };

  var potentialPositions = ["blanktwin","cake","skyline","bell","person","smile","twoperson","addpeople","nobell","happy","addperson","dead","sad","darkbell","ringbell","sleepbell","emptyperson","laugh","selection-box","camera","doubleperson","buildings","plusone","crank","bars","earth","mortarboard","frown","neutral","fire"];

  console.dir(potentialPositions);

}());
