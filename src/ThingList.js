import React from 'react'
import './ThingList.css'
import Thing from './Thing'

const ThingList = (props) => {
    return (
        <ul className="ThingList">
            { 
             Object
                .keys(props.things)
                .map(thingID => <Thing thing={props.things[thingID]} key={key}/>)
             }
        </ul>
    )
}

export default ThingList