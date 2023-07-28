import React, { useState } from "react";

import Comment from "./comment/Comment";
import NewCommentForm from "./NewCommentForm";

import classes from "./CommentAndReply.module.css";

function CommentAndReply({ comment }) {
  const [isReplying, setIsReplying] = useState(false);
  const replyClickHandler = () => {
    console.log("reply clicked");
    setIsReplying((current) => !current);
  };
  return (
    <div className={classes.container}>
      <Comment comment={comment} onReplyClick={replyClickHandler} />
      {isReplying && <NewCommentForm replyToId={comment.id} />}
    </div>
  );
}

export default CommentAndReply;
