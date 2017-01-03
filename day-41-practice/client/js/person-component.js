window.MyPersonApp = window.MyPersonApp || {};

(function() {
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

  MyPersonApp.PersonComponent = PersonComponent;

}());
