import React from "react";
import ReactDOM from "react-dom";

import Backdrop from "./Backdrop";
import ConfirmDeleteModel from "./ConfirmDeleteModal";

function Modals({ onConfirm }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ConfirmDeleteModel onConfirm={onConfirm} />,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default Modals;
