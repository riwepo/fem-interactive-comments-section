import React from "react";

import CommentAndReply from "./CommentAndReply";

import classes from "./Replies.module.css";

function Replies({ comments }) {
  return (
    <div className={classes.repliesContainer}>
      <div className={classes.verticalLine}></div>
      <ul className={classes.commentListContainer}>
        {comments.map((comment) => (
          <CommentAndReply key={comment.id} comment={comment} />
        ))}
      </ul>
    </div>
  );
}

export default Replies;
