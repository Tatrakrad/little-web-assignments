window.SW = window.SW || { };

(function() {

  class PlanetDetail extends React.Component {

    constructor(props){
      // props.value = props.value || "";
      super(props);

      this.state = {
        isSelected:false
      }
    }

    toggle(){
      this.setState({
        isSelected: !this.state.isSelected
      })
    }

    render(){
      var currentClass = 'planet';
      var planetInfo;
      var selectedClass;

      if(this.state.isSelected){
        currentClass += " on";
        console.log('current class',currentClass);

        planetInfo = <div className="planet-info">
          <ul>
            <li>Orbital Period {this.props.planet.orbital_period}</li>
            <li>Rotation Period {this.props.planet.rotation_period}</li>
            <li>Diameter {this.props.planet.diameter}</li>
            <li>Climate {this.props.planet.climate}</li>
            <li>Gravity {this.props.planet.gravity}</li>
          </ul>
        </div>
      }

      return( <li className={currentClass} onClick={() => {this.toggle(); }}>
        <h3>{this.props.planet.name}</h3>
        {planetInfo}
      </li>);
    }

  }


  class PlanetListComponent extends React.Component {

    constructor(){
      super();

      // this.state = {
      //   apiResult:{ }
      // }

    }

    loadPlanets() {

      console.log('load the planets');

      $.ajax({
        url: 'http://swapi.co/api/planets',
        data: {page:1}
      })
      .done((data) => {
        console.log('Now, I have Data Now.',data);
        this.setState({
          apiResult:data
        });
      })
      .fail(() => {
        console.log('ajax failed');
        window.alert('trouble!');
      })


    }//end of loadPlanets function

    componentDidMount() {

      console.log('PlanetListComponent.componentDidMount');

      this.loadPlanets();
    }
    componentWillUnmount(){
      console.log('PlanetListComponent.componentWillUnmount');
    }



    render() {
      console.log('render',this.state)
      var planetList;

      if (this.state !=null){
        planetList = <ul>
          {this.state.apiResult.results.map((planet) => {return <PlanetDetail key={planet.url} planet={planet} />})}
        </ul>
      }

    return (<div className="planet-list">
        <h1>Planet List</h1>
          {planetList}
        </div>)
    }
  }

  SW.PlanetListComponent = PlanetListComponent;

}());
