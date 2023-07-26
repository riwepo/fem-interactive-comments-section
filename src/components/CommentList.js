import React from "react";

import Comment from "./Comment";

import classes from "./CommentList.module.css";

function CommentList({ comments }) {
  return (
    <ul className={classes.commentListContainer}>
      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </ul>
  );
}

export default CommentList;
