(function() {

  var mountNode = document.querySelector('#react-root');
  var auth = btoa("4d892accbfd6b61cb0118fe2a5ce0baeebe5dad7");

  //placeholder
  var pageNum=1;
  var query="blue boomerang";

  class InterfaceComponent extends React.Component {

    constructor(){
      super();
    }

    keyUpHappened(evt){
      console.log(evt.keyCode);
      if (evt.keyCode === 13){
        console.log(evt.target.value);
        // GithubRepos.searchRepos(evt.target.value);
        this.setState({
          request:evt.target.value
        })
      }
    }

    render(){
      var doSearch;

      if (this.state !== null){
        doSearch = <GithubRepos query={this.state.request}/>;
      }

      return (<div className="search-box">
        <input className = "repo-input"
        placeholder="Type a repo name and hit Enter"
        onKeyUp={(evt) => {this.keyUpHappened(evt)}}/>
        {doSearch}
      </div>);
    }

  }

  class GithubRepos extends React.Component {

    constructor(){
      super();

    }

    componentDidMount(){
      console.log('component mounted');
      this.searchRepos(this.props.query);
    }

    searchRepos(query){
      $.ajax({
        type: 'GET',
        url: "https://api.github.com/search/repositories",
        data:{q:query, page:pageNum},
        dataType: 'JSON',
        async:true,
        headers:{
          "Authorization": "Basic " + auth
        },
      })
      .done((repoData) => {
        //test
        console.log("recieved data ==>", repoData);
        //
        this.setState({
          apiResult:repoData
        })
      })
      .fail(() => {
        console.log("API Call Failure");
        window.alert('API FAILURE');
      });

    }

    render(){
      var searchResults;

      if (this.state != null){
        searchResults =
         <ul>
          {this.state.apiResult.items.map((repo) => {return (
            <li key={repo.id}>
              <div>{repo.name}</div>
              <div>{repo.owner.login}</div>
            </li>
          )})}
        </ul>;
      }

      return <div className="repos-list"> {searchResults} </div>
    }
  }

  class AppComponent extends React.Component {
    render() {
      return (<div>React works!
        <InterfaceComponent />
      </div>);
    }
  }

  ReactDOM.render(<AppComponent />, mountNode);


}());
