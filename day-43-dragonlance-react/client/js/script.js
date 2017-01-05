var mountNode = document.querySelector('#react-root');

class CharacterInfo extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (<div className="character-entry">
      <ol>
        <li><h2>{this.props.character.name}</h2></li>
        <li><h3>{this.props.character.race}</h3></li>
        <li><p>{this.props.character.description}</p></li>
      </ol>
     </div>)
  }
}

class AppComponent extends React.Component {

  componentDidMount(){
    this.loadCharacters();
  }

  loadCharacters(){

    $.ajax({
      url: 'http://localhost:5000/api/dragonlance'
    })
    .done((data) => {
      console.log('now i have data now',data);
      this.setState({
        apiResult:data
      })
    })
    .fail(() => {
      console.log('ajax failed');
      window.alert('trouble!');
    })
  }
  render() {

    var charList;

    if (this.state !== null){
      charList = <ul>
        {this.state.apiResult.characters.map((char) =>
          {return <CharacterInfo key={char.name} character={char} />}
        )}
      </ul>
    }


    return (<div className = "char-list"><h2>Characters:</h2>{charList}</div>)
  }
}

ReactDOM.render(<AppComponent />, mountNode);
