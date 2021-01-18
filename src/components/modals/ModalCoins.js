import React, { useState } from "react";
import MoreCoins from "../MoreCoins";
import { createPortal } from "react-dom";

const modalElement = document.getElementById("modal-addCoins");

function ModalCoins({ isOpen, hide }) {
  const [updated, setUpdated] = useState(false);
  return isOpen
    ? createPortal(
        <>
          <div className="modal_container">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add more coins</h5>
                  <button type="button" className="close" onClick={hide}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <MoreCoins onClick={() => setUpdated(!updated)} />
                  {updated ? "Points Updated" : null}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={hide}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>,
        modalElement
      )
    : null;
}
export default ModalCoins;
