import React from "react";

import Card from "../ui/Card";
import CommentUserInfo from "./CommentUserInfo";

import classes from "./Comment.module.css";

function Comment({ comment }) {
  return (
    <Card>
      <div className={classes.commentInfoContainer}>
        <CommentUserInfo user={comment.user} />
        <p>{comment.createdAt}</p>
      </div>
      <p>{comment.content}</p>
    </Card>
  );
}

export default Comment;
