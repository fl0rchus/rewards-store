import React from "react";

export const HeaderTitle = (props) => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid ">
        <div className="container">
          <h1 className="display-4 animate__animated animate__fadeIn">
            Rewards Store
          </h1>
          <p className="lead animate__animated animate__fadeIn">
            {props.subtitle}
          </p>
        </div>
      </div>
    </>
  );
};
