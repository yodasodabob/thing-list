import React, { Component } from 'react'
import './ThingButtons.css'

class AddThingButton extends Component{
    // constructor(props) {
    //     super(props)
    //     this.state = {

    //     }
    // }
    render() {
        return(
            <button className="add-thing">Add Thing</button>
        )
    }
}

const LogoutButton = () => {
    return (
        <button className="logout">Sign Out</button>
    )
}

const ThingButtons = () => {
    return(
        <div className="ThingButtons">
            <LogoutButton />
            <AddThingButton />
        </div>
    )
}

export default ThingButtons