(function() {

  class Related extends React.Component {

    render(){
      return(

       <div className="related">
          <h3>RELATED</h3>
          <ul>
            <li>
              <h4>Curse of the Zelman Curse</h4>
              <div className="date">2 March 2013</div>
              <div className="category">In "Apple"</div>
            </li>
            <li>
              <h4>Val Head: Web Animation in the Design Process</h4>
              <div className="date">8 November 2016</div>
              <div className="category">In "An Event Apart"</div>
            </li>
            <li>
              <h4>Like and Friend are broken in Facebook.</h4>
              <div className="date">3 March 2011</div>
              <div className="category">In "Design"</div>
            </li>
          </ul>
        </div>

      );
    }

  }



    window.Blog.Related = Related;


}());
