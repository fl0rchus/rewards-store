import React, { useContext, useState } from "react";
import { userContext } from "../App";
import postCoins from "../helpers/postCoins";
import { Spinner } from "../components/Spinner";

export default function MoreCoins() {
  const [message, setMessage] = useState("");
  const { setUserPoints } = useContext(userContext);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="btns-container">
        <button
          onClick={() =>
            postCoins(1000)
              .then(
                (data) => (
                  setMessage(data.message),
                  setUserPoints(data["New Points"]),
                  setLoading(true)
                )
              )
              .then(() => setLoading(false))
          }
          className="btn btn-warning"
        >
          1000
        </button>
        <button
          onClick={() =>
            postCoins(1000)
              .then(
                (data) => (
                  setMessage(data.message),
                  setUserPoints(data["New Points"]),
                  setLoading(true)
                )
              )
              .then(() => setLoading(false))
          }
          className="btn btn-warning"
        >
          5000
        </button>
        <button
          onClick={() =>
            postCoins(1000)
              .then(
                (data) => (
                  setMessage(data.message),
                  setUserPoints(data["New Points"]),
                  setLoading(true)
                )
              )
              .then(() => setLoading(false))
          }
          className="btn btn-warning"
        >
          7500
        </button>
      </div>
      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginTop: 15,
        }}
      >
        {loading == true ? (
          <Spinner />
        ) : (
          <p className="text-success">{message}</p>
        )}
      </p>
    </>
  );
}
