console.log("hello from ur script");


var promise = $.ajax({
  url:'/api/class'
});

promise.done(function(data){
  console.log("Done!", data);

  var classNameH1 = document.querySelector('.class-name');
  var cohortNameH2 = document.querySelector('.cohort-name');

  classNameH1.textContent = data.name;
  cohortNameH2.textContent = data.cohort;

  var studentList = document.querySelector('.student-list');
  for (var i=0; i < data.students.length; i++){
    var student = data.students[i];
    var li = document.createElement('li');
    li.textContent = student;
    studentList.appendChild(li);
  }
});

console.log('sent AJAX call!');
//above line fires after 'hello', promises are sent to stack and then run after other code
