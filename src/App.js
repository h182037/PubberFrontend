import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Bars from './components/Bars';
import Offers from './components/Offers';
import Logo from './resources/logo.PNG';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Link to='/'>
          <img alt='Home button' src={Logo} />
        </Link>
        <Switch>
          <Route path="/bars" component={Bars} />
          <Route path="/offers" component={Offers} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/" component={Home} />
        </Switch>   
      </Router>
    </div>
  );
}

export default App;