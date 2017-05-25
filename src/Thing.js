import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'

import Actions from './Actions'
import './Thing.css'

class Thing extends Component {
    componentDidMount(){
        if (!this.nameInput.htmlEl.textContent) {
            this.nameInput.htmlEl.focus()
        }
    }

    hangleChange = (ev) => {
        debugger
        const { thing, saveThing } = this.props
        const field = ev.currentTarget.getArrtibute('name')
        thing[field] = ev.target.value
        saveThing(thing)
    }

  blurOnEnter = (ev) => {
      if (ev.key === 'Enter') {
          ev.preventDefault()
          ev.target.blur()
      }
  }


  render() {
    const { thing, removeThing, completeThing } = this.props
    return (
        <li className="Thing">
            <input type="checkbox" onChange={() => completeThing(thing)} checked={thing.complete} />
            <div className="details">
                <ContentEditable
                className="name"
                html={thing.name}
                onChange={this.handleChange}
                onKeyPress={this.blurOnEnter}
                ref={input => this.nameInput = input}
                />
                <input type="date" name = 'dueOn' defaultValue={thing.dueOn} />
                <Actions thing={thing} removeThing={removeThing}/>
            </div>
        </li>
    )
  }
}

export default Thing