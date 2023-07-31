import React, { useContext } from "react";

import CommentThread from "./CommentThread";

import { CurrentUserContext } from "../context/current-user-context";
import { CommentsContext } from "../context/comments-context";

import classes from "./CommentThreadList.module.css";

function CommentThreadList() {
  const currentUserContext = useContext(CurrentUserContext);
  const commentsContext = useContext(CommentsContext);
  const commentThreads = commentsContext.getCommentThreads(
    currentUserContext.username
  );
  return (
    <ul className={classes.threadListContainer}>
      {commentThreads.map((commentThread) => {
        return (
          <CommentThread key={commentThread.id} commentThread={commentThread} />
        );
      })}
    </ul>
  );
}

export default CommentThreadList;
