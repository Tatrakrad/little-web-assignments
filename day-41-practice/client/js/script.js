(function() {
  var mountNode = document.querySelector('#react-root');

  class PersonComponent extends React.Component {

    constructor() {
      super();
      console.log("firing PersonComponent constructor...");
      // should fire thrice
      var active = false;
      this.state = {
        currentClass: ''
      };
    }

    toggle() {

      if (this.state.currentClass !== 'on'){
        this.setState({
          currentClass: 'on'
        });
      } else{
        this.setState({
          currentClass: ''
        });
      }
    }

    render(){
      return (<li className={this.state.currentClass} onClick={() => { this.toggle();}}>
        <div>First Name: {this.props.firstName} </div>
        <div>Last Name: {this.props.lastName} </div>
        <div>Age: {this.props.age}</div>
      </li>)
    }
  }

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
        {dataExample.map((person) => {return <PersonComponent key={person.id} firstName={person.firstName} lastName={person.lastName} age={person.age}/>;})}
      </div>)
    }
  }

  ReactDOM.render(<AppComponent />, mountNode);


}());
