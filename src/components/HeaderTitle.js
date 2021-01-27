import React from "react";

export const HeaderTitle = (props) => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Rewards Store</h1>
          <p className="lead">{props.subtitle}</p>
        </div>
      </div>
    </>
  );
};
