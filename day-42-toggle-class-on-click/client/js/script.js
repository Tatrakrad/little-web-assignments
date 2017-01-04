(function() {


  var mountNode = document.querySelector('#react-root');

  class ClickToggleComponent extends React.Component{
    constructor(){
      super();
      this.state = {
        currentClass: ''
      }
    }

    toggle(){
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
      return(<div className={this.state.currentClass} onClick={() => { this.toggle();}}>
      Click Me
      </div>
      )
    }

  }

  class AppComponent extends React.Component {


    render() {
      return (<div className='react-content'>
        <ClickToggleComponent />
        <ClickToggleComponent />
        <ClickToggleComponent />
        <ClickToggleComponent />
      </div>);
    }
  }

  ReactDOM.render(<AppComponent />, mountNode);


}());
