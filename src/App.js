import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import ThingList from './ThingList'
import ThingButtons from './ThingButtons'

class App extends Component {
  state = {
    things: {
      'thing-1': { id: 'thing-1', name: 'Milk' },
      'thing-2': { id: 'thing-2', name: 'bread' },
      'thing-3': { id: 'thing-3', name: 'Bibb lettuce'},
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <ThingButtons />
        <ThingList things={this.state.things}/>
      </div>
    );
  }
}

export default App;
