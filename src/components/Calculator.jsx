import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import BarList from './BarList'
import { proxyUrl, isMoreThanOne } from '../Utils'
import Emoji from 'a11y-react-emoji'

const Calculator = () => {
  const [calculatorType, setCalculatorType] = useState(1)
  const [drinkType, setDrinkType] = useState('beer')
  const [barType, setBarType] = useState('bar')
  const [value, setValue] = useState('')
  const [result, setResult] = useState()
  const [errorMessage, setErrorMessage] = useState()
  const [fetchingError, setFetchingError] = useState(false)
  const [isFetching, setIsFetching] = useState(false)


  const getDataFromBackendTest = () => {
    if(!value || value.length === 0) {
      setErrorMessage('Please input a number')
    } else if(isNaN(value)) {
      setErrorMessage('Invalid input, must be a number')
    } else if(value <= 0) {
      setErrorMessage('Invalid input, must be larger than 0')
    } else {
      setResult(null)
      setErrorMessage(null)
      setFetchingError(false)
      setIsFetching(true)

      const payload = {
        givenMoney: calculatorType === 1,
        amount: value,
        drinkType: drinkType,
        club: barType === 'club'
      }

      fetch(proxyUrl + 'https://pubber-backend.herokuapp.com/calculate', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(payload)
      }).then(response => response.json())
      .then(data => {
        // TODO remove logging
        console.log(data)
        data.drinkType = drinkType
        data.calculatorType = calculatorType
        data.value = value

        // -------------------------------------------------------------
        // Temporary data, remove when data can be received from backend
        // -------------------------------------------------------------
        data.image = 'https://static.wixstatic.com/media/888dc5_335e7051678c409fbfc4aac26a9c2999.png/v1/fill/w_600,h_636,al_c,q_90,usm_0.66_1.00_0.01/888dc5_335e7051678c409fbfc4aac26a9c2999.webp'
        data.offers.description = 'Ukens tilbud på Kronbar'
        // -------------------------------------------------------------
        // Temporary data end
        // -------------------------------------------------------------

        //TODO display response data
        setResult(data)
        setIsFetching(false)
      }).catch(error => {
        setIsFetching(false)
        setFetchingError(true)
        console.error('Woopsie! Error:', error)
      }

      )
    }
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
              checked={calculatorType === 1}
              onChange={() => setCalculatorType(1)}
              className='radioButton'
            />
            I have a given amount of money
          </label>
          <label className='radioLabel' >
            <input
              type='radio'
              name='calculatorType'
              value={2}
              checked={calculatorType === 2}
              onChange={() => setCalculatorType(2)}
              className='radioButton'
            />
            I want to get a given amount of drinks
          </label>
        </div>

        <div className='columnContainer' >
          <label>
            {`Amount of ${calculatorType === 1 ? 'money' : 'drinks'}:`}
            <input
              type='text'
              name='drinks'
              value={value}
              onChange={event => setValue(event.target.value)}
              className='textInput'
            />
          </label>
          <p className='errorMessage'>{errorMessage}</p>
          <div>
            <label className='drinkRadioLabel' >
              <input
                type='radio'
                name='drinkType'
                value='beer'
                checked={drinkType === 'beer'}
                onChange={() => setDrinkType('beer')}
                className='radioButton'
              />
              Beer
            </label>
            <label className='drinkRadioLabel' >
              <input
                type='radio'
                name='drinkType'
                value='cider'
                checked={drinkType === 'cider'}
                onChange={() => setDrinkType('cider')}
                className='radioButton'
              />
              Cider
            </label>
            <label className='drinkRadioLabel' >
              <input
                type='radio'
                name='drinkType'
                value='wine'
                checked={drinkType === 'wine'}
                onChange={() => setDrinkType('wine')}
                className='radioButton'
              />
              Wine
            </label>
            <label className='drinkRadioLabel' >
              <input
                type='radio'
                name='drinkType'
                value='shot'
                checked={drinkType === 'shot'}
                onChange={() => setDrinkType('shot')}
                className='radioButton'
              />
              Shot
            </label>
          </div>
          <div>
            <label className='drinkRadioLabel' >
              <input
                type='radio'
                name='barType'
                value='bar'
                checked={barType === 'bar'}
                onChange={() => setBarType('bar')}
                className='radioButton'
              />
              Bar
            </label>
            <label className='drinkRadioLabel' >
              <input
                type='radio'
                name='barType'
                value='club'
                checked={barType === 'club'}
                onChange={() => setBarType('club')}
                className='radioButton'
              />
              Club
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
        ? 
          <div>
            <p>Calculating</p>
            <Spinner animation="border" role="status" />
          </div>
        : fetchingError
          ? <p className='errorMessage'>Calculation error. Please try again</p>
          : result && 
            <div>
              <p>
                {result.calculatorType === 1
                  ? `For ${result.value} kr you will get 10 ${result.drinkType}${isMoreThanOne(10) ? 's' : null} at ${result.name}`
                  : `${result.value} ${result.drinkType}${isMoreThanOne(10) ? 's' : null} will cost you 10 kr at ${result.name}`
                }  
              </p>
              <BarList data={[result]} />
            </div>
      }
    </div>
  )
}

export default Calculator