import React from "react";

import Card from "../ui/Card";
import CommentUserInfo from "./CommentUserInfo";
import CommentVote from "./CommentVote";
import CommentActions from "./CommmentActions";

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
      <div className={classes.commentContainer}>
        <CommentUserInfo className={classes.userInfo} user={comment.user} />
        <p className={classes.createdAt}>{comment.createdAt}</p>
        <p className={classes.content}>{comment.content}</p>
        <CommentVote
          className={classes.vote}
          count={comment.score}
          onPlusClick={votePlusClickHandler}
          onMinusClick={voteMinusClickHandler}
        />
        <CommentActions className={classes.actions} />
      </div>
    </Card>
  );
}

export default Comment;
