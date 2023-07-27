import React, { useContext } from "react";

import Card from "../ui/Card";
import CommentUserInfo from "./CommentUserInfo";
import CommentVote from "./CommentVote";
import CommentActions from "./CommmentActions";
import { CurrentUserContext } from "../../context/current-user-context";

import classes from "./Comment.module.css";

function Comment({ comment }) {
  const currentUser = useContext(CurrentUserContext);
  const userIsCurrentUser = currentUser.username === comment.user.username;
  const votePlusClickHandler = () => {
    console.log("plus clicked");
  };
  const voteMinusClickHandler = () => {
    console.log("minus clicked");
  };
  return (
    <Card>
      <div className={classes.commentContainer}>
        <CommentUserInfo
          className={classes.userInfo}
          isYou={userIsCurrentUser}
          user={comment.user}
        />
        <p className={classes.createdAt}>{comment.createdAt}</p>
        <p className={classes.content}>{comment.content}</p>
        <CommentVote
          className={classes.vote}
          count={comment.score}
          onPlusClick={votePlusClickHandler}
          onMinusClick={voteMinusClickHandler}
        />
        <CommentActions className={classes.actions} isYou={userIsCurrentUser} />
      </div>
    </Card>
  );
}

export default Comment;
