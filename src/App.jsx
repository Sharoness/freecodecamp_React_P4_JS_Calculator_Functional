import React, { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

const App = () => {
	const [display, setDisplay] = useState("0");
	const [lastValue, setLastValue] = useState("0");
	const [operator, setOperator] = useState("");

	const calculate = (op) => {
		return () => {
			if (op === "+") {
				setLastValue((parseInt(display) + parseInt(lastValue)).toString());
			}
			if (op === "-") {
				setLastValue((parseInt(lastValue) - parseInt(display)).toString());
			}
			if (op === "*") {
				setLastValue((parseInt(lastValue) * parseInt(display)).toString());
			}
		}
	}

	const clear = () => {
		setDisplay("0");
		setLastValue("0");
	}

	const clickNumber = (value) => {
		return () => {
			console.log("num last value: ", lastValue)
			console.log("num display: ", display)
			//console.log("num operator: ", operator)
			//console.log("num check ", ((parseInt(lastValue) + parseInt(display)).toString()))
			setDisplay(parseInt(display.toString().concat(value)).toString().substr(0, 16));
		}
	}

	const add = () => {
		console.log("add last value: ", lastValue)
		console.log("add display: ", display)
		//console.log("add operator: ", operator)
		if (lastValue === "0") {
			setLastValue(display);
			setOperator("+");
			setDisplay("");
		} else {
			setLastValue(calculate("+"));
			setDisplay("");
			setOperator("+");
		}
	}

	const substract = () => {
		console.log("substract last value: ", lastValue);
		console.log("substract display: ", display);
		if (lastValue === "0") {
			setLastValue(display);
			setOperator("-");
			setDisplay("");
		} else {
			setLastValue(calculate("-"));
			setDisplay("");
			setOperator("-");
		}
	}

	const multiply = () => {
		console.log("substract last value: ", lastValue);
		console.log("substract display: ", display);
		if (lastValue === "0") {
			setLastValue(display);
			setOperator("*");
			setDisplay("");
		} else {
			setLastValue(calculate("*"));
			setDisplay("");
			setOperator("*");
		}
	}

	const equals = (op) => {
		return () => {
			console.log("equals last value: ", lastValue);
			console.log("equals display: ", display);
			setLastValue(calculate(op));
			setDisplay(lastValue);
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
	    	<Button id="subtract" onClick={substract}>-</Button>
	    	<Button id="multiply" onClick={multiply}>*</Button>
	    	<Button id="divide">:</Button>
	    	<Button id="decimal">.</Button>
	    	<Button id="equals" onClick={equals(operator)}>=</Button>
	    	<Button id="clear" onClick={clear}>clear</Button>
	    	<div id="display">{display}</div>
    	</div>
    );
}

export default App;
