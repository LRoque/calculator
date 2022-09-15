import React from 'react';
import Digit from './Digit';
import Utils from './Utils';
import Operator from './Operator';

function Buttons(props) {
  return (
    <div>
      <button id="clear" onClick={props.clearDisplay}>
        AC
      </button>
      <button id="equals" onClick={props.evaluateExpression}>
        {'='}
      </button>
      <Digit id="seven" value="7" handleDigit={props.handleDigit} />
      <Digit id="eight" value="8" handleDigit={props.handleDigit} />
      <Digit id="nine" value="9" handleDigit={props.handleDigit} />
      <Operator id="divide" value="/" handleOperator={props.handleOperator} />
      <Digit id="four" value="4" handleDigit={props.handleDigit} />
      <Digit id="five" value="5" handleDigit={props.handleDigit} />
      <Digit id="six" value="6" handleDigit={props.handleDigit} />
      <Operator id="multiply" value="*" handleOperator={props.handleOperator} />
      <Digit id="one" value="1" handleDigit={props.handleDigit} />
      <Digit id="two" value="2" handleDigit={props.handleDigit} />
      <Digit id="three" value="3" handleDigit={props.handleDigit} />
      <Operator id="add" value="+" handleOperator={props.handleOperator} />
      <Digit id="zero" value="0" handleDigit={props.handleDigit} />
      <Digit id="decimal" value="." handleDigit={props.handleDigit} />
      <Operator id="subtract" value="-" handleOperator={props.handleOperator} />
    </div>
  );
}

export default Buttons;
