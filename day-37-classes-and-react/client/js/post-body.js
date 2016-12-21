(function() {

     class PostBody extends React.Component {

       render(){
        return(

         <div className="post-body">
            <img src = {this.props.imageUrl}  />
            <p>This is the first Paragraph</p>
            <p>This is the second Paragraph</p>
         </div>

        );
       }

     }

     window.Blog.PostBody = PostBody;

}());
