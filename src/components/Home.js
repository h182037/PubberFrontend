import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <h1>Pubber</h1>
        <p>This will be the front page of Pubber</p>

        <ul>
            <li>
                <Link to='/bars'>Bars</Link>
            </li>
            <li>
                <Link to='/offers'>Offers</Link>
            </li>
            <li>
                <Link to='/calculator'>Calculator</Link>
            </li>
        </ul>
    </div>
  );
}

export default Home;