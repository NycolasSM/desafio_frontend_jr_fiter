import React from "react";

import "./index.css";

import CardCollar from "../EmployeeCard/components/CardCollar";

const index = () => {
  return (
    <>
      <div className="employee__card__container--loading">
        <div className="employee__card__collar__mockup"></div>
        <div className="employee__card--loading">
          <CardCollar />
          <div className="employee__card__image--loading">.</div>
          <div className="employee__card__info--loading">
            <h3></h3>
            <h4></h4>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
