import React from 'react';
import { Button } from 'react-bootstrap';
import './Pad.css';

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

	const operatorHandler = (op) => {
		return () => {
			const hasDisplay = display !== "";
			const hasOperator = operator !== "";
			const lastValueIsZero = lastValue === "0";

			if (op === "-") {
				if (!hasDisplay && hasOperator && !lastValueIsZero) {
					setDisplay("-");
					return;
				}
			}
			
			setOperator(op);
			
			if (op !== "-") {
				if (display === "-") {
					setDisplay("");
					return;
				}
			}
		
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
	}

	const equals = (op) => {
		return () => {
			if (operator === "" || display === "") {
				return;
			}
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
        <div className="gridContainer">
            <Button id="zero" className="number" onClick={clickNumber("0")}>0</Button>
            <Button id="one" className="number" onClick={clickNumber("1")}>1</Button>
            <Button id="two" className="number" onClick={clickNumber("2")}>2</Button>
            <Button id="three" className="number" onClick={clickNumber("3")}>3</Button>
            <Button id="four" className="number" onClick={clickNumber("4")}>4</Button>
            <Button id="five" className="number" onClick={clickNumber("5")}>5</Button>
            <Button id="six" className="number" onClick={clickNumber("6")}>6</Button>
            <Button id="seven" className="number" onClick={clickNumber("7")}>7</Button>
            <Button id="eight" className="number" onClick={clickNumber("8")}>8</Button>
            <Button id="nine" className="number" onClick={clickNumber("9")}>9</Button>
            <Button id="add" className="operator" onClick={operatorHandler("+")}>+</Button>
            <Button id="subtract" className="operator" onClick={operatorHandler("-")}>-</Button>
            <Button id="multiply" className="operator" onClick={operatorHandler("*")}>*</Button>
            <Button id="divide" className="operator" onClick={operatorHandler("/")}>/</Button>
            <Button id="decimal" className="number" onClick={decimal(".")}>.</Button>
            <Button id="equals" onClick={equals(operator)}>=</Button>
            <Button id="clear" onClick={clear}>clear</Button>
        </div>
    )
}

export default Pad;
