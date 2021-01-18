import React from "react";

export const Product = ({ name, category, cost, img }) => {
  return (
    <div>
      <div class="card" style={{ width: "18rem" }}>
        <img class="card-img-top" src={img.hdUrl} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <h6 class="card-subtitle mb-2 font-weight-light">{category}</h6>
          <p class="card-text">
            {cost} <i class="fas fa-coins" style={{ color: "#ffa900" }}></i>
          </p>
          <a href="#" class="btn btn-card">
            Redeem now
          </a>
        </div>
      </div>
    </div>
  );
};
