import React from 'react';

function Digit(props) {
  return (
    <div>
      <button id={props.id} onClick={() => props.handleDigit(props.value)}>
        {props.value}
      </button>
    </div>
  );
}

export default Digit;
