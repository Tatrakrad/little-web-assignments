window.SW = window.SW || {};

(function() {
  var mountNode = document.querySelector('#react-root');

  class AppComponent extends React.Component {
    render() {
      return (<div>React works!
        <SW.PlanetListComponent />
      </div>);
    }
  }

  ReactDOM.render(<AppComponent />, mountNode);

}());
