(function() {
  var mountNode = document.querySelector('#react-root');



  class AppComponent extends React.Component {

    divClick() {
      console.log('you clicked on that div!')
    }

    render() {

      var dataExample = [
        {
          firstName:'Jane',
          lastName:'Doe',
          age: 35,
          id:0
        },
        {
          firstName:'Bob',
          lastName:'Dole',
          age: 86,
          id:1
        },
        {
          firstName:'Stephen',
          lastName:'Spielberg',
          age: 68,
          id:2
        }

      ];

      var listItems = dataExample.map((person)=>
        <ul key={person.id}>
          <li>First Name: {person.firstName}</li>
          <li>Last Name: {person.lastName}</li>
          <li>Age: {person.age}</li>
        </ul>);

      var myGreeting = "Hello There";

      console.log('what is in that variable?', listItems);

      return (<div className='app-component'>
        <p onClick={() => {console.log("hello")}}>{myGreeting}</p><br/>
        <div onClick={()=> { this.divClick(); }}>Click me as well bro &hearts;</div>
        <ul>
          {listItems}
        </ul>
        <p>&uarr; The above renders a list from a variable that is mapped &uarr;</p>
        <p>&darr; The below maps the array of objects in the JSX &darr;</p>
        {dataExample.map((person) => {return <MyPersonApp.PersonComponent key={person.id} firstName={person.firstName} lastName={person.lastName} age={person.age}/>;})}
      </div>)
    }
  }

  ReactDOM.render(<AppComponent />, mountNode);


}());
