import React from 'react';
import { Link } from 'react-router-dom';

const Calculator = () => {
  return (
    <div>
        <li>
            <Link to='/'>Back to front page</Link>
        </li>
        <h1>Calculator</h1>
        <p>Here you will find an advanced calculator to calculate your night out!</p>
    </div>
  );
}

export default Calculator;