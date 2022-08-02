import React from "react";

import { Route, Switch, Redirect, useHistory, Link } from "react-router-dom";

const CardHero = () => {
  return (
    <>
      <li style={{ listStyleType: "none" }}>
        <div className="card-hero" onClick={"handleClick"}></div>
      </li>
      <li style={{ listStyleType: "none" }}>
        <div className="card-hero" onClick={"handleClick"}></div>
      </li>
      <li style={{ listStyleType: "none" }}>
        <div className="card-hero" onClick={"handleClick"}></div>
      </li>      
    </>
  );
};

export default CardHero;
