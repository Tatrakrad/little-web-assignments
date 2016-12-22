(function() {

  var wat = () => {
    console.log('yo arrow function\n this means transpiling ES6 with Babel is Happening.');
  }
  wat();

  var mountNode = document.querySelector('#some-selector');

  class AnotherComponent extends React.Component {
    render (){

      return <div className = "another-component"><p>"I can't believe it, {this.props.newName}!"</p></div>
    }
  }

  class HelloMessage extends React.Component {
    render() {
      var name = 'Miriam';
      var passName = 'Bobby';
      return <div>Hello {name}!<AnotherComponent newName={passName}/></div>;
    }
  }

  ReactDOM.render(<HelloMessage />, mountNode);


}());
