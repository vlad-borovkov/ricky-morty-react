import React from "react";
import { Route, Switch, Redirect, useHistory, Link } from "react-router-dom";
import { api } from "../utils/Api";
import CardHero from "./CardHero";

const Episode = ({ clickedCardValue, characters }) => {
  //массив персонажей
  const [charactersArray, setCharactersArray] = React.useState([]);

  function setPeopleFromServer() {
    //console.log(characters)
    const charactersPromises = characters.map((item) =>
      api.getCharactersFromServer(item.replace(/[^0-9]/g, ""))
    );
    Promise.all(charactersPromises).then((values) => {
      setCharactersArray(values);
    });
  }

  //api запрос с героями из эпизода
  React.useEffect(() => {
    setPeopleFromServer();
  }, [clickedCardValue]);

  function handleHeroClick(card) {
    console.log(card)
  }


  const history = useHistory();
  return (
    <>
      <div className="container-season">
        <h2 className="container-season__title">{clickedCardValue.name}</h2>
        <button 
        type="button" 
        onClick={history.goBack}
        className="container-season__button"
        >
          goBack
        </button>
        <ul className="grid-hero">
          {charactersArray.length > 0 ? (
            charactersArray.map((cardItem) => (
              <CardHero key={cardItem.id} card={cardItem} onCardClick={handleHeroClick}/>
            ))
          ) : (
            <p>Spinner...</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default Episode;
