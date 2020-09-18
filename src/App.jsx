import React, { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

const App = () => {
	const [display, setDisplay] = useState("0");
	const [currentValue, setCurrentValue] = useState("0");
	const [formulaScreen, setFormulaScreen] = useState("");

	const clear = () => {
		setDisplay("0");
		setCurrentValue("0");
		setFormulaScreen("");
	}

	const clickNumber = (value) => {
		return () => {
			setDisplay(parseInt(display.toString().concat(value)).toString().substr(0, 16));
			setCurrentValue(parseInt(currentValue.toString().concat(value)).toString().substr(0, 16));
			setFormulaScreen(parseInt(formulaScreen.toString().concat(value)).toString().substr(0, 16))
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
	    	<Button id="add">+</Button>
	    	<Button id="subtract">-</Button>
	    	<Button id="multiply">*</Button>
	    	<Button id="divide">:</Button>
	    	<Button id="decimal">.</Button>
	    	<Button id="equals">=</Button>
	    	<Button id="clear" onClick={clear}>clear</Button>
	    	<div id="formulascreen">{formulaScreen}</div>
	    	<div id="display">{display}</div>
    	</div>
    );
}

export default App;
