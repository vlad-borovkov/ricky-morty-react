import React from 'react';
import { Route, Switch, Redirect, useHistory, Link } from 'react-router-dom';

function CardSeason({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li style={{ listStyleType: 'none' }}>
      <div className="card" onClick={handleClick}>
        <p>{card.name}</p>
        <p>{card.episode}</p>
        <p>{card.air_date}</p>
      </div>
    </li>
  );
}

export default CardSeason;
