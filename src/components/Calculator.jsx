import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import BarList from './BarList'
import { proxyUrl, isMoreThanOne, getRandomEmoji } from '../Utils'
import Emoji from 'a11y-react-emoji'

const Calculator = () => {
  const [calculatorType, setCalculatorType] = useState(1)
  const [drinkType, setDrinkType] = useState('beer')
  const [barType, setBarType] = useState('bar')
  const [value, setValue] = useState('')
  const [result, setResult] = useState()
  const [errorMessage, setErrorMessage] = useState()
  const [alcoholLevelEmoji, setAlcoholLevelEmoji] = useState()
  const [fetchingError, setFetchingError] = useState(false)
  const [isFetching, setIsFetching] = useState(false)


  const calculate = e => {
    e.preventDefault()
    if(!value || value.length === 0) {
      setErrorMessage('Please input a number')
    } else if(isNaN(value)) {
      setErrorMessage('Invalid input, must be a number')
    } else if(value <= 0) {
      setErrorMessage('Invalid input, must be larger than 0')
    } else if(parseInt(value) !== Math.floor(value)) {
      setErrorMessage('No decimals, please')
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
        data.answer = calculatorType === 1
          ? Math.floor(value/50)
          : value*50
        // -------------------------------------------------------------
        // Temporary data end
        // -------------------------------------------------------------

        const drinkText = drinkType === 'wine'
          ? isMoreThanOne(data.answer)
            ? 'glasses of wine'
            : 'glass of wine'
          : isMoreThanOne(data.answer)
            ? drinkType + 's'
            : drinkType
        data.resultText = calculatorType === 1
          ? `For ${value} kr you will get ${data.answer} ${drinkText} at ${data.name}`
          : `${value} ${drinkText} will cost you ${data.answer} kr at ${data.name}`

        const alcoholValue = calculatorType === 1 ? Math.floor(value/50) : value
        const alcoholLevel = alcoholValue <= 6 
          ? 'low'
          : alcoholValue <= 12
            ? 'medium'
            : 'high'
        setAlcoholLevelEmoji(getRandomEmoji(alcoholLevel))



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
      <form onSubmit={calculate}>
        <div className='columnContainer' >
          <label className='radioLabel' onClick={() => setCalculatorType(1)}>
            <input
              type='radio'
              name='calculatorType'
              value={1}
              checked={calculatorType === 1}
              className='radioButton'
            />
            I have a given amount of money
            <Emoji className='emoji' symbol='💰'/>
          </label>
          <label className='radioLabel' onClick={() => setCalculatorType(2)}>
            <input
              type='radio'
              name='calculatorType'
              value={2}
              checked={calculatorType === 2}
              className='radioButton'
            />
            I want to get a given amount of drinks
            <Emoji className='emoji' symbol='🥂'/>
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
            <label className='drinkRadioLabel' onClick={() => setDrinkType('beer')}>
              <input
                type='radio'
                name='drinkType'
                value='beer'
                checked={drinkType === 'beer'}
                className='radioButton'
              />
              Beer
              <Emoji symbol='🍺'/>
            </label>
            <label className='drinkRadioLabel' onClick={() => setDrinkType('cider')}>
              <input
                type='radio'
                name='drinkType'
                value='cider'
                checked={drinkType === 'cider'}
                className='radioButton'
              />
              Cider
              <Emoji symbol='🧃'/>
            </label>
            <label className='drinkRadioLabel' onClick={() => setDrinkType('wine')}>
              <input
                type='radio'
                name='drinkType'
                value='wine'
                checked={drinkType === 'wine'}
                className='radioButton'
              />
              Wine
              <Emoji symbol='🍷'/>
            </label>
            <label className='drinkRadioLabel' onClick={() => setDrinkType('shot')}>
              <input
                type='radio'
                name='drinkType'
                value='shot'
                checked={drinkType === 'shot'}
                className='radioButton'
              />
              Shot
              <Emoji symbol='🥃'/>
            </label>
          </div>
          <div>
            <label className='drinkRadioLabel' onClick={() => setBarType('bar')}>
              <input
                type='radio'
                name='barType'
                value='bar'
                checked={barType === 'bar'}
                className='radioButton'
              />
              Bar
              <Emoji symbol='🏪'/>
            </label>
            <label className='drinkRadioLabel' onClick={() => setBarType('club')}>
              <input
                type='radio'
                name='barType'
                value='club'
                checked={barType === 'club'}
                className='radioButton'
              />
              Club
              <Emoji symbol='🔮'/>
            </label>
          </div>
        </div>
      
        <Button 
          className='button pageButton'
          variant='warning'
          size='lg'
          onClick={calculate}
        >
          Calculate
          <Emoji className='emoji' symbol='⚙️'/>
        </Button>
        </form>
      {isFetching
        ? 
          <div>
            <p>Calculating...</p>
            <Spinner animation="border" role="status" />
          </div>
        : fetchingError
          ? <p className='errorMessage'>Calculation error. Please try again</p>
          : result && 
            <div>
              <p>
                {result.resultText}
                <Emoji className='emoji' symbol={alcoholLevelEmoji}/>
              </p>
              <br/>
              <BarList data={[result]} />
            </div>
      }
    </div>
  )
}

export default Calculator