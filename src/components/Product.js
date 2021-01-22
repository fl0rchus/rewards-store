import React, { useState, useContext } from "react";
import postRedeem from "../helpers/postRedeem";
import { ModalRedeem } from "./modals/ModalRedeem";
import useModal from "../hooks/useModal";
import { userContext } from "../App";
import { Spinner } from "./Spinner";

export const Product = ({ data, loading, id }) => {
  const [message, setMessage] = useState("");
  const { isOpen, toggle } = useModal();
  const { userPoints, setUserPoints } = useContext(userContext);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="cards-container">
      {data.map((product) => {
        return (
          <div class="card" style={{ width: "18rem" }}>
            <img
              class="card-img-top"
              src={product.img.hdUrl}
              alt={product.name}
            />
            <div class="card-body">
              <h5 class="card-title">{product.name}</h5>
              <h6 class="card-subtitle mb-2 font-weight-light">
                {product.category}
              </h6>
              <p class="card-text">
                {product.cost}{" "}
                <i class="fas fa-coins" style={{ color: "#ffa900" }}></i>
              </p>
              <button class="btn btn-card" type="button" onClick={toggle}>
                Redeem now
              </button>
            </div>
          </div>
        );
      })}
      <ModalRedeem isOpen={isOpen} hide={toggle} message={message} />
    </div>
  );
};
