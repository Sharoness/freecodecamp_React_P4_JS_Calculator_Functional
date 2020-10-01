import React, { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

const App = () => {
	const [display, setDisplay] = useState("0");
	const [lastValue, setLastValue] = useState("0");
	const [operator, setOperator] = useState("");

	const calculate = (op) => {
		return () => {
			console.log("calculate display, lastvalue ", display, lastValue)
			console.log("@@2", display, parseFloat(display));
			console.log("@@", lastValue, parseFloat(lastValue));
			console.log("@", operator)
			if (op === "+") {
				setLastValue((parseFloat(lastValue) + parseFloat(display)).toString());
			}
			if (op === "-") {
				setLastValue((parseFloat(lastValue) - parseFloat(display)).toString());
			}
			if (op === "*") {
				setLastValue((parseFloat(lastValue) * parseFloat(display)).toString());
			}
			if (op === "/") {
				setLastValue((parseFloat(lastValue) / parseFloat(display)).toString());
			}
		}
	}

	const clear = () => {
		setDisplay("0");
		setLastValue("0");
		setOperator("")
	}

	const clickNumber = (value) => {
		return () => {
			console.log("num last value: ", lastValue)
			console.log("num display: ", display)
			console.log("num operator: ", operator)
			//console.log("num check ", ((parseFloat(lastValue) + parseFloat(display)).toString()))
			//console.log("@@", display.toString().concat(value), parseFloat(display.toString().concat(value)));
			if (display === "" && lastValue !== "0" && operator === "") {
				setLastValue("0");
				setDisplay(parseFloat(display.toString().concat(value)).toString().substr(0, 16));
			} else if (display.includes(".") && value === "0") { // 0 intypen na .
				setDisplay(display.concat(value));
			} else if (display.includes(".")) { // nummers na . intypen
				setDisplay(parseFloat(display.toString().concat(value)).toString().substr(0, 16));
			} else {
				setDisplay(parseFloat(display.toString().concat(value)).toString().substr(0, 16));
			}
		}
	}

	const add = () => {
		console.log("add last value: ", lastValue)
		console.log("add display: ", display)
		console.log("add operator: ", operator)
		if ((display === "" && operator !== "" && lastValue !== "0") || (display === "" && operator === "")) { // als er al op een operator is gedrukt || direct na =
			setOperator("+");
		} else if (display === "-") {
			setOperator("+");
			setDisplay("");
		} else if (lastValue === "0" && operator === "") { // begin, na num ingeklikt te hebben
			setLastValue(display);
			setOperator("+");
			setDisplay("");
		} else if ((display !== "" && lastValue !== "0" && operator !== "") || (display !== "" && lastValue === "0" && operator !== "")) { // ergens middenin
			setLastValue(calculate(operator));
			setDisplay("");
			setOperator("+");
		}
	}

	const substract = () => {
		console.log("substract last value: ", lastValue);
		//console.log("substract display: ", display);
		console.log("substract operator: ", operator)
		if (display === "" && operator !== "" && lastValue !== "0") { // na andere operator klikken
			setDisplay("-");
		} else if (display === "" && operator === "") { // direct na =
			setOperator("-");
		} else if (lastValue === "0" && operator === "") {
			setLastValue(display);
			setOperator("-");
			setDisplay("");
		} else if ((display !== "" && lastValue !== "0" && operator !== "") || (display !== "" && lastValue === "0" && operator !== "")) {
			setLastValue(calculate(operator));
			setDisplay("");
			setOperator("-");
		}
	}

	const multiply = () => {
		console.log("multiply last value: ", lastValue);
		//console.log("multiply display: ", display);
		console.log("multiply operator: ", operator)
		if ((display === "" && operator !== "" && lastValue !== "0") || (display === "" && operator === "")) {
			setOperator("*");
		} else if (display === "-") {
			setOperator("*");
			setDisplay("");
		} else if (lastValue === "0" && operator === "") {
			setLastValue(display);
			setOperator("*");
			setDisplay("");
		} else if ((display !== "" && lastValue !== "0" && operator !== "") || (display !== "" && lastValue === "0" && operator !== "")) {
			setLastValue(calculate(operator));
			setDisplay("");
			setOperator("*");
		}
	}

	const divide = () => {
		console.log("divide last value: ", lastValue);
		//console.log("divide display: ", display);
		console.log("divide operator: ", operator);
		if ((display === "" && operator !== "" && lastValue !== "0") || (display === "" && operator === "")) {
			setOperator("/");
		} else if (display === "-") {
			setOperator("/");
			setDisplay("");
		} else if (lastValue === "0" && operator === "") {
			setLastValue(display);
			setOperator("/");
			setDisplay("");
		} else if ((display !== "" && lastValue !== "0" && operator !== "") || (display !== "" && lastValue === "0" && operator !== "")) {
			setLastValue(calculate(operator));
			setDisplay("");
			setOperator("/");
		}
	}

	const equals = (op) => {
		return () => {
			console.log("equals last value: ", lastValue);
			//console.log("equals display: ", display);
			console.log("equals operator: ", operator);
			setLastValue(calculate(operator));
			setDisplay("");
			setOperator("");
		}
	}

	const decimal = (value) => {
		return () => {
			console.log("decimal value", value);
			console.log("decimal display", display);
			if (!display.includes(".")) { // zodat er maar 1 . kan zijn
				setDisplay(display.concat(value));
			}
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
	    	<Button id="divide" onClick={divide}>/</Button>
	    	<Button id="decimal" onClick={decimal(".")}>.</Button>
	    	<Button id="equals" onClick={equals(operator)}>=</Button>
	    	<Button id="clear" onClick={clear}>clear</Button>
	    	<div id="display">{(display === "0" || display === "") ? lastValue : display}</div>
    	</div>
    );
}

export default App;
