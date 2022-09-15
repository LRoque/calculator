import React from 'react';

function Display(props) {
  return (
    <div>
      <h1>EXPRESSION: {props.expression}</h1>
      <h1 id="display">{props.currentNumber}</h1>
    </div>
  );
}

export default Display;
