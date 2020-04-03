import React from 'react';
import { Link } from 'react-router-dom';

const Bars = () => {
  return (
    <div>
        <li>
            <Link to='/'>Back to front page</Link>
        </li>
        <h1>Bars</h1>
        <p>Here you will find a list of bars!</p>
    </div>
  );
}

export default Bars;