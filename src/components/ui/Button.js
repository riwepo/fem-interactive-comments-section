import React from "react";

import classes from "./Button.module.css";

function Button({ className, disabled, children }) {
  return (
    <button className={`${className} ${classes.button}`} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
