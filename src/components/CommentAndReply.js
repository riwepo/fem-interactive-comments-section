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
  const createReplyClickHandler = () => {
    setIsReplying((current) => !current);
  };
  const submitCommentHandler = (content) => {
    commentsContext.addCommment(
      currentUserContext.username,
      comment.id,
      content
    );
    setIsReplying(false);
  };
  return (
    <div className={classes.container}>
      <Comment comment={comment} onCreateReplyClick={createReplyClickHandler} />
      {isReplying && (
        <NewCommentForm
          replyToCommentId={comment.id}
          onSubmit={submitCommentHandler}
        />
      )}
    </div>
  );
}

export default CommentAndReply;
