import React from "react";

import { ReactComponent as IconReply } from "../../images/icon-reply.svg";
import { ReactComponent as IconDelete } from "../../images/icon-delete.svg";
import { ReactComponent as IconEdit } from "../../images/icon-edit.svg";

import classes from "./CommentActions.module.css";

function CommentActions({
  className,
  isYou,
  onCreateReplyClick,
  onRequestDeleteClick,
  onEditClick,
}) {
  return (
    <div className={`${className} ${classes.container}`}>
      {!isYou && (
        <button
          className={`${classes.button} ${classes.buttonReply}`}
          onClick={onCreateReplyClick}
        >
          <IconReply className={classes.iconReply} />
          <p>Reply</p>
        </button>
      )}
      {isYou && (
        <div className={classes.buttonContainer}>
          <button
            className={`${classes.button} ${classes.buttonDelete}`}
            onClick={onRequestDeleteClick}
          >
            <IconDelete className={classes.iconDelete} />
            <p>Delete</p>
          </button>
          <button
            className={`${classes.button} ${classes.buttonEdit}`}
            onClick={onEditClick}
          >
            <IconEdit className={classes.iconEdit} />
            <p>Edit</p>
          </button>
        </div>
      )}
    </div>
  );
}

export default CommentActions;
