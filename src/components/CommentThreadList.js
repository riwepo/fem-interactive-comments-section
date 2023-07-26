import React from "react";

import CommentThread from "./CommentThread";

import classes from "./CommentThreadList.module.css";

function CommentThreadList({ commentThreads }) {
  return (
    <ul className={classes.threadListContainer}>
      {commentThreads.map((commentThread) => {
        return <CommentThread commentThread={commentThread} />;
      })}
    </ul>
  );
}

export default CommentThreadList;
