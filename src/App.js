import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import species from './data/species';
import Headings from './components/Headings';
import ParkInfo from './components/ParkInfo';
import DinoCard from './components/DinosCard';


class App extends Component {
  constructor() {
    super()
    this.state = {
      dinos: [],
      numberOfDinos: 0,
      currentSpecies: species[0],
    }
  }

  render() {
    const { currentSpecies, numberOfDinos } = this.state
    return (
      <div className="App">
       <Headings />
       <ParkInfo currentSpeciesName={currentSpecies.name} numberOfDinos={numberOfDinos} />
       <DinoCard dino={currentSpecies}/>
      </div>
    );
  }
}

export default App;
