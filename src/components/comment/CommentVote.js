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
  return (
    <div className={`${className} ${classes.container}`}>
      <button
        className={classes.button}
        onClick={onPlusClick}
        disabled={!isUpvoteEnabled}
        title="upvote"
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
        title="downvote"
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
