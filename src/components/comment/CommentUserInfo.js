import React from "react";

function getAvatarPath(username) {
  return `/images/avatars/image-${username}.png`;
}

function CommentUserInfo({ user }) {
  console.log(process.env.PUBLIC_URL + getAvatarPath(user.username));
  return (
    <>
      <img
        src={process.env.PUBLIC_URL + getAvatarPath(user.username)}
        alt={`user ${user.userName} avatar`}
      />
      <p>{user.username}</p>
      <p>YOU</p>
    </>
  );
}

export default CommentUserInfo;
