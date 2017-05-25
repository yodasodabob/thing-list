import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import ThingList from './ThingList'
import AddThingButton from './AddThingButton'
import base from './base'

class App extends Component {
componentWillMount() {
  base.syncState(
    'things',
    {
      context: this,
      state: 'things'

    })
}

  state = {
    things: {}
  }

  thing() {
    return {
      id: `thing-${Date.now()}`,
      name: '',
      complete: false,
    }
  }

  addThing = () => {
    const things = {...this.state.things}
    const thing = this.thing()
    things[thing.id] = thing
    this.setState({ things })
  }

  saveThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = thing
    this.setState({ things })
  }

  removeThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = null
    this.setState({ things })
  }

  completeThing = (thing) => {
    const things = {...this.state.things}
    const modThing = things[thing.id]
    modThing.complete = !modThing.complete
    this.setState({ things })
  }

  render() {
    const actions = {
      saveThing: this.saveThing,
      removeThing: this.removeThing,
      completeThing: this.completeThing,
    }

    return (
      <div className="App">
        <Header />
        <AddThingButton addThing={this.addThing} />
        <ThingList
          things={this.state.things}
          {...actions}

        />
      </div>
    );
  }
}

export default App;