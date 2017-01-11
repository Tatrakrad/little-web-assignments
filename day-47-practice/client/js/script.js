var mountNode = document.querySelector('#react-root');


class AComponentWithValidationAndOtherStuff extends React.Component {

  constructor() {
    super();
    this.state = {
      number: 0
    }
  }

  increment() {
    var newNumber = this.state.number + 1;
    this.setState({
      number: newNumber
    });
  }

  attemptSubmit(evt) {
    evt.preventDefault();

    console.log(this.firstNameInput);

    var makeAjaxCall = true;
    if (this.firstNameInput.value === '') {
      makeAjaxCall = false;
      //mark that one wrong
      this.setState({
        firstNameInvalid: true
      });
    }
    else {
      this.setState({
        firstNameInvalid: false
      })
    }

    if (this.lastNameInput.value === '') {
      makeAjaxCall = false;
      this.setState({
        lastNameInvalid: true
      });
    }
    else {
      this.setState({
        lastNameInvalid: false
      });
    }

    //ajax if all is good
    if (makeAjaxCall) {
      console.log('ajax!');
    }
  }

  render() {

    console.log('render', 'what is in state?', this.state);

    var firstNameInputClass = '';
    if (this.state.firstNameInvalid) {
      firstNameInputClass = 'invalid';
    }

    var lastNameInputClass = '';
    if (this.state.lastNameInvalid) {
      lastNameInputClass = 'invalid';
    }

    return <div>
      <div>{this.state.number}</div>
      <button onClick={() => { this.increment(); }}>increment</button>

      <hr />

      <form onSubmit={(evt) => { this.attemptSubmit(evt); }}>
        <input className={firstNameInputClass} placeholder="first name" ref={(input) => { this.firstNameInput = input; }} />
        <input className={lastNameInputClass} placeholder="last name" ref={(input) => { this.lastNameInput = input; }} />
        <button>Save</button>
      </form>
    </div>
  }
}






class AppComponent extends React.Component {
  render() {
    return <div className="container">
      <AComponentWithValidationAndOtherStuff />
    </div>;
  }
}

ReactDOM.render(<AppComponent />, mountNode);
