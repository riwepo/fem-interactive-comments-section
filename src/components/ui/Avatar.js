import React from "react";

import { getAvatarPath } from "../../utils";

import classes from "./Avatar.module.css";

function Avatar({ className, username }) {
  return (
    <img
      className={`${className} ${classes.image}`}
      src={process.env.PUBLIC_URL + getAvatarPath(username)}
      alt={`user ${username} avatar`}
    />
  );
}

export default Avatar;
