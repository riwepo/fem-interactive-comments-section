import React, { useState, useContext } from "react";

import Comment from "./comment/Comment";
import NewCommentForm from "./NewCommentForm";

import { CommentsContext } from "../context/comments-context";
import { CurrentUserContext } from "../context/current-user-context";

import classes from "./CommentAndReply.module.css";

function CommentAndReply({ comment }) {
  const [isReplying, setIsReplying] = useState(false);
  const commentsContext = useContext(CommentsContext);
  const currentUserContext = useContext(CurrentUserContext);
  const replyClickHandler = () => {
    setIsReplying((current) => !current);
  };
  const submitCommentHandler = (content) => {
    commentsContext.addCommment(
      currentUserContext.username,
      comment.user.username,
      content
    );
  };
  return (
    <div className={classes.container}>
      <Comment comment={comment} onReplyClick={replyClickHandler} />
      {isReplying && (
        <NewCommentForm
          replyToId={comment.id}
          onSubmit={submitCommentHandler}
        />
      )}
    </div>
  );
}

export default CommentAndReply;
