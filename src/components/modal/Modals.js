import React from "react";
import ReactDOM from "react-dom";

import Backdrop from "./Backdrop";
import SuccessModal from "./SuccessModal";

function Modals({ email, onDismiss }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <SuccessModal email={email} onDismiss={onDismiss} />,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default Modals;
