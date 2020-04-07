import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

const Calculator = () => {
  const [cheapestBar, setCheapestBar] = useState()

  const getDataFromBackendTest = () => {
    fetch('https://pubber-backend.herokuapp.com/calculate')
    .then(response => response.json())
    .then(data => setCheapestBar(data.name))
  }

  return (
    <div>
      <h1>Calculator</h1>
      <p>Here you will find an advanced calculator to calculate your night out!</p>
      <Button 
        className='button pageButton'
        variant='warning'
        size='lg'
        onClick={getDataFromBackendTest}
      >
        Test
      </Button>
      {cheapestBar && 
      <p>
        The cheapest bar is {cheapestBar}  
      </p>}
    </div>
  )
}

export default Calculator