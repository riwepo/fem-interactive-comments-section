import React from "react";

import classes from "./CommentActions.module.css";

function CommentActions({ className }) {
  return <p className={`${className} ${classes.container}`}>comment actions</p>;
}

export default CommentActions;
