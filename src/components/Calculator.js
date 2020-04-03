import React from 'react';
import { Link } from 'react-router-dom';

const Calculator = () => {

  const getDataFromBackendTest = () => {
    fetch('https://swapi.co/api/people/1')
    .then((response) => { response.json() })
    .then((data) => {
      console.log(data);
    });
  }

  return (
    <div>
      <li>
          <Link to='/'>Back to front page</Link>
      </li>
      <h1>Calculator</h1>
      <p>Here you will find an advanced calculator to calculate your night out!</p>
      <button onClick={getDataFromBackendTest}>
        Test123
      </button>
    </div>
  );
}

export default Calculator;