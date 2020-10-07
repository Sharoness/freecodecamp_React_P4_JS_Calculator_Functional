import React from 'react';
import './Display.css';

const Display = (props) => {
    return (
        <div id="display">{(props.display === "0" || props.display === "") ? props.lastValue : props.display}</div>
    )
}

export default Display;