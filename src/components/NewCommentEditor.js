import React, { useContext } from "react";

import Card from "./ui/Card";
import { CurrentUserContext } from "../context/current-user-context";

import { getAvatarPath } from "../utils";

import classes from "./NewCommentEditor.module.css";

function NewCommentEditor() {
  const currentUser = useContext(CurrentUserContext);
  return (
    <Card>
      <div className={classes.container}>
        <textarea className={classes.textarea} placeholder="Add a comment..." />
        <img
          className={classes.img}
          src={process.env.PUBLIC_URL + getAvatarPath(currentUser.username)}
          alt={`user ${currentUser.username} avatar`}
        />
        <button className={classes.button}>Send</button>
      </div>
    </Card>
  );
}

export default NewCommentEditor;
