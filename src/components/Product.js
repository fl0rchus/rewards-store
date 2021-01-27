import React, { useState, useContext } from "react";
import { ModalRedeem } from "./modals/ModalRedeem";
import useModal from "../hooks/useModal";
import { userContext } from "../App";
import { Spinner } from "./Spinner";

export const Product = ({ data, loading }) => {
  const [message, setMessage] = useState("");
  const { isOpen, toggle } = useModal();
  const { userPoints } = useContext(userContext);
  const [id, setId] = useState("");
  const [producto, setProducto] = useState([]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="cards-container">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={data.img.hdUrl} alt={data.name} />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <h6 className="card-subtitle mb-2 font-weight-light">
            {data.category}
          </h6>
          <p className="card-text">
            {data.cost}{" "}
            <i className="fas fa-coins" style={{ color: "#ffa900" }}></i>
          </p>
          <button
            className="btn btn-card"
            type="button"
            onClick={() => {
              setId(data._id);
              setProducto(data);
              toggle();
            }}
            id="btn-redeem"
            disabled={data.cost > userPoints}
          >
            {data.cost >= userPoints
              ? `You need ${data.cost - userPoints} points`
              : "Redeem Now"}
          </button>
        </div>
        <ModalRedeem
          isOpen={isOpen}
          hide={toggle}
          message={message}
          id={id}
          producto={producto}
        />
      </div>
    </div>
  );
};
