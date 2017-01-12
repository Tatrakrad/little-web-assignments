(function() {

  //data should flow ONE WAY
  //or seperate function to object outside components and use as argument

  var mountNode = document.querySelector('#react-root');
  var auth = btoa("4d892accbfd6b61cb0118fe2a5ce0baeebe5dad7");

  //placeholder

  class SearchBar extends React.Component {

    constructor(){
      super();

    }

    keyUpHappened(evt){
      console.log(evt.keyCode);
      if (evt.keyCode === 13){
        // console.log(evt.target.value);
        // GithubRepos.searchRepos(evt.target.value);
        this.setState({
          request:evt.target.value
        })
      }
    }



    render(){
      var doSearch;

      if (this.state !== null){
        doSearch = <GithubRepos query={this.state.request} page={1}/>;
        console.log('maxPage')

      }

      return (<div>
        <div className="search-box">
          <input className = "repo-input"
          placeholder="Type a repo name and hit Enter"
          onKeyUp={(evt) => {this.keyUpHappened(evt)}}/>
        </div>
          {doSearch}
      </div>);
    }

  }


  class GithubRepos extends React.Component {

    constructor(){
      super();
    }

    componentWillMount(){
      console.log('component mounted',this.props);
      // this.searchRepos(this.state.query);
      // this.setState({
      //   query:this.props.query,
      //   pageNum:this.props.page
      // })

    }
    componentDidMount(){

      this.searchRepos(this.props.query,this.props.page);
      this.setState({
        query:this.props.query,
        pageNum:this.props.page
      })
    }

    nextButton(){
      var page = this.state.pageNum;


      if (page <= this.state.maxPage){
        page ++;

        this.setState({
          pageNum:page
        })

        this.searchRepos(this.state.query,this.state.pageNum);

      }

    }

    backButton(){
      var page = this.state.pageNum;

      if (page > 0) {

        page --;

        this.setState({
          pageNum:page
        })

        this.searchRepos(this.state.query,this.state.pageNum);

      }

    }

    searchRepos(query,page){

      $.ajax({
        type: 'GET',
        url: "https://api.github.com/search/repositories",
        data:{q:query, page:page},
        dataType: 'JSON',
        async:true,
        headers:{
          "Authorization": "Basic " + auth
        },
      })
      .done((repoData) => {
        //test
        console.log("recieved data ==>", repoData);

        this.setState({
          apiResult:repoData,
          maxPage:Math.ceil(repoData.total_count/30)+1
        })

      })
      .fail(() => {
        console.log("API Call Failure");
        window.alert('API FAILURE');
      });

    }

    render(){
      // console.log("render sees page as",this.state.pageNum);
      // console.log("render bar sees max-page as",this.state.maxPage);
      var searchResults;
      var pageButtons;

      if (this.state !== null && this.state.apiResult !== undefined && this.state.pageNum !== undefined){
        searchResults =
         <ul className='results'>
          {this.state.apiResult.items.map((repo) => {return (
            <li key={repo.id}>
              <div className = 'repo-listing'>
                <a href={repo.html_url}>{repo.name}</a>
                <div className='repo-owner'>
                  <a href={repo.owner.html_url}>{repo.owner.login}</a>
                </div>
              </div>
            </li>
          )})}
        </ul>;

        if (this.state.maxPage > 1){
          console.log("button bar sees page as",this.state.pageNum);
          console.log("button bar sees max-page as",this.state.maxPage);
          pageButtons =  <div className="pages">
            <span className ="back"
            onClick={()=>{this.backButton();}}>Back</span>
            <span className="page-num">{this.state.pageNum}/{this.state.maxPage}</span>
            <span className ="next"
            onClick={()=>{this.nextButton();}}>Next</span>
          </div>
        }

      }

      return <div>{pageButtons}<div className="repos-list"> {searchResults}  </div></div>
    }
  }

  class AppComponent extends React.Component {
    render() {
      return (<div>React works!
        <SearchBar />
      </div>);
    }
  }

  ReactDOM.render(<AppComponent />, mountNode);


}());
