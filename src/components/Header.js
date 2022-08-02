import React from "react";
import { Route, Switch, Redirect, useHistory, Link } from "react-router-dom";
import logoPath from "./../images/Rick_and_Morty.png";



const Header = (props) => {
    
  return (
    
      <header className="header">
        <img
          className="header__group-logo"
          src={logoPath}
          alt="логотип сайта"
        />
        <nav className="header__menu"></nav>
      </header>
    
  );
};

export default Header;
