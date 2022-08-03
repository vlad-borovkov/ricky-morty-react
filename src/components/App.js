import React from "react";

import { Route, Switch, Redirect, useHistory, Link } from "react-router-dom";

import "./../index.css";
import { api } from "../utils/Api";
import Header from "./Header.js";
import Main from "./Main";
import Episode from "./Episode";
import Character from "./Character";

import { SeasonsContext } from "./../context/SeasonsContext";

//import { getCharacter } from 'rickmortyapi'

const App = () => {
  //получаем глобальный контекст при рендеринге приложения
  const [seasons, setSeasons] = React.useState({});
  React.useEffect(() => {
    api
      .getEpisodesValue() //как реализовать получение всех серий через ключ nextpage?
      .then((data) => setSeasons(data));
  }, []);

  //текущая карточка 
  const [selectedCard, setselectedCard] = React.useState({})
  const [characters, setCharacters] = React.useState([])
  
  function handleCardClick(card) {
    setselectedCard(card)
    history.push('/episode')
    setCharacters(card.characters)
    
  }
  


const history = useHistory()

  return (
    <>
      <Header />
      <div className="page">
        <SeasonsContext.Provider value={seasons}>
          <Switch>
            <Route exact path="/">
              <Main
              seasonCardValue={handleCardClick} />
            </Route>

            <Route path="/episode">
              <Episode
              clickedCardValue={selectedCard}
              characters={characters} />
            </Route>

            <Route path="/character">
              <Character />
            </Route>
          </Switch>
        </SeasonsContext.Provider>
      </div>
    </>
  );
};

export default App;
