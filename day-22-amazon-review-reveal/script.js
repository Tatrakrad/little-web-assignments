// find height of first child of article, set height of article to that
//find height of last child, set post transition height there?
(function(){

var reviewText = document.querySelector('.review');
var readMore = document.getElementById('readmore');
var readLess = false;
console.log(readMore);

readMore.addEventListener('click',function(){
  reviewText.classList.toggle('reveal');
  if (readLess){
    readmore.innerHTML="<a>Read More<a>";
    readLess = false;
  }else{
    readmore.innerHTML="<a>Read Less</a>";
    readLess = true;
  }
});


})();
