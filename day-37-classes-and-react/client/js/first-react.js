(function() {

   console.log("hello from first react js");

   var BlogPostHeader = window.Blog.BlogPostHeader;
   var PostBody = window.Blog.PostBody;
   var Related = window.Blog.Related;

   var mountNode = document.querySelector('.react-root');


   class BlogPost extends React.Component {

     render(){

       var dateInformation = 0;

       //pretend api call happens

       var apiResult = {
         date: '19 December 2016 12pm America/New_York',
         title: 'TO SAVE REAL NEWS',
         imageUrl: "http://www.zeldman.com/wp-content/themes/zeldman/images/default.svg"
       }

       return (
         //<!-- //  here comes my jsx -- >
         <div className="blog-post">

          <BlogPostHeader
            date={apiResult.date}
            title={apiResult.title}/>
          <PostBody imageUrl={apiResult.imageUrl} />
          <Related />

         </div>
        );
      }

    }



   ReactDOM.render(<BlogPost />, mountNode);


}());
