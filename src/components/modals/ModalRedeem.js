import React, { useState, useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import postRedeem from "../../helpers/postRedeem";
import { Spinner } from "../Spinner";
import { userContext } from "../../App";
import getUser from "../../helpers/getUser";

const element = document.getElementById("modal-addCoins");

export const ModalRedeem = ({ isOpen, hide }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  return isOpen
    ? createPortal(
        <>
          <div className="modal_container modal-redeem">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Redeem</h5>
                  <button type="button" className="close" onClick={hide}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Are you sure?
                  <div className="btns" id="btns">
                    <button
                      className="btn btn-warning mt-3"
                      type="button"
                      onClick={() => {
                        try {
                          postRedeem()
                            .then(
                              (data) => setMessage(data.message),
                              setLoading(true)
                            )
                            .then(() => setLoading(false));
                        } catch (error) {
                          setMessage(error);
                        }
                      }}
                    >
                      Yes!
                    </button>
                    <button
                      className="btn btn-warning mt-3"
                      type="button"
                      onClick={hide}
                    >
                      Mmm no
                    </button>
                  </div>
                  {loading == true ? (
                    <Spinner />
                  ) : (
                    <p
                      className={
                        message ? "text-success mt-3" : "text-danger mt-3"
                      }
                    >
                      {message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>,
        element
      )
    : null;
};
