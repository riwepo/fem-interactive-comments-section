import React from "react";

import classes from "./Button.module.css";

function Button({ className, disabled, children, onClick }) {
  return (
    <button
      className={`${className} ${classes.button}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
