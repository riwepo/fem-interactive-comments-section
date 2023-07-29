import React, { useState } from "react";

import Comment from "./comment/Comment";
import NewCommentForm from "./NewCommentForm";

import classes from "./CommentAndReply.module.css";

function CommentAndReply({ comment, parentComment }) {
  const [isReplying, setIsReplying] = useState(false);
  const createReplyClickHandler = () => {
    setIsReplying((current) => !current);
  };
  const submitCommentHandler = () => {
    setIsReplying(false);
  };
  return (
    <div className={classes.container}>
      <Comment comment={comment} onCreateReplyClick={createReplyClickHandler} />
      {isReplying && (
        <NewCommentForm
          replyToCommentId={parentComment.id}
          replyToUsername={comment.user.username}
          onSubmit={submitCommentHandler}
        />
      )}
    </div>
  );
}

export default CommentAndReply;
