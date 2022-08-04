import React from "react";
import { Route, Switch, Redirect, useHistory, Link } from "react-router-dom";
import { api } from "../utils/Api";
import CardHero from "./CardHero";
import PopupHero from "./PopupHero";
import PopupLocation from "./PopupLocation";

const Episode = ({ clickedCardValue, characters }) => {
  //массив персонажей
  const [charactersArray, setCharactersArray] = React.useState([]);

  function setPeopleFromServer() {
    //console.log(characters)
    const charactersPromises = characters.map((item) =>
      api.getCharactersFromServer(item.replace(/[^0-9]/g, ""))
    );
    Promise.all(charactersPromises).then((values) => {
      setCharactersArray(values);
    });
  }

  //api запрос с героями из эпизода
  React.useEffect(() => {
    setPeopleFromServer();
  }, [clickedCardValue]);

  //открываем попап hero
const [isHeroPopupOpen, setHeroPopupOpen] = React.useState(false)
  function openHeroPopup() {
    setHeroPopupOpen(true)
  }
  //закрываем попап hero, очищаем стейт текущей карточки
function handleCloseHeroPopup() {
  setHeroPopupOpen(false)
  setHeroSelectedCard({})
}
//открываем попап location
const [isLocationPopupOpen, setIsLocationPopupOpen] = React.useState(false)
function handleOpenLocationPopup() {
  setIsLocationPopupOpen(true)
}
function handleCloseLocationPopup() {
  setIsLocationPopupOpen(false)
}

//передаём value hero выбраной карточки в попап
  const [heroSelectedCard, setHeroSelectedCard] = React.useState({});
  const [locationsForFetch, setLocationsForFetch] = React.useState([]);

  function handleHeroCardClick(card) {
    openHeroPopup();
    setHeroSelectedCard(card);
    setLocationsForFetch([card.location.url])
  }

  const history = useHistory();

const [locationSelectedCard, setLocationSelectedCard] = React.useState({})
const [heroForFetch, setHeroForFetch] = React.useState([])
  function handleLocationCardClick(card) {
    console.log(card)
    setLocationSelectedCard(card)
    setHeroForFetch(card.residents)//сортируем и получаем массив
    setHeroPopupOpen(false)
    setHeroSelectedCard({})
    handleOpenLocationPopup()
}
  
  return (
    <>
      <div className="container-season">
        <h2 className="container-season__title">{clickedCardValue.name}</h2>
        <button
          type="button"
          onClick={history.goBack}
          className="container-season__button"
        >
          goBack
        </button>
        <ul className="grid-hero">
          {charactersArray.length > 0 ? (
            charactersArray.map((cardItem) => (
              <CardHero
                key={cardItem.id}
                card={cardItem}
                onCardClick={handleHeroCardClick}
              />
            ))
          ) : (
            <p>Spinner...</p>
          )}
        </ul>
      </div>

      <PopupHero 
      isOpen={isHeroPopupOpen} 
      clickedHeroCardValue={heroSelectedCard}
      locationsForFetch={locationsForFetch}
      onClose={handleCloseHeroPopup}
      handleLocationCardClick={handleLocationCardClick} />
    
      <PopupLocation
      isOpen={isLocationPopupOpen}
      locationSelectedCard={locationSelectedCard}
      heroForFetch={heroForFetch}
      onClose={handleCloseLocationPopup}
      />
    </>
  );
};

export default Episode;
