import React from 'react'
import './App.css'
import {
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Home from './components/Home.jsx'
import Calculator from './components/Calculator.jsx'
import Bars from './components/Bars.jsx'
import Offers from './components/Offers.jsx'
import Logo from './resources/logo.PNG'

const App = () => {
  
  return (
    <div className='App'>
      <Link to='/'>
        <img className='logo' alt='Home button' src={Logo} />
      </Link>
      <Switch>
        <Route exact path="/bars" component={Bars} />
        <Route exact path="/offers" component={Offers} />
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/" component={Home} />
      </Switch> 
    </div>
  )
}

export default App