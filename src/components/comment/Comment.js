import React, { useState, useContext } from "react";

import Card from "../ui/Card";
import CommentUserInfo from "./CommentUserInfo";
import CommentVote from "./CommentVote";
import CommentActions from "./CommmentActions";
import Modals from "../modal/Modals";
import Button from "../ui/Button";

import { CurrentUserContext } from "../../context/current-user-context";
import { CommentsContext } from "../../context/comments-context";

import classes from "./Comment.module.css";

function Comment({ comment, onCreateReplyClick }) {
  const [isRequestingDelete, setIsRequestingDelete] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [enteredContent, setEnteredContent] = useState("");
  const [isEnteredContentValid, setIsEnteredContentValid] = useState(true);

  const currentUser = useContext(CurrentUserContext);
  const userIsCurrentUser = currentUser.username === comment.user.username;

  const commentsContext = useContext(CommentsContext);

  const confirmDeleteHandler = (confirm) => {
    if (confirm) {
      commentsContext.deleteCommment(comment.id);
    }
    setIsRequestingDelete(false);
  };
  const votePlusClickHandler = () => {
    commentsContext.updateCommentVotes(comment.id, currentUser, true);
  };
  const voteMinusClickHandler = () => {
    commentsContext.updateCommentVotes(comment.id, currentUser, false);
  };
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
    commentsContext.updateCommment(comment.id, enteredContent);
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
          <p className={classes.howOld}>{comment.howOld}</p>
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
            score={comment.score}
            isUpvoteEnabled={comment.isUpvoteEnabled}
            isDownvoteEnabled={comment.isDownvoteEnabled}
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
