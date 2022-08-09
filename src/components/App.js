import React from 'react';

import { Route, Switch, Redirect, useHistory, Link } from 'react-router-dom';

import './../index.css';
import { api } from '../utils/Api';
import Header from './Header.js';
import Main from './Main';
import Episode from './Episode';
import Character from './Character';
import PopupHero from './PopupHero';

import { SeasonsContext } from './../context/SeasonsContext';

//import { getCharacter } from 'rickmortyapi'

const App = () => {
  //текущая карточка
  const [selectedCard, setselectedCard] = React.useState({});
  const [characters, setCharacters] = React.useState([]);
  function handleCardClick(card) {
    setselectedCard(card);
    history.push('/episode');
    setCharacters(card.characters);
  }

  const history = useHistory();

  return (
    <>
      <div className="page">
        <Header />

        <Switch>
          <Route exact path="/">
            <Main seasonCardValue={handleCardClick} />
          </Route>

          <Route path="/episode">
            <Episode clickedCardValue={selectedCard} characters={characters} />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default App;
