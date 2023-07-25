import React from "react";

function CommentThread({ comment }) {
  return <li>{comment.content}</li>;
}

export default CommentThread;
