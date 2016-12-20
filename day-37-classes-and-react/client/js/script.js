(function() {

  class Person {

    sayName(){
      console.log('what is this?', this.firstName);
    }

  }

  var bob = new Person();
  bob.firstName = 'Bob';
  bob.lastName = 'Smith';
  console.log(bob);

  var bob2 = new Person();
  bob2.firstName = 'Rob';
  bob2.lastName = 'Smolensk';
  console.log(bob2);

  var bob3 = new Person();
  bob3 =  {
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


}());
