import React from "react";
import Seasons from "./Seasons";

const Main = ({ seasonCardValue }) => {


  return (
    <>
      <div className="container-season">
        <>
          <h2 className="container-season__title">All seasons</h2>
          <Seasons
          seasonCardValue={seasonCardValue} />
        </>
      </div>
    </>
  );
};

export default Main;
