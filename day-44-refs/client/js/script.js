var mountNode = document.querySelector('#react-root');

class AppComponent extends React.Component {


  componentDidMount(){
    this.theInput.focus();
  }

  getData(query){
    $.ajax({
      url: 'https://api.github.com/search/users',
      data:{q:this.theInput.value}
    })
    .done((data)=> {
      console.log('got data!',data);
    });
  }

  click(evt){
    console.log('the input', this.theInput, this.theInput.value);
    this.getData(this.theInput.value);
  }

  //exectue when key up happens, so you can use regular argument variables instead of state
  keyUpHappened(evt){
    console.log(evt.keyCode);
    if (evt.keyCode === 13){
      this.getData(evt.target.value);
    }
  }


  render() {
    return (<div>React works!
      <input placeholder="input goes here" ref={(theDomElement) => {this.theInput = theDomElement; }}/>
      <button onClick={() => {this.click(); }}> focus,bro </button>

      <input
      placeholder="put something in and hit enter"
      onKeyUp={(evt) => {this.keyUpHappened(evt);}}
      />
    </div>);
  }
}

ReactDOM.render(<AppComponent />, mountNode);
