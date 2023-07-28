import React, { useContext } from "react";

import Avatar from "./ui/Avatar";
import Card from "./ui/Card";
import Button from "./ui/Button";

import { CurrentUserContext } from "../context/current-user-context";

import classes from "./NewCommentEditor.module.css";

function NewCommentEditor({ replyToId }) {
  const currentUser = useContext(CurrentUserContext);
  const buttonText = replyToId ? "REPLY" : "SEND";
  return (
    <Card className={classes.card}>
      <div className={classes.container}>
        <textarea className={classes.textarea} placeholder="Add a comment..." />
        <Avatar className={classes.avatar} username={currentUser.username} />
        <Button className={classes.button}>{buttonText}</Button>
      </div>
    </Card>
  );
}

export default NewCommentEditor;
