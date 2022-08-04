import React from "react";
import { Route, Switch, Redirect, useHistory, Link } from "react-router-dom";

import CardSeason from "./CardSeason";
import { SeasonsContext } from "../context/SeasonsContext";

const Seasons = ({ seasonCardValue }) => {
  
//подписка на контекст с сезонами
    const currentSeasonsArray = React.useContext(SeasonsContext).results
    //console.log(currentSeasonsArray)


    return (
      <>
        <ul className="grid-season">
        {currentSeasonsArray ? (
          currentSeasonsArray.map((cardItem) => 
            <CardSeason
              key={cardItem.id}
              card={cardItem}
              onCardClick={seasonCardValue}/>
          )
        ) : (<p>Spinner...</p>)}
            

        </ul>
      </>
    );
  };
  
  export default Seasons;
  