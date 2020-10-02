import React from 'react';

const Display = (props) => {
    return (
        <div id="display">{(props.display === "0" || props.display === "") ? props.lastValue : props.display}</div>
    )
}

export default Display;