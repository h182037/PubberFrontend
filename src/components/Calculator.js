import React from 'react';

const Calculator = () => {

  const getDataFromBackendTest = () => {
    fetch('https://pubber-backend.herokuapp.com/calculate')
    .then(response => response.json())
    .then(data => console.log(data));
  }

  return (
    <div>
      <h1>Calculator</h1>
      <p>Here you will find an advanced calculator to calculate your night out!</p>
      <button onClick={getDataFromBackendTest}>
        Test
      </button>
    </div>
  );
}

export default Calculator;