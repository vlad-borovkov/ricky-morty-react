import React from "react";
import Seasons from "./Seasons";

const Main = () => {
  return (
    <>
      <div className="container-season">
        <>
        <h2 className="container-season__title">Season 1</h2>
        <Seasons/>
        </>
        
      </div>
      <div className="container-season">
      <>
        <h2 className="container-season__title">Season 2</h2>
        <Seasons/>
        </>
      </div>
      <div className="container-season">
        <h2 className="container-season__title">Season 3</h2>
      </div>
      <div className="container-season">
        <h2 className="container-season__title">Season 4</h2>
      </div>
      <div className="container-season">
        <h2 className="container-season__title">Season 5</h2>
      </div>
      <div className="container-season">
        <h2 className="container-season__title">Season 6</h2>
      </div>
    </>
  );
};

export default Main;
