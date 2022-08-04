import React from "react";

import { Route, Switch, Redirect, useHistory, Link } from "react-router-dom";

const CardLocation = ({ card, onCardClick }) => {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <>
      <li style={{ listStyleType: "none" }}>
        <div className="card" onClick={handleClick}>
          <Route exact path="/">
            <p>
              <b>Name: </b> {card.name}
            </p>
            <p>
              <b>Episode: </b> {card.episode}
            </p>
            <p>
              <b>Air date: </b> {card.air_date}
            </p>
          </Route>
          <Route path="/episode">
            <p>
              <b>Place: </b>
              {card.name}
            </p>
            <p>
              <b>Type </b>
              {card.type}
            </p>
            <p>
              <b>Number of Residents: </b>
              {card.residents.length}
            </p>
            <p>
              <b>Dimension </b>
              {card.dimension}
            </p>
          </Route>
        </div>
      </li>
    </>
  );
};

export default CardLocation;
