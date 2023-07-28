import React from "react";

import Comment from "./comment/Comment";
import NewCommentForm from "./NewCommentForm";

import classes from "./Replies.module.css";

function Replies({ comments }) {
  return (
    <div className={classes.repliesContainer}>
      <div className={classes.verticalLine}></div>
      <ul className={classes.commentListContainer}>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              <Comment comment={comment} onReplyClick={null} />
              <NewCommentForm replyToId={comment.id} />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Replies;
