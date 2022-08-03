import React from "react";

import { Route, Switch, Redirect, useHistory, Link } from "react-router-dom";
import Seasons from "./Seasons";

import avatarHeroPath from "./../images/morty_test.jpg";

const Character = () => {
    return (
      <>
        <div className="container-season">
            <div className="container-season__title-with-image">
            <img 
            src={avatarHeroPath}
            />
            <h2 className="container-season__title">Имя героя</h2>
            </div>
       
          <ul className="grid-hero">
            <Seasons />
          </ul>

            <h3>Location</h3>
        </div>
      </>
    );
  };
  
  export default Character;
  