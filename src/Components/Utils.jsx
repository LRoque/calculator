import React from 'react';

function Utils(props) {
  return (
    <div>
      <button onClick={props.clearDisplay}>{props.value}</button>
    </div>
  );
}

export default Utils;
