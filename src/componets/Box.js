import React from 'react'

export default function Box(props){
    let styles={
        background: props.on ? "#222222": 'white'
    }
    return(
        <div className="box" style={styles} onClick={props.toggle}></div>
    )
}