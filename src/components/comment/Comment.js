import React from "react";

import Card from "../ui/Card";
import CommentUserInfo from "./CommentUserInfo";
import CommentVote from "./CommentVote";

import classes from "./Comment.module.css";

function Comment({ comment }) {
  const votePlusClickHandler = () => {
    console.log("plus clicked");
  };
  const voteMinusClickHandler = () => {
    console.log("minus clicked");
  };
  return (
    <Card>
      <div className={classes.commentInfoContainer}>
        <CommentUserInfo user={comment.user} />
        <p>{comment.createdAt}</p>
      </div>
      <p>{comment.content}</p>
      <CommentVote
        count={comment.score}
        onPlusClick={votePlusClickHandler}
        onMinusClick={voteMinusClickHandler}
      />
    </Card>
  );
}

export default Comment;
