import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../App.css';

const Home = () => {
  return (
    <div>
        <p>This will be the front page of Pubber</p>
        <Link to='/bars'>       
            <Button className='button' variant='warning' size='lg'>
                Bars
            </Button>
        </Link>
        <br/>
        <Link to='/offers'>
            <Button className='button' variant='warning' size='lg'>
                Offers
            </Button>
        </Link>
        <br/>
        <Link to='/calculator'>
            <Button className='button' variant='warning' size='lg'>
                Calculator
            </Button>
        </Link>
    </div>
  );
}

export default Home;