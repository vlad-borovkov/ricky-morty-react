import React from 'react';

import { Route, Switch, Redirect, useHistory, Link } from 'react-router-dom';
import CardLocation from './CardLocation';
import { api } from '../utils/Api';

const PopupHero = ({
  isOpen,
  onClose,
  clickedHeroCardValue,
  locationsForFetch,
  handleLocationCardClick,
}) => {
  //api запрос на получение даты локаций персонажа
  const [locationsArray, setLocationsArray] = React.useState({});

  function getLocationsFromServer() {
    api
      .getLocationsFromServer(
        locationsForFetch.toString().replace(/[^0-9]/g, '')
      )
      .then((values) => {
        setLocationsArray(values);
      });
  }

  React.useEffect(() => {
    getLocationsFromServer();
  }, [isOpen]);

  // //очищаем массив мест при закрытии
  // React.useEffect(() => {
  //   setLocationsArray({});
  // }, [onClose]);

  return (
    <div className={`popup ${isOpen ? 'popup_on' : ''}`}>
      <div className="popup__container">
        <button
          className="popup__close-icone"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__title-container">{clickedHeroCardValue.name}</h2>

        <div className="popup__content-container">
          <div className="popup__info-container">
            <div className="popup__info-container_wrapper">
              <img
                className="popup__image"
                src={clickedHeroCardValue.image}
              ></img>
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
              <div className="location-info">
                <h3 className="location-info__title">Current location</h3>
                <ul className="location-info__lists">
                  {locationsArray.hasOwnProperty('id') ? (
                    <>
                      <li className="location-info__item">
                        <b>Name:</b>&nbsp;{locationsArray.name}
                      </li>
                      <li className="location-info__item">
                        <b>Type:</b>&nbsp;{locationsArray.type}
                      </li>
                      <li className="location-info__item">
                        <b>Residents</b>
                        {locationsArray.residents.length}
                      </li>
                      <li className="location-info__item">
                        <b>Dimension:</b>
                        {locationsArray.dimension}
                      </li>
                    </>
                  ) : (
                    <p>Spinner...</p>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupHero;
