import React from 'react';
import Buttons from './Components/Buttons';
import Display from './Components/Display';
import { nanoid } from 'nanoid';

function App() {
  const [expression, setExpression] = React.useState('');
  const [currentNumber, setCurrentNumber] = React.useState('0');

  function handleDigit(digit) {
    // restart
    if (expression.endsWith('=')) {
      clearDisplay();
      setCurrentNumber(digit);
      return;
    }

    // handles decimals
    if (currentNumber.match(/[\.]/) && digit === '.') {
      return;
    }
    if (digit === '.' && currentNumber.match(/[0-9]/) === null) {
      if (currentNumber === '-')
        setCurrentNumber(prevValue => prevValue + `0${digit}`);
      else setCurrentNumber('0' + digit);
      return;
    }

    if (expression.match(/[/*+]$/) !== null && currentNumber === '-') {
      setCurrentNumber(prevValue => prevValue + digit);
      return;
    }

    if (
      (currentNumber === '0' && digit !== '.') ||
      (expression.length > 0 && currentNumber.match(/[/*+-]$/) !== null)
    )
      setCurrentNumber(digit);
    else setCurrentNumber(prevValue => prevValue + digit);
  }

  function handleOperator(operator) {
    if (expression.endsWith('=')) {
      setExpression(currentNumber + operator);
      setCurrentNumber(operator);
      return;
    }

    // last operator priority
    if (
      (currentNumber.match(/[\/\*\+]$/) !== null && operator !== '-') ||
      (currentNumber === '-' && expression.match(/[/*+]$/) !== null)
    ) {
      setCurrentNumber(operator);
      setExpression(prevValue => prevValue.slice(0, -1) + operator);
      return;
    }

    // negative number
    if (operator === '-' && currentNumber === '0') {
      setCurrentNumber(operator);
      return;
    }

    if (operator === '-' && currentNumber.match(/[/*+]/) !== null) {
      setCurrentNumber(operator);
      return;
    }

    setExpression(prevValue => prevValue + currentNumber + operator);
    setCurrentNumber(operator);
  }

  function evaluateExpression() {
    if (expression.endsWith('=')) return;
    setExpression(prevValue => prevValue + currentNumber + '=');
    setCurrentNumber(prevValue => eval(expression + prevValue).toString());
  }

  function clearDisplay() {
    setExpression('');
    setCurrentNumber('0');
  }

  return (
    <div>
      <Display expression={expression} currentNumber={currentNumber} />
      <Buttons
        clearDisplay={clearDisplay}
        evaluateExpression={evaluateExpression}
        handleDigit={handleDigit}
        handleOperator={handleOperator}
      />
    </div>
  );
}

export default App;
