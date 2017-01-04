var mountNode = document.querySelector('#react-root');

class StarwarsApiSampleComponent extends React.Component {

  constructor(){
    super();

    this.state = {
      apiResult: {
        results: []
      }
    }
    //above mimics format of our api call
  }

  clicky(){

    $.ajax({
      url: 'http://swapi.co/api/starships',
      data: {page:2}
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

  }

  render() {
    return ( <div className="starwars-api-sample-content">
      <h2>Star Wars!</h2>
      <button onClick={()=>{this.clicky()}}>load data</button>

      <ul>
        {this.state.apiResult.results.map((ship) => {return <li key={ship.url}>It&apos;s a/an/the {ship.name} </li>})}
      </ul>
    </div>
    )
  }
}

class LunchPlace extends React.Component {

  render(){
    return(
      <li className="lunch-component">{this.props.place.name} - {this.props.place.location}
         <ol>
          Favorite Foods:
          {this.props.place.favoriteFoods.map((food, index) => { return <li key={index}>{food}</li>})}
         </ol>
       </li>
    )
  }

}

class AppComponent extends React.Component {
  render() {

    var dataDallasLunch = [
      {
        name:'Metropolitan Cafe',
        location:'2030 Main St.',
        favoriteFoods: ['diablo panini', 'reuben'],
        id:0
      },
      {
       name:'Mudhen',
       location:'Farmers Market',
       favoriteFoods: ['steak and rice bowl', 'parpos unlimited', 'duck nips'],
       id:2
     },
      {
        name:'Moe\'s',
        location:'2121 Main St.',
        favoriteFoods: ['gastric rage chola', 'cardiac arrabiata'],
        id:1
      },
      {
        name:'Jimmy John\'s',
        location: '1414 Elm St.',
        favoriteFoods: ['BLT', '2 blts','salt and vinegar chipes'],
        id:3
      }
    ]

    return (<div className="app-component">
      <ul>
      {dataDallasLunch.map((place) => {return <LunchPlace key={place.id} place={place}/>})}
      </ul>

      <StarwarsApiSampleComponent />
    </div>);
  }
}

ReactDOM.render(<AppComponent />, mountNode);
