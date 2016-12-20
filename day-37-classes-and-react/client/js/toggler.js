(function() {

    // $('.toggle-me').click(function(evt) {
    //   $('.toggle-me').toggleClass('invert');
    // });

    class CustomView{

      constructor(selector) {
        console.log('custom view constructor. Selector:',selector);
        this.selector = selector;
        this.element = document.querySelector(selector);
      }

      setupToggling(className){
        this.element.addEventListener('click',function(evt){
          evt.target.classList.toggle(className);
        });
      }

      txt(str){
        this.element.textContent = str;
      }
    }

    var firstToggler = new CustomView('.toggle-me');
    console.log('first toggler', firstToggler);
    firstToggler.setupToggling('invert');

    var secondToggler = new CustomView('.toggle-junior');
    secondToggler.setupToggling('invert');

}());
