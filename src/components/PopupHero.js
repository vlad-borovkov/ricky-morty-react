import React from "react";

import { Route, Switch, Redirect, useHistory, Link } from "react-router-dom";
import CardLocation from "./CardLocation";

const PopupHero = ({isOpen, onClose}) => {


//инфа о карточке завозиться через глобальный контекст

    return (
        <div className={`popup ${isOpen ? "popup_on" : ""}`}>
        <div className="popup__container">
          <button
            className="popup__close-icone"
            type="button"
            onClick={onClose}
          ></button>
          <h2 className="popup__title-container">Hero name</h2>
  
          <div className="popup__content-container">
            <div className="popup__info-container">
                <image>
                </image>
              <ul className="popup__info-list">//инфа про персонажа
                <li className="card__info-list-item">
                  <b>Rotation period:</b>&nbsp;{''}
                </li>
                
              </ul>
            </div>
            <div className="location-info">
              <h3 className="location-info__title">Locations</h3>
              <div className="location-info__lists">
                <ul className="grid-location">
                <CardLocation key={"index"} card={"cardItem"} />
                  {/* {residentsArray.length > 0 ? (
                    residentsArray.map((cardItem, index) => (
                      
                    ))
                  ) : (
                    <Spinner />
                  )} */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
};

export default PopupHero;