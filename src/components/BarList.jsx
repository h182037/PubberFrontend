import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Bar from './Bar.jsx'

const BarList = props => {

  const barCards = () => {
    return props.data
      ? props.data.map(bar => {
        return (
          <Card key={bar.id}>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey={bar.id}>
              <b>{bar.name}</b>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={bar.id}>
              <Card.Body>
                <Bar key={bar.id} data={bar} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        )
      })
      : null
  }
  
  return (
    <Accordion className='accordion'>
      {barCards()}
    </Accordion>
  )
}

export default BarList