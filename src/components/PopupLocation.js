import React from "react";
import { Route, Switch, Redirect, useHistory, Link } from "react-router-dom";
import { api } from "../utils/Api";
import CardHero from "./CardHero";

const PopupLocation = ({ isOpen, onClose, locationSelectedCard, heroForFetch }) => {
  //api запрос на получение даты локаций персонажа
  const [heroArray, setHeroArray] = React.useState([]);

  function getHeroFromServer () {
    //приходит массив с эндпоинтом https://rickandmortyapi.com/api/character/(номер)

    const charactersArrayNumbers = heroForFetch.map((item) => item.replace(/[^0-9]/g, ""))
    
    api.getCharactersFromServer(charactersArrayNumbers)
    .then((values) => {
      setHeroArray(values);
    });
  }

  React.useEffect(()=> {
    getHeroFromServer() //блокирует CORS :(
  }, [isOpen])

  // //очищаем массив мест при закрытии
  // React.useEffect(() => {
  //   setLocationsArray({});
  // }, [onClose]);

  return (
    <div className={`popup ${isOpen ? "popup_on" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__close-icone"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__title-container">
          {locationSelectedCard.name}
        </h2>

        <div className="popup__content-container">
          <ul className="grid-hero">
            {heroArray.length > 0 ? (
              heroArray.map((cardItem) => (
                <CardHero
                  key={cardItem.id}
                  card={cardItem}
                  onCardClick={"handleHeroCardClick"}
                />
              ))
            ) : (
              <p>Spinner...</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopupLocation;
