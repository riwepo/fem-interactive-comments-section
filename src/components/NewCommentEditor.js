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
        <p>new comment editor</p>
        <img
          className={classes.image}
          src={process.env.PUBLIC_URL + getAvatarPath(currentUser.username)}
          alt={`user ${currentUser.username} avatar`}
        />
        <button className={classes.image}>Send</button>
      </div>
    </Card>
  );
}

export default NewCommentEditor;
