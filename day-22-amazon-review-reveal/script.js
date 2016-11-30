(function(){

var reviewText = document.querySelector('.review');
var readMore = document.getElementById('readmore');
var readLess = false;
console.log(readMore);

readMore.addEventListener('click',function(){
  reviewText.classList.toggle('reveal');
  if (readLess){
    readmore.innerHTML="<a>Read More<a>";
  }else{
    readmore.innerHTML="<a>Read Less</a>";
    readLess = true;
  }
});


})();
