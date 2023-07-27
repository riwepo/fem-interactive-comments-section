import React from "react";

import { getAvatarPath } from "../../utils";

import classes from "./CommentUserInfo.module.css";

function CommentUserInfo({ className, user, isYou }) {
  return (
    <div className={`${className} ${classes.container}`}>
      <img
        className={classes.image}
        src={process.env.PUBLIC_URL + getAvatarPath(user.username)}
        alt={`user ${user.userName} avatar`}
      />
      <p>{user.username}</p>
      {isYou && <p>YOU</p>}
    </div>
  );
}

export default CommentUserInfo;
