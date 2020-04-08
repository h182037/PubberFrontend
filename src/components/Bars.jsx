import React, { useState ,useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
import Bar from './Bar.jsx'

const Bars = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [barList, setBarList] = useState([])

  useEffect(() => {
    // TODO fetch data from backend
    setBarList([
      // Temporary mock data
      {
        id: 1,
        name: 'Kronbar',
        address: 'Inndalsveien 29',
        description: 'Studentbaren på Kronstad Campus',
        isClub: false,
        imgSrc: 'https://static.wixstatic.com/media/888dc5_335e7051678c409fbfc4aac26a9c2999.png/v1/fill/w_600,h_636,al_c,q_90,usm_0.66_1.00_0.01/888dc5_335e7051678c409fbfc4aac26a9c2999.webp',
        prices: {
          id: 1,
          description: 'Priser på Kronbar',
          beer: 29,
          cider: 33,
          wine: 35,
          shot: 37
        },
        age: 18,
        offerId: 1
      },
      {
        id: 2,
        name: 'Kvarteret',
        address: 'Olav Kyrres gate 30',
        description: 'Studentplassen i Bergen',
        isClub: false,
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Det_Akademiske_Kvarter.JPG/1200px-Det_Akademiske_Kvarter.JPG',
        prices: {
          id: 2,
          description: 'Priser på Kvarteret',
          beer: 32,
          cider: 35,
          wine: 39,
          shot: 39
        },
        age: 18,
        offerId: 2
      },
      {
        id: 3,
        name: 'Heidi\'s Bier Bar',
        address: 'Lars Hilles gate 15',
        description: 'Beskrivelse av Heidi\'s',
        isClub: false,
        imgSrc: 'https://www.heidisbierbar.no/media/Heidis_logo_spacing-1.png',
        prices: {
          id: 3,
          description: 'Priser på Heidi\'s',
          beer: 75,
          cider: 80,
          wine: 85,
          shot: 60
        },
        age: 20,
        offerId: 3
      }
    ])
    setIsLoading(false)
  }, [])

  const barCards = () => {
    return barList.map(bar => {
      return (
        <Card key={bar.id}>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey={bar.id}>
            <b>{bar.name}</b>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={bar.id}>
            <Card.Body>
              <Bar data={bar} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      )
    })
  }
  
  return (
    <div>
      <h1>Bars</h1>
      {isLoading
        ? <Spinner animation="border" role="status" />
        : <Accordion className='accordion'>
          {barCards()}
        </Accordion>
      }
    </div>
  )
}

export default Bars