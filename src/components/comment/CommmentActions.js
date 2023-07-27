import React from "react";
import iconReply from "../../images/icon-reply.svg";
import iconDelete from "../../images/icon-delete.svg";
import iconEdit from "../../images/icon-edit.svg";

import classes from "./CommentActions.module.css";

function CommentActions({ className, isYou }) {
  return (
    <div className={`${className} ${classes.container}`}>
      {!isYou && (
        <button className={`${classes.button} ${classes.buttonReply}`}>
          <img src={iconReply} alt="reply icon" />
          <p>Reply</p>
        </button>
      )}
      {isYou && (
        <div className={classes.buttonContainer}>
          <button className={`${classes.button} ${classes.buttonDelete}`}>
            <img src={iconDelete} alt="delete icon" />
            <p>Delete</p>
          </button>
          <button className={`${classes.button} ${classes.buttonEdit}`}>
            <img src={iconEdit} alt="edit icon" />
            <p>Edit</p>
          </button>
        </div>
      )}
    </div>
  );
}

export default CommentActions;
