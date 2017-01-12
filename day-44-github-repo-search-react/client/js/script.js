(function() {

  //data should flow ONE WAY
  //or seperate function to object outside components and use as argument

  var mountNode = document.querySelector('#react-root');
  var auth = btoa("4d892accbfd6b61cb0118fe2a5ce0baeebe5dad7");


  class GithubRepos extends React.Component {

    constructor(){
      super();
    }

    componentWillMount(){

    }
    componentDidMount(){

    }

    keyUpHappened(evt){
      console.log(evt.keyCode);
      if (evt.keyCode === 13){
        // console.log(evt.target.value);
        // GithubRepos.searchRepos(evt.target.value);
        this.setState({
          query:evt.target.value,
          page:1
        })
        this.searchRepos(evt.target.value,1);
      }
    }

    nextButton(){
      var newPage = this.state.page;


      if (newPage < this.state.maxPage){
        newPage ++;

        this.setState({
          page:newPage
        })

        this.searchRepos(this.state.query,this.state.page);

      }

    }

    backButton(){
      var newPage = this.state.page;

      if (newPage > 1) {

        newPage --;

        this.setState({
          page:newPage
        })

        this.searchRepos(this.state.query,this.state.page);

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
          maxPage:Math.ceil(repoData.total_count/30)
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
      var searchBox;
      var searchResults;
      var pageButtons;

      searchBox = <div>
        <div className="search-box">
          <input className = "repo-input"
          placeholder="Type a repo name and hit Enter"
          onKeyUp={(evt) => {this.keyUpHappened(evt)}}/>
        </div>

      </div>;

      if (this.state !== null && this.state.apiResult !== undefined && this.state.page !== undefined){
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
          console.log("button bar sees page as",this.state.page);
          console.log("button bar sees max-page as",this.state.maxPage);
          pageButtons =  <div className="pages">
            <span className ="back"
            onClick={()=>{this.backButton();}}>Back</span>
            <span className="page-num">{this.state.page}/{this.state.maxPage}</span>
            <span className ="next"
            onClick={()=>{this.nextButton();}}>Next</span>
          </div>
        }

      }

      return <div>{searchBox}{pageButtons}<div className="repos-list"> {searchResults}  </div></div>
    }
  }

  class AppComponent extends React.Component {
    render() {
      return (<div>React works!
        <GithubRepos />
      </div>);
    }
  }

  ReactDOM.render(<AppComponent />, mountNode);


}());
