import React from "react";
import { Route, Switch, Redirect, useHistory, Link } from "react-router-dom";

import CardSeason from "./CardSeason";


const Seasons = () => {

    
    return (
      <>
        <ul className="season-grid">

            <CardSeason/>

        </ul>
      </>
    );
  };
  
  export default Seasons;
  