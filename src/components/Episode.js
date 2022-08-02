import React from "react";
import { Route, Switch, Redirect, useHistory, Link } from "react-router-dom";

import CardHero from "./CardHero";


const Episode = () => {

    
    return (
      <>
        <ul className="hero-grid">

            <CardHero/>

        </ul>
      </>
    );
  };
  
  export default Episode;
  