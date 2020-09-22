import React, { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

const App = () => {
	const [display, setDisplay] = useState("0");
	const [lastValue, setLastValue] = useState("0");
	const [operator, setOperator] = useState("");

	const rekenen = (op) => {
		return () => {
			if (op === "+") {
				setLastValue((parseInt(display) + parseInt(lastValue)).toString());
			}			
			//console.log("rek op", op)
			//console.log("rek val1", val1)
			//console.log("rek val2", val2)
			//console.log("rek lastValue", lastValue)

		}
	}

	const clear = () => {
		setDisplay("0");
		setLastValue("0");
	}

	const clickNumber = (value) => {
		return () => {
			//console.log("num last value: ", lastValue)
			//console.log("num display: ", display)
			//console.log("num operator: ", operator)
			//console.log("num check ", ((parseInt(lastValue) + parseInt(display)).toString()))
			setDisplay(parseInt(display.toString().concat(value)).toString().substr(0, 16));
		}
	}

	const add = () => {
		//console.log("add last value: ", lastValue)
		//console.log("add display: ", display)
		//console.log("add operator: ", operator)
		if (lastValue === "0") {
			setLastValue(display);
			setOperator("+");
			setDisplay("");
		} else {
			setLastValue(rekenen("+"));
			setDisplay("");
			setOperator("+");
		}
	}

  	return (
    	<div>
    		<h1>Javascript Calculator</h1>
	    	<Button id="zero" onClick={clickNumber("0")}>0</Button>
	    	<Button id="one" onClick={clickNumber("1")}>1</Button>
	    	<Button id="two" onClick={clickNumber("2")}>2</Button>
	    	<Button id="three" onClick={clickNumber("3")}>3</Button>
	    	<Button id="four" onClick={clickNumber("4")}>4</Button>
	    	<Button id="five" onClick={clickNumber("5")}>5</Button>
	    	<Button id="six" onClick={clickNumber("6")}>6</Button>
	    	<Button id="seven" onClick={clickNumber("7")}>7</Button>
	    	<Button id="eight" onClick={clickNumber("8")}>8</Button>
	    	<Button id="nine" onClick={clickNumber("9")}>9</Button>
	    	<Button id="add" onClick={add}>+</Button>
	    	<Button id="subtract">-</Button>
	    	<Button id="multiply">*</Button>
	    	<Button id="divide">:</Button>
	    	<Button id="decimal">.</Button>
	    	<Button id="equals">=</Button>
	    	<Button id="clear" onClick={clear}>clear</Button>
	    	<div id="display">{display}</div>
    	</div>
    );
}

export default App;
