import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import Emoji from 'a11y-react-emoji'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <footer className='footer'>
        Made with
        {' '}
        <Emoji symbol="❤️" label="love" />
        {' '}
        by PubberBoyz
      </footer> 
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
