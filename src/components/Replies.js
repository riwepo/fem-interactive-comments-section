import React from "react";

import Comment from "./comment/Comment";
import NewCommentEditor from "./NewCommentEditor";

import classes from "./Replies.module.css";

function Replies({ comments }) {
  return (
    <div className={classes.repliesContainer}>
      <div className={classes.verticalLine}></div>
      <ul className={classes.commentListContainer}>
        {comments.map((comment) => {
          return (
            <>
              <Comment key={comment.id} comment={comment} />
              <NewCommentEditor />
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Replies;
