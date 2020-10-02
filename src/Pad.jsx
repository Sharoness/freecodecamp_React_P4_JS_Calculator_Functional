import React from 'react';
import { Button } from 'react-bootstrap';

const Pad = (props) => {
    const calculate = (op) => {
		return () => {
			if (op === "+") {
				props.setLastValue((parseFloat(props.lastValue) + parseFloat(props.display)).toString());
			}
			if (op === "-") {
				props.setLastValue((parseFloat(props.lastValue) - parseFloat(props.display)).toString());
			}
			if (op === "*") {
				props.setLastValue((parseFloat(props.lastValue) * parseFloat(props.display)).toString());
			}
			if (op === "/") {
				props.setLastValue((parseFloat(props.lastValue) / parseFloat(props.display)).toString());
			}
		}
	}

	const clear = () => {
		props.setDisplay("0");
		props.setLastValue("0");
		props.setOperator("")
	}

	const clickNumber = (value) => {
		return () => {
			if (props.display === "" && props.lastValue !== "0" && props.operator === "") {
				props.setLastValue("0");
				props.setDisplay(parseFloat(props.display.toString().concat(value)).toString().substr(0, 16));
			} else if (props.display.includes(".") && value === "0") {
				props.setDisplay(props.display.concat(value));
			} else {
				props.setDisplay(parseFloat(props.display.toString().concat(value)).toString().substr(0, 16));
			}
		}
	}

	const add = () => {
		if ((props.display === "" && props.operator !== "" && props.lastValue !== "0") || (props.display === "" && props.operator === "")) {
			props.setOperator("+");
		} else if (props.display === "-") {
			props.setOperator("+");
			props.setDisplay("");
		} else if (props.lastValue === "0" && props.operator === "") {
			props.setLastValue(props.display);
			props.setOperator("+");
			props.setDisplay("");
		} else if ((props.display !== "" && props.lastValue !== "0" && props.operator !== "") || (props.display !== "" && props.lastValue === "0" && props.operator !== "")) {
			props.setLastValue(calculate(props.operator));
			props.setDisplay("");
			props.setOperator("+");
		}
	}

	const substract = () => {
		if (props.display === "" && props.operator !== "" && props.lastValue !== "0") {
			props.setDisplay("-");
		} else if (props.display === "" && props.operator === "") {
			props.setOperator("-");
		} else if (props.lastValue === "0" && props.operator === "") {
			props.setLastValue(props.display);
			props.setOperator("-");
			props.setDisplay("");
		} else if ((props.display !== "" && props.lastValue !== "0" && props.operator !== "") || (props.display !== "" && props.lastValue === "0" && props.operator !== "")) {
			props.setLastValue(calculate(props.operator));
			props.setDisplay("");
			props.setOperator("-");
		}
	}

	const multiply = () => {
		if ((props.display === "" && props.operator !== "" && props.lastValue !== "0") || (props.display === "" && props.operator === "")) {
			props.setOperator("*");
		} else if (props.display === "-") {
			props.setOperator("*");
			props.setDisplay("");
		} else if (props.lastValue === "0" && props.operator === "") {
			props.setLastValue(props.display);
			props.setOperator("*");
			props.setDisplay("");
		} else if ((props.display !== "" && props.lastValue !== "0" && props.operator !== "") || (props.display !== "" && props.lastValue === "0" && props.operator !== "")) {
			props.setLastValue(calculate(props.operator));
			props.setDisplay("");
			props.setOperator("*");
		}
	}

	const divide = () => {
		if ((props.display === "" && props.operator !== "" && props.lastValue !== "0") || (props.display === "" && props.operator === "")) {
			props.setOperator("/");
		} else if (props.display === "-") {
			props.setOperator("/");
			props.setDisplay("");
		} else if (props.lastValue === "0" && props.operator === "") {
			props.setLastValue(props.display);
			props.setOperator("/");
			props.setDisplay("");
		} else if ((props.display !== "" && props.lastValue !== "0" && props.operator !== "") || (props.display !== "" && props.lastValue === "0" && props.operator !== "")) {
			props.setLastValue(calculate(props.operator));
			props.setDisplay("");
			props.setOperator("/");
		}
	}

	const equals = (op) => {
		return () => {
			props.setLastValue(calculate(props.operator));
			props.setDisplay("");
			props.setOperator("");
		}
	}

	const decimal = (value) => {
		return () => {
			if (!props.display.includes(".")) {
				props.setDisplay(props.display.concat(value));
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
            <Button id="subtract" onClick={substract}>-</Button>
            <Button id="multiply" onClick={multiply}>*</Button>
            <Button id="divide" onClick={divide}>/</Button>
            <Button id="decimal" onClick={decimal(".")}>.</Button>
            <Button id="equals" onClick={equals(props.operator)}>=</Button>
            <Button id="clear" onClick={clear}>clear</Button>
        </div>
    )
}

export default Pad;
