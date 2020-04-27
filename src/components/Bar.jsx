import React from 'react'
import Image from 'react-bootstrap/Image'

const Bar = props => {
    const { name, address, description, club, image, prices, age, offers, cc } = props.data

    return (
        <div className='columnContainer'>
            <div className='rowContainer'>
                <div className='barContainerColumn'>
                    <Image className='barImage' alt={`Image of ${name}`} src={image} fluid />
                </div>
                <div className='barContainerColumn'>
                    <h4>{name}</h4>
                    <p>Address: {address}</p>
                    <p>{description}</p>
                    <p>{club ? 'Is a club (not a bar)' : 'Is a bar (not a club)'}</p>
                    <p>Age limit: {age}</p>
                    <p>CC: {cc} kr</p>
                </div>
            </div>
            <div className='rowContainer'>
                <div className='barContainerColumn'>
                    <h5>Prices</h5>
                    <h6>{prices.description}</h6>
                    <p>Beer: {prices.beer} kr</p>
                    <p>Cider: {prices.cider} kr</p>
                    <p>Wine: {prices.wine} kr</p>
                    <p>Shot: {prices.shot} kr</p>
                </div>
                <div className='barContainerColumn'>
                    {offers && 
                        <div>
                            <h5>Offers</h5>
                            <h6>{offers.description}</h6>
                            <p>Beer: {offers.beer} kr</p>
                            <p>Cider: {offers.cider} kr</p>
                            <p>Wine: {offers.wine} kr</p>
                            <p>Shot: {offers.shot} kr</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Bar