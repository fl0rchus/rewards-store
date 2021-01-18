import React from "react";
import postCoins from "../helpers/postCoins";

export default function MoreCoins({ message }) {
  return (
    <div className="btns-container">
      <button onClick={() => postCoins(1000)} className="btn btn-warning">
        1000
      </button>
      <button onClick={() => postCoins(5000)} className="btn btn-warning">
        5000
      </button>
      <button onClick={() => postCoins(7500)} className="btn btn-warning">
        7500
      </button>
      <p>{message}</p>
    </div>
  );
}
