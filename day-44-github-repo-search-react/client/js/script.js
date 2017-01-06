(function() {

  var mountNode = document.querySelector('#react-root');

  class InterfaceComponent extends React.Component {

    constructor(){
      super();
    }


    render(){
      return (<div>    </div>);
    }

  }

  class GithubRepos extends React.Component {

    constructor(){
      super();


    }

    searchGithubRepos(){


    }

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


}());
