/* eslint-disable no-eval */
/* eslint-disable no-extend-native */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import "./Calculator.css";
import Button from "./Button";
import Display from "./Display";

export default (props) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [clearDisplay, setClearDisplay] = useState(false);
  const [operation, setOperation] = useState(null);
  const [values, setValues] = useState([0, 0]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    console.log("chamando use effect");
  }, [displayValue, clearDisplay, operation, values, current]);

  function clearMemory() {
    setDisplayValue(0);
    setClearDisplay(true);
    setOperation(null);
    setValues([0, 0]);
    setCurrent(0);
  }

  function chooseOperation(choosenOperation) {
    if (current === 0) {
      setOperation(choosenOperation);
      setCurrent(1);
      setClearDisplay(true);
    } else {
      const equals = choosenOperation === "=";
      const currentOperation = operation;

      const _values = [...values];
      _values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
      _values[1] = 0;

      setDisplayValue(values[0]);
      setOperation(equals ? null : chooseOperation);
      setCurrent(equals ? 0 : 1);
      setClearDisplay(!equals);
      setValues(_values);
    }
  }

  function addDigit(n) {
    if (n === "." && displayValue.includes(".")) {
      return;
    }

    const _clearDisplay = displayValue === "0" || clearDisplay;
    const _currentValue = _clearDisplay ? "" : displayValue;
    const _displayValue = _currentValue + n;

    setDisplayValue(_displayValue);
    setClearDisplay(false);

    if (n !== ".") {
      const i = current;
      const newValue = parseFloat(displayValue);
      const _values = [...values];
      _values[i] = newValue;
      setValues(_values);
      console.log(_values);
    }
  }

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <Button label="AC" click={() => clearMemory()} triple />
      <Button label="/" click={chooseOperation} operation />
      <Button label="7" click={addDigit} />
      <Button label="8" click={addDigit} />
      <Button label="9" click={addDigit} />
      <Button label="*" click={chooseOperation} operation />
      <Button label="4" click={addDigit} />
      <Button label="5" click={addDigit} />
      <Button label="6" click={addDigit} />
      <Button label="-" click={chooseOperation} operation />
      <Button label="1" click={addDigit} />
      <Button label="2" click={addDigit} />
      <Button label="3" click={addDigit} />
      <Button label="+" click={chooseOperation} operation />
      <Button label="0" click={addDigit} double />
      <Button label="." click={addDigit} />
      <Button label="=" click={chooseOperation} operation />
    </div>
  );
};
