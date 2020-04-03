import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Bars from './components/Bars';
import Offers from './components/Offers';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/bars">
            <Bars />
          </Route>
          <Route path="/offers">
            <Offers />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;