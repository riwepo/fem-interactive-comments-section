import React from "react";

function Comment({ comment }) {
  return <li>{comment.content}</li>;
}

export default Comment;
