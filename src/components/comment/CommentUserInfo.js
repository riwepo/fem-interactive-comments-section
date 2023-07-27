import React, { useContext } from "react";
import { CurrentUserContext } from "../../context/current-user-context";

import classes from "./CommentUserInfo.module.css";

function getAvatarPath(username) {
  return `/images/avatars/image-${username}.png`;
}

function CommentUserInfo({ className, user }) {
  const currentUser = useContext(CurrentUserContext);
  const userIsCurrentUser = currentUser.username === user.username;
  return (
    <div className={`${className} ${classes.container}`}>
      <img
        className={classes.image}
        src={process.env.PUBLIC_URL + getAvatarPath(user.username)}
        alt={`user ${user.userName} avatar`}
      />
      <p>{user.username}</p>
      {userIsCurrentUser && <p>YOU</p>}
    </div>
  );
}

export default CommentUserInfo;
