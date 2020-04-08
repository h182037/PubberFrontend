import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

const Calculator = () => {
  const [test, setTest] = useState()
  const [inputCalculatorType, setInputCalculatorType] = useState(1)
  const [resultCalculatorType, setResultCalculatorType] = useState()
  const [inputDrinkType, setInputDrinkType] = useState('beer')
  const [resultDrinkType, setResultDrinkType] = useState()
  const [inputValue, setInputValue] = useState()
  const [resultValue, setResultValue] = useState()
  const [errorMessage, setErrorMessage] = useState()
  const [isFetching, setIsFetching] = useState(false)


  const getDataFromBackendTest = () => {
    if(inputValue.length === 0) {
      setErrorMessage('Please input a number')
    } else if(isNaN(inputValue)) {
      setErrorMessage('Invalid input, must be a number')
    } else if(inputValue <= 0) {
      setErrorMessage('Invalid input, must be larger than 0')
    } else {
      setTest(null)
      setErrorMessage(null)
      setIsFetching(true)
      fetch('https://pubber-backend.herokuapp.com/calculate')
      .then(response => response.json())
      .then(data => {
        setTest(data)
        setResultDrinkType(inputDrinkType)
        setResultCalculatorType(inputCalculatorType)
        setResultValue(inputValue)
        setIsFetching(false)
      })
    }
  }

  const isMoreThanOne = value => {
    if(isNaN(value)) {
      return value
    }
    return (value > 1);
  }

  return (
    <div>
      <h1>Calculator</h1>
      <p>Here you will find an advanced calculator to calculate your night out!</p>
      <form>
        <div className='columnContainer' >
          <label className='radioLabel' >
            <input
              type='radio'
              name='calculatorType'
              value={1}
              checked={inputCalculatorType === 1}
              onChange={() => setInputCalculatorType(1)}
              className='radioButton'
            />
            I have a given amount of money
          </label>
          <label className='radioLabel' >
            <input
              type='radio'
              name='calculatorType'
              value={2}
              checked={inputCalculatorType === 2}
              onChange={() => setInputCalculatorType(2)}
              className='radioButton'
            />
            I want to get a given amount of drinks
          </label>
        </div>

        <div className='columnContainer' >
        {inputCalculatorType === 1
            ? <label>
              Amount of money: 
              <input
                type='text'
                name='money'
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
                className='textInput'
              />
            </label>
            : <label>
              Amount of drinks: 
              <input
                type='text'
                name='drinks'
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
                className='textInput'
              />
            </label>
          }
          <p className='errorMessage'>{errorMessage}</p>
          <div>
            <label className='drinkRadioLabel' >
              <input
                type='radio'
                name='drinkType'
                value='beer'
                checked={inputDrinkType === 'beer'}
                onChange={() => setInputDrinkType('beer')}
                className='radioButton'
              />
              Beer
            </label>
            <label className='drinkRadioLabel' >
              <input
                type='radio'
                name='drinkType'
                value='cider'
                checked={inputDrinkType === 'cider'}
                onChange={() => setInputDrinkType('cider')}
                className='radioButton'
              />
              Cider
            </label>
            <label className='drinkRadioLabel' >
              <input
                type='radio'
                name='drinkType'
                value='wine'
                checked={inputDrinkType === 'wine'}
                onChange={() => setInputDrinkType('wine')}
                className='radioButton'
              />
              Wine
            </label>
            <label className='drinkRadioLabel' >
              <input
                type='radio'
                name='drinkType'
                value='shot'
                checked={inputDrinkType === 'shot'}
                onChange={() => setInputDrinkType('shot')}
                className='radioButton'
              />
              Shot
            </label>
          </div>
        </div>
        <Button 
          className='button pageButton'
          variant='warning'
          size='lg'
          onClick={getDataFromBackendTest}
        >
          Calculate!
        </Button>
      </form>
      {isFetching
        ? <Spinner animation="border" role="status" />
        : test && 
          <p>
            {resultCalculatorType === 1
              ? `For ${resultValue} kr you will get ${test.age} ${resultDrinkType}${isMoreThanOne(test.age) ? 's' : null} at ${test.name}`
              : `${resultValue} ${resultDrinkType}${isMoreThanOne(test.age) ? 's' : null} will cost you ${test.age} kr at ${test.name}`
            }  
          </p>
      }
    </div>
  )
}

export default Calculator