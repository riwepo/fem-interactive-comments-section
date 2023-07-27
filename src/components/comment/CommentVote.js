import React from "react";

import iconPlus from "../../images/icon-plus.svg";
import iconMinus from "../../images/icon-minus.svg";

import classes from "./CommentVote.module.css";

function CommentVote({ className, count, onPlusClick, onMinusClick }) {
  return (
    <div className={`${className} ${classes.container}`}>
      <button className={classes.button} onClick={onPlusClick}>
        <img className={classes.buttonImg} src={iconPlus} alt="plus icon" />
      </button>
      <p className={classes.count}>{count}</p>
      <button className={classes.button} onClick={onMinusClick}>
        <img className={classes.buttonImg} src={iconMinus} alt="minus icon" />
      </button>
    </div>
  );
}

export default CommentVote;
