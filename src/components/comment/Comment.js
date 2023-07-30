import React, { useState, useContext } from "react";

import Card from "../ui/Card";
import CommentUserInfo from "./CommentUserInfo";
import CommentVote from "./CommentVote";
import CommentActions from "./CommmentActions";
import Modals from "../modal/Modals";
import Button from "../ui/Button";
import { CurrentUserContext } from "../../context/current-user-context";

import classes from "./Comment.module.css";

function Comment({ comment, onCreateReplyClick }) {
  const [isRequestingDelete, setIsRequestingDelete] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [enteredContent, setEnteredContent] = useState("");
  const [isEnteredContentValid, setIsEnteredContentValid] = useState(true);

  const currentUser = useContext(CurrentUserContext);
  const userIsCurrentUser = currentUser.username === comment.user.username;
  const confirmDeleteHandler = (confirm) => {
    if (confirm) {
      // delete the comment
    }
    setIsRequestingDelete(false);
  };
  const votePlusClickHandler = () => {};
  const voteMinusClickHandler = () => {};
  const requestDeleteClickHandler = () => {
    setIsRequestingDelete(true);
  };
  const editClickHandler = () => {
    setEnteredContent(comment.content);
    setIsEditing((current) => !current);
  };

  const contentChangeHandler = (event) => {
    const localContent = event.target.value;
    setEnteredContent(localContent);
    setIsEnteredContentValid(localContent !== "");
  };

  const submitContentHandler = (event) => {
    event.preventDefault();
    // send new content to API
    setIsEditing(false);
  };

  return (
    <>
      {isRequestingDelete && <Modals onConfirm={confirmDeleteHandler} />}
      <Card className={classes.card}>
        <div className={classes.commentContainer}>
          <CommentUserInfo
            className={classes.userInfo}
            isYou={userIsCurrentUser}
            user={comment.user}
          />
          <p className={classes.createdAt}>{comment.createdAt}</p>
          {!isEditing && (
            <p className={classes.content}>
              {comment.replyToUsername && (
                <span
                  className={classes.replyName}
                >{`@${comment.replyToUsername} `}</span>
              )}
              {comment.content}
            </p>
          )}
          {isEditing && (
            <form
              className={classes.editingForm}
              onSubmit={submitContentHandler}
            >
              <textarea
                className={classes.textarea}
                value={enteredContent}
                onChange={contentChangeHandler}
              />
              <Button
                className={classes.button}
                disabled={!isEnteredContentValid}
                onClick={null}
              >
                UPDATE
              </Button>
            </form>
          )}

          <CommentVote
            className={classes.vote}
            count={comment.score}
            onPlusClick={votePlusClickHandler}
            onMinusClick={voteMinusClickHandler}
          />
          {!isEditing && (
            <CommentActions
              className={classes.actions}
              isYou={userIsCurrentUser}
              onCreateReplyClick={onCreateReplyClick}
              onRequestDeleteClick={requestDeleteClickHandler}
              onEditClick={editClickHandler}
            />
          )}
        </div>
      </Card>
    </>
  );
}

export default Comment;
