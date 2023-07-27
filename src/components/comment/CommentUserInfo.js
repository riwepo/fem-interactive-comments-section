import React from "react";

import Avatar from "../ui/Avatar";

import classes from "./CommentUserInfo.module.css";

function CommentUserInfo({ className, user, isYou }) {
  return (
    <div className={`${className} ${classes.container}`}>
      <Avatar className={classes.avatar} username={user.username} />
      <p>{user.username}</p>
      {isYou && <p>YOU</p>}
    </div>
  );
}

export default CommentUserInfo;
