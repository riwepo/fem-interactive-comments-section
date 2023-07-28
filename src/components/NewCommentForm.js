import React, { useState, useContext } from "react";

import Avatar from "./ui/Avatar";
import Card from "./ui/Card";
import Button from "./ui/Button";

import { CurrentUserContext } from "../context/current-user-context";

import classes from "./NewCommentForm.module.css";

function NewCommentForm({ replyToId }) {
  const currentUser = useContext(CurrentUserContext);
  const [enteredText, setEnteredText] = useState("");
  const buttonText = replyToId ? "REPLY" : "SEND";
  const submitHandler = (event) => {
    event.preventDefault();
  };
  const textChangeHandler = (event) => {
    const myText = event.target.value;
    setEnteredText(myText);
  };
  return (
    <Card className={classes.card}>
      <form className={classes.container} onSubmit={submitHandler}>
        <textarea
          className={classes.textarea}
          placeholder="Add a comment..."
          onChange={textChangeHandler}
        />
        <Avatar className={classes.avatar} username={currentUser.username} />
        <Button className={classes.button} disabled={enteredText === ""}>
          {buttonText}
        </Button>
      </form>
    </Card>
  );
}

export default NewCommentForm;
