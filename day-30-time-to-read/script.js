(function() {
  console.log('script file hooked up!');

  var timeToReadDisplay = document.querySelector('.time-to-read');

  var paraWordsArr = document.querySelectorAll('p');
  var totalWordCount = 0;

  function countParagraphWords(paras){
    var wordCount = 0;
    for(var i = 0; i<paras.length; i++){
      wordCount += paras[i].innerHTML.split(' ').length;
      console.log("words",wordCount);
    }
    return wordCount;
  }
  console.log(paraWordsArr);

  function timeToRead(wordCount){

    return Math.ceil(totalWordCount/200);
  }

  totalWordCount = countParagraphWords(paraWordsArr);
  timeToReadDisplay.innerHTML = timeToRead(totalWordCount);

}());
