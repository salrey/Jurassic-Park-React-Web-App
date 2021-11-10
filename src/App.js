import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import species from './data/species';
import Headings from './components/Headings';
import ParkInfo from './components/ParkInfo';


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
    return (
      <div className="App">
       <Headings />
       <ParkInfo currentSpecies={this.state.currentSpecies} numberOfDinos={this.state.numberOfDinos} />
      </div>
    );
  }
}

export default App;
