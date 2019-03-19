import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';

const App = () => {
  return (
    <div className="calculator">
      <CalculatorDisplay text={"0"} />
      <div className="calculator-row">
        <ActionButton text={"clear"} /> 
        <NumberButton buttonStyle={"operator"} text={"/"} />
      </div>
      <div className="calculator-row">
        <NumberButton buttonStyle={"number"} text={"7"} /> 
        <NumberButton buttonStyle={"number"} text={"8"} /> 
        <NumberButton buttonStyle={"number"} text={"9"} /> 
        <NumberButton buttonStyle={"operator"} text={"*"} />
      </div>
      <div className="calculator-row">
        <NumberButton buttonStyle={"number"} text={"4"} /> 
        <NumberButton buttonStyle={"number"} text={"5"} /> 
        <NumberButton buttonStyle={"number"} text={"6"} /> 
        <NumberButton buttonStyle={"operator"} text={"-"} />
      </div>
      <div className="calculator-row">
        <NumberButton buttonStyle={"number"} text={"1"} /> 
        <NumberButton buttonStyle={"number"} text={"2"} /> 
        <NumberButton buttonStyle={"number"} text={"3"} /> 
        <NumberButton buttonStyle={"operator"} text={"+"} />
      </div>
      <div className="calculator-row">
        <ActionButton text={"0"} /> 
        <NumberButton buttonStyle={"operator"} text={"="} />
      </div>
    </div>
  );
};

export default App;
