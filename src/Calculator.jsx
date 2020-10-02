import React, { useState } from 'react';
import Display from './Display.jsx';
import Pad from './Pad.jsx';

const Calculator = () => {
	const [display, setDisplay] = useState("0");
	const [lastValue, setLastValue] = useState("0");
	const [operator, setOperator] = useState("");

  	return (
    	<div>
	    	<Pad display={display} lastValue={lastValue} operator={operator} setDisplay={setDisplay} setLastValue={setLastValue} setOperator={setOperator} />
	    	<Display display={display} lastValue={lastValue} />
    	</div>
    );
}

export default Calculator;
