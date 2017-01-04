var mountNode = document.querySelector('#react-root');

class AppComponent extends React.Component {


  render() {
    return (<div className='react-content'>React works!
      <ul>
        
      </ul>
    </div>);
  }
}

ReactDOM.render(<AppComponent />, mountNode);
