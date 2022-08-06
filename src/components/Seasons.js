import React from "react";
import { Route, Switch, Redirect, useHistory, Link } from "react-router-dom";
import { api } from "../utils/Api";
import CardSeason from "./CardSeason";
import { SeasonsContext } from "../context/SeasonsContext";

const Seasons = ({ seasonCardValue }) => {
  
  // принимаемый массив сезонов
  const [seasons, setSeasons] = React.useState([]);
  //состояние текущей и всех страниц
  const [currentPage, setCurrentPage] = React.useState(1)
  const [totalCount, setTotalCount] = React.useState(0)
  //статус запроса
  const [fetching, setFetching] = React.useState(true)
  //стейт ошибки
  const [isError, setIsError] = React.useState(false)
  
React.useEffect(()=> {
  if (fetching) {
    console.log(fetching)
    api.getAllEpisodesValue(currentPage)
  .then(data => {
    setSeasons([...seasons, ...data.results])
    setCurrentPage(prevState => prevState +1)
    setTotalCount(data.info.count)
  })
  .catch((error) => 
  setIsError(true))
  .finally(()=> setFetching(false))
  }
}, [fetching])
  
React.useEffect(()=> {
  document.addEventListener('scroll', scrollHandler);

  return function () {
    document.removeEventListener('scroll', scrollHandler)
  }
}, [totalCount, seasons])

  const scrollHandler = (e) => {
    //вычисляем размер окна при скроле для запуска fetch
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) 
    < 100 && seasons.length < totalCount) {
      
      setFetching(true);
      
    }
  }

    return (
      <>
        <ul className="grid-season">
        { seasons ? (
          seasons.map((cardItem) => 
          <CardSeason
            key={cardItem.id}
            card={cardItem}
            onCardClick={seasonCardValue}/>
          )
        ) : (<p>Spinner....</p>)
            }
        </ul>
      </>
    );
  };
  
  export default Seasons;
  