import React from 'react';
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
            <button id="zero" className="number" onClick={clickNumber("0")}>0</button>
            <button id="one" className="number" onClick={clickNumber("1")}>1</button>
            <button id="two" className="number" onClick={clickNumber("2")}>2</button>
            <button id="three" className="number" onClick={clickNumber("3")}>3</button>
            <button id="four" className="number" onClick={clickNumber("4")}>4</button>
            <button id="five" className="number" onClick={clickNumber("5")}>5</button>
            <button id="six" className="number" onClick={clickNumber("6")}>6</button>
            <button id="seven" className="number" onClick={clickNumber("7")}>7</button>
            <button id="eight" className="number" onClick={clickNumber("8")}>8</button>
            <button id="nine" className="number" onClick={clickNumber("9")}>9</button>
            <button id="add" className="operator" onClick={operatorHandler("+")}>+</button>
            <button id="subtract" className="operator" onClick={operatorHandler("-")}>-</button>
            <button id="multiply" className="operator" onClick={operatorHandler("*")}>*</button>
            <button id="divide" className="operator" onClick={operatorHandler("/")}>/</button>
            <button id="decimal" className="number" onClick={decimal(".")}>.</button>
            <button id="equals" onClick={equals(operator)}>=</button>
            <button id="clear" onClick={clear}>AC</button>
        </div>
    )
}

export default Pad;
