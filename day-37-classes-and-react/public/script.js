'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var Person = function () {
    function Person() {
      _classCallCheck(this, Person);
    }

    _createClass(Person, [{
      key: 'sayName',
      value: function sayName() {
        console.log('what is this?', this.firstName);
      }
    }]);

    return Person;
  }();

  var bob = new Person();
  bob.firstName = 'Bob';
  bob.lastName = 'Smith';
  console.log(bob);

  var bob2 = new Person();
  bob2.firstName = 'Rob';
  bob2.lastName = 'Smolensk';
  console.log(bob2);

  var bob3 = new Person();
  bob3 = {
    firstName: 'Bob',
    lastName: 'Smythe'
  };
  console.log(bob3);

  var mary = new Person();
  mary.firstName = 'Mary';
  mary.lastName = 'Poppins';

  bob.sayName();
  bob2.sayName();
  mary.sayName();
})();
//# sourceMappingURL=script.js.map