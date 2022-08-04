import React from "react";
import Seasons from "./Seasons";

const Main = ({ seasonCardValue }) => {
  return (
    <>
      {/* <form
        className="search form form_type_search"
        id="sex"
        onSubmit={handleSubmitForm}
      >
        <h3 className="form__title">specify gender</h3>
        <div className="form__wrapper">
          <div className="form__select-container">
            <select
              id="sex"
              className="form__select"
              value={sexSelector}
              onChange={handleSelectorChange}
            >
              <option value="all">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <button className="form__btn">Search</button>
        </div>
      </form> */}
      <div className="container-season">
        <>
          <h2 className="container-season__title">All seasons</h2>
          <Seasons seasonCardValue={seasonCardValue} />
        </>
      </div>
    </>
  );
};

export default Main;
