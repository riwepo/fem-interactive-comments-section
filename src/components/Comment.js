import React from "react";

function Comment({ comment }) {
  return (
    <li>
      <p>hello</p>
      <p>{comment.content}</p>
    </li>
  );
}

export default Comment;
