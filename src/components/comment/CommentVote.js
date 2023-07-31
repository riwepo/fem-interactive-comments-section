import React from "react";

import { ReactComponent as IconPlus } from "../../images/icon-plus.svg";
import { ReactComponent as IconMinus } from "../../images/icon-minus.svg";

import classes from "./CommentVote.module.css";

function CommentVote({
  className,
  score,
  isUpvoteEnabled,
  isDownvoteEnabled,
  onPlusClick,
  onMinusClick,
}) {
  console.log("CommentVote", isUpvoteEnabled, isDownvoteEnabled);
  return (
    <div className={`${className} ${classes.container}`}>
      <button
        className={classes.button}
        onClick={onPlusClick}
        disabled={!isUpvoteEnabled}
      >
        {isUpvoteEnabled && <IconPlus className={classes.icon} />}
        {!isUpvoteEnabled && (
          <IconPlus className={`${classes.icon} ${classes.iconDisabled}`} />
        )}
      </button>
      <p className={classes.score}>{score}</p>
      <button
        className={classes.button}
        onClick={onMinusClick}
        disabled={!isDownvoteEnabled}
      >
        {isDownvoteEnabled && <IconMinus className={classes.icon} />}
        {!isDownvoteEnabled && (
          <IconMinus className={`${classes.icon} ${classes.iconDisabled}`} />
        )}
      </button>
    </div>
  );
}

export default CommentVote;
