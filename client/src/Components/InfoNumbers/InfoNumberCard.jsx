import React from 'react'

const InfoNumberCard = (props) => {
    const {infoCard} = props
  return (
    <div className="info-card">
    <div className="info-num">
    <img src={infoCard.image} alt={infoCard.image} />
    <span>{infoCard.num}</span> 
    </div>
    <p>{infoCard.description}</p>
  </div>
  )
}

export default InfoNumberCard
