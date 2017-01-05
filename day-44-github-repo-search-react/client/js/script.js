var mountNode = document.querySelector('#react-root');

class GithubRepos extends React.Component {

  render(){
    return <div className="repos-list hidden"> Results </div>
  }
}

class AppComponent extends React.Component {
  render() {
    return <div>React works!</div>;
  }
}

ReactDOM.render(<AppComponent />, mountNode);
