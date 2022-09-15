import React from 'react';

function Operator(props) {
  return (
    <div>
      <button id={props.id} onClick={() => props.handleOperator(props.value)}>
        {props.value}
      </button>
    </div>
  );
}
export default Operator;
