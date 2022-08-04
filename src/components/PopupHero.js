import React from "react";

import { Route, Switch, Redirect, useHistory, Link } from "react-router-dom";
import CardLocation from "./CardLocation";
import { api } from "../utils/Api";

const PopupHero = ({ isOpen, onClose, clickedHeroCardValue, locationsForFetch, handleLocationCardClick }) => {

//api запрос на получение даты локаций персонажа
const [locationsArray, setLocationsArray] = React.useState([])

function getLocationsFromServer () {
  
  const locationPromises = locationsForFetch.map((item) =>
    api.getLocationsFromServer(item.replace(/[^0-9]/g, ""))
  );
  Promise.all(locationPromises).then((values) => {
    setLocationsArray(values);
  });
}

React.useEffect(()=> {
  getLocationsFromServer()
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
        <h2 className="popup__title-container">{clickedHeroCardValue.name}</h2>

        <div className="popup__content-container">
          <div className="popup__info-container">
            <img className="card-hero__image" src={clickedHeroCardValue.image}></img>
            <ul className="popup__info-list">
              
              <li className="card__info-list-item">
                <b>Gender:</b>&nbsp;{clickedHeroCardValue.gender}
              </li>
              <li className="card__info-list-item">
                <b>Species:</b>&nbsp;{clickedHeroCardValue.species}
              </li>
              <li className="card__info-list-item">
                <b>Status:</b>&nbsp;{clickedHeroCardValue.status}
              </li>
              
            </ul>
          </div>
          <div className="location-info">
            <h3 className="location-info__title">Locations</h3>
            <div className="location-info__lists">
              <ul className="grid-location">
                
                
                {locationsArray.length > 0 ? (
                    locationsArray.map((cardItem, index) => (
                      <CardLocation key={index} card={cardItem} onCardClick={handleLocationCardClick}/>
                    ))
                  ) : (
                    "<Spinner />"
                  )} 
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupHero;
