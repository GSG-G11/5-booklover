import React from "react";
import shop from "./shop.png";
import group from "./group.png";
import book from "./book.png";
import './InfoNumbers.css';
import InfoNumberCard from "./InfoNumberCard";
const numCard = [
    {
        image: shop,
        num: 268,
        description: 'Our stores around the world'
    },
    {
        image: group,
        num: '25,634',
        description: 'Our happy customers'
    },
    {
        image: book,
        num: '68+k',
        description: 'Book Collections'
    },
]

const InfoNumbers = () => {
  return (
    <div className="info-numbers">
        {numCard.map((infoCard,index) => {
            return <InfoNumberCard key={index} infoCard={infoCard} />
        })}
    </div>
  );
};

export default InfoNumbers;
