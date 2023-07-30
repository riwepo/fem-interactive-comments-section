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
    setIsEditing((current) => !current);
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
            <div className={classes.editingContainer}>
              <textarea className={classes.textarea}>
                {comment.content}
              </textarea>
              <Button className={classes.button} disabled={true} onClick={null}>
                UPDATE
              </Button>
            </div>
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
