import React from 'react';

import { Route, Switch, Redirect, useHistory, Link } from 'react-router-dom';

const CardHero = ({ card, onCardClick }) => {
  const handleClickOnCard = () => {
    onCardClick(card);
  };

  return (
    <>
      <li style={{ listStyleType: 'none' }}>
        <div className="card-hero" onClick={handleClickOnCard}>
          <h3 className="card-hero__title">{card.name}</h3>
          <div className="card-hero__wrapper">
            <img className="card-hero__image" src={card.image}></img>
            <div className="card-hero__wrapper_items">
              <p className="card-hero__item">{card.species}</p>
              <p className="card-hero__item">{card.gender}</p>
              <p className="card-hero__item">
                Took part in {card.episode.length} ep.
              </p>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default CardHero;
