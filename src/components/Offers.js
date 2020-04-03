import React from 'react';
import { Link } from 'react-router-dom';

const Offers = () => {
  return (
    <div>
        <li>
            <Link to='/'>Back to front page</Link>
        </li>
        <h1>Offers</h1>
        <p>The best offers will be listed here!</p>
    </div>
  );
}

export default Offers;