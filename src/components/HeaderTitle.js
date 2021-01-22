import React from "react";

export const HeaderTitle = (props) => {
  return (
    <>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Rewards Store</h1>
          <p class="lead">{props.subtitle}</p>
        </div>
      </div>
    </>
  );
};
