import React from 'react';
import { Button } from 'react-bootstrap';

const Pad = ({display, lastValue, operator, setDisplay, setLastValue, setOperator}) => {
    const calculate = (op) => {
		return () => {
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
		setOperator("");
	}

	const clickNumber = (value) => {
        const hasDisplay = display !== "";
        const hasOperator = operator !== "";
        const lastValueIsZero = lastValue === "0";

		return () => {
			if (!hasDisplay && !lastValueIsZero && !hasOperator) {
				setLastValue("0");
				setDisplay(parseFloat(display.toString().concat(value)).toString().substr(0, 16));
			} else if (display.includes(".") && value === "0") {
				setDisplay(display.concat(value));
			} else {
				setDisplay(parseFloat(display.toString().concat(value)).toString().substr(0, 16));
			}
		}
	}

	const add = () => {
        const hasDisplay = display !== "";
        const hasOperator = operator !== "";

		setOperator("+");

		if (hasDisplay) {
			setDisplay("");
		} else {
			return;
		}

		if (display === "-") {
			setDisplay("");
			return;
		}
		
		if (hasOperator) {
			setLastValue(calculate(operator));
		} else {
			setLastValue(display);
		}
	}

	const subtract = () => {
        const hasDisplay = display !== "";
        const hasOperator = operator !== "";
        const lastValueIsZero = lastValue === "0";

		if (!hasDisplay && hasOperator && !lastValueIsZero) {
			setDisplay("-");
			return;
		}

		setOperator("-");

		if (hasDisplay) {
			setDisplay("");
		} else {
			return;
		}

		if (hasOperator) {
			setLastValue(calculate(operator));
		} else {
			setLastValue(display);
		}
	}

	const multiply = () => {
        const hasDisplay = display !== "";
        const hasOperator = operator !== "";

		setOperator("*");

		if (hasDisplay) {
			setDisplay("");
		} else {
			return;
		}

		if (display === "-") {
			setDisplay("");
			return;
		}
		
		if (hasOperator) {
			setLastValue(calculate(operator));
		} else {
			setLastValue(display);
		}
	}

	const divide = () => {
        const hasDisplay = display !== "";
        const hasOperator = operator !== "";

		setOperator("/");

		if (hasDisplay) {
			setDisplay("");
		} else {
			return;
		}

		if (display === "-") {
			setDisplay("");
			return;
		}
		
		if (hasOperator) {
			setLastValue(calculate(operator));
		} else {
			setLastValue(display);
		}
	}

	const equals = (op) => {
		return () => {
			setLastValue(calculate(operator));
			setDisplay("");
			setOperator("");
		}
	}

	const decimal = (value) => {
		return () => {
			if (!display.includes(".")) {
				setDisplay(display.concat(value));
			}
		}
    }
    
    return (
        <div>
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
            <Button id="subtract" onClick={subtract}>-</Button>
            <Button id="multiply" onClick={multiply}>*</Button>
            <Button id="divide" onClick={divide}>/</Button>
            <Button id="decimal" onClick={decimal(".")}>.</Button>
            <Button id="equals" onClick={equals(operator)}>=</Button>
            <Button id="clear" onClick={clear}>clear</Button>
        </div>
    )
}

export default Pad;
