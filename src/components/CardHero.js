import React from "react";

import { Route, Switch, Redirect, useHistory, Link } from "react-router-dom";

const CardHero = ({card, onCardClick}) => {
  
  const handleClickOnCard = () =>{
    onCardClick(card)
  }
  
  return (
    <>
      <li style={{ listStyleType: "none" }}>
        <div className="card-hero" onClick={handleClickOnCard}>
          <h3>{card.name}</h3>
          <img
          className="card-hero__image"
          src={card.image}>
          </img>
          <p>{card.species}</p>
          <p>{card.gender}</p>
          <p>Took part in {card.episode.length} ep.</p>
        </div>
      </li>
    </>
  );
};

export default CardHero;
