import React, { useState, useContext } from "react";
import postRedeem from "../helpers/postRedeem";
import { ModalRedeem } from "./modals/ModalRedeem";
import useModal from "../hooks/useModal";
import { userContext } from "../App";

export const Product = ({ name, category, cost, img, _id }) => {
  const [message, setMessage] = useState("");
  const { isOpen, toggle } = useModal();
  const { userPoints, setUserPoints } = useContext(userContext);

  return (
    <div>
      <div class="card" style={{ width: "18rem" }}>
        <img class="card-img-top" src={img.hdUrl} alt={name} />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <h6 class="card-subtitle mb-2 font-weight-light">{category}</h6>
          <p class="card-text">
            {cost} <i class="fas fa-coins" style={{ color: "#ffa900" }}></i>
          </p>
          <button class="btn btn-card" type="button" onClick={toggle}>
            Redeem now
          </button>
        </div>
      </div>
      <ModalRedeem
        isOpen={isOpen}
        hide={toggle}
        message={message}
        idProduct={_id}
      />
    </div>
  );
};
