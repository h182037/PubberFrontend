import React from 'react'
import Image from 'react-bootstrap/Image'

const Bar = props => {
    const { id, name, address, description, isClub, imgSrc, prices, age, offerId } = props.data

    return (
        <div className='columnContainer'>
            <div className='barContainerRow'>
                <div className='barContainerColumn'>
                    <Image className='barImage' alt={`Image of ${name}`} src={imgSrc} fluid />
                </div>
                <div className='barContainerColumn'>
                    <h4>{name}</h4>
                    <p>Address: {address}</p>
                    <p>{description}</p>
                    <p>{isClub ? 'Is a club (not a bar)' : 'Is a bar (not a club)'}</p>
                    <p>Age limit: {age}</p>
                </div>
            </div>
            <div className='barContainerRow'>
                <div className='barContainerColumn'>
                    <h5>Prices</h5>
                    <p>Beer: {prices.beer} kr</p>
                    <p>Cider: {prices.cider} kr</p>
                    <p>Wine: {prices.wine} kr</p>
                    <p>Shot: {prices.shot} kr</p>
                </div>
                <div className='barContainerColumn'>
                    {/*TODO more information here*/}
                </div>
            </div>
        </div>
    )
}

export default Bar