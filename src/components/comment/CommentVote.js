import React from "react";

import { ReactComponent as IconPlus } from "../../images/icon-plus.svg";
import { ReactComponent as IconMinus } from "../../images/icon-minus.svg";

import classes from "./CommentVote.module.css";

function CommentVote({ className, count, onPlusClick, onMinusClick }) {
  return (
    <div className={`${className} ${classes.container}`}>
      <button className={classes.button} onClick={onPlusClick}>
        <IconPlus className={classes.iconPlus} />
      </button>
      <p className={classes.count}>{count}</p>
      <button className={classes.button} onClick={onMinusClick}>
        <IconMinus className={classes.iconMinus} />
      </button>
    </div>
  );
}

export default CommentVote;
