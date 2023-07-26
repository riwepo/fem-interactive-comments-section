import React from "react";

import classes from "./CommentUserInfo.module.css";

function getAvatarPath(username) {
  return `/images/avatars/image-${username}.png`;
}

function CommentUserInfo({ user }) {
  console.log(process.env.PUBLIC_URL + getAvatarPath(user.username));
  return (
    <div className={classes.container}>
      <img
        className={classes.image}
        src={process.env.PUBLIC_URL + getAvatarPath(user.username)}
        alt={`user ${user.userName} avatar`}
      />
      <p>{user.username}</p>
      <p>YOU</p>
    </div>
  );
}

export default CommentUserInfo;
