import React, { useState, useContext } from "react";

import Card from "../ui/Card";
import CommentUserInfo from "./CommentUserInfo";
import CommentVote from "./CommentVote";
import CommentActions from "./CommmentActions";
import Modals from "../modal/Modals";
import { CurrentUserContext } from "../../context/current-user-context";

import classes from "./Comment.module.css";

function Comment({ comment, onCreateReplyClick }) {
  const [isRequestingDelete, setIsRequestingDelete] = useState(false);
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
  const editClickHandler = () => {};

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
          <p className={classes.content}>
            {comment.replyToUsername && (
              <span
                className={classes.replyName}
              >{`@${comment.replyToUsername} `}</span>
            )}
            {comment.content}
          </p>
          <CommentVote
            className={classes.vote}
            count={comment.score}
            onPlusClick={votePlusClickHandler}
            onMinusClick={voteMinusClickHandler}
          />
          <CommentActions
            className={classes.actions}
            isYou={userIsCurrentUser}
            onCreateReplyClick={onCreateReplyClick}
            onRequestDeleteClick={requestDeleteClickHandler}
            onEditClick={editClickHandler}
          />
        </div>
      </Card>
    </>
  );
}

export default Comment;
