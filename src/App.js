import { Component } from 'react';
import './App.css';
import species from './data/species';
import Headings from './components/Headings';
import ParkInfo from './components/ParkInfo';
import Park from './components/Park';
import Buttons from './components/Buttons';

class App extends Component {
  constructor() {
    super()
    this.state = {
      dinos: [],
      numberOfDinos: 0,
      currentSpecies: species[0],
    }
  }

  getRandomSpecies = () => {
    const i = Math.floor(Math.random() * species.length)
    this.setState({
      currentSpecies: species[i]
    })
  }

  addDinos = () => {
    const { dinos, currentSpecies } = this.state;
    this.setState({
      dinos: [...dinos, currentSpecies],
      numberOfDinos: dinos.length + 1
    })
  }

  reset = () => {
    this.setState({
      dinos: [],
      numberOfDinos: 0
    })
  }

  render() {
    const { dinos, currentSpecies, numberOfDinos } = this.state
    
    return (
      <div className="App">
       <Headings />
       <Buttons getRandomSpecies={this.getRandomSpecies} addDinos={this.addDinos} reset={this.reset} />
       <ParkInfo currentSpeciesName={currentSpecies.name} numberOfDinos={numberOfDinos} />
       <Park dinos={dinos}/>
      </div>
    );
  }
}

export default App;