import React, { useState, useContext } from "react";

import Avatar from "./ui/Avatar";
import Card from "./ui/Card";
import Button from "./ui/Button";

import { CurrentUserContext } from "../context/current-user-context";
import { CommentsContext } from "../context/comments-context";

import classes from "./NewCommentForm.module.css";

function NewCommentForm({ replyToCommentId, onSubmit }) {
  const currentUserContext = useContext(CurrentUserContext);
  const commentsContext = useContext(CommentsContext);

  const [enteredText, setEnteredText] = useState("");
  const [isValid, setIsValid] = useState(false);

  const buttonText = replyToCommentId ? "REPLY" : "SEND";

  const submitHandler = (event) => {
    event.preventDefault();
    if (!isValid) return;
    commentsContext.addCommment(
      currentUserContext.username,
      replyToCommentId,
      enteredText
    );
    onSubmit();
    setEnteredText("");
    setIsValid(false);
  };

  const textChangeHandler = (event) => {
    const myText = event.target.value;
    setEnteredText(myText);
    setIsValid(myText && myText !== "");
  };

  return (
    <Card className={classes.card}>
      <form className={classes.container} onSubmit={submitHandler}>
        <textarea
          className={classes.textarea}
          placeholder="Add a comment..."
          onChange={textChangeHandler}
          value={enteredText}
        />
        <Avatar
          className={classes.avatar}
          username={currentUserContext.username}
        />
        <Button className={classes.button} disabled={!isValid}>
          {buttonText}
        </Button>
      </form>
    </Card>
  );
}

export default NewCommentForm;
