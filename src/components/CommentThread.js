import React from "react";

function CommentThread({ commentThread }) {
  return <li>{commentThread.content}</li>;
}

export default CommentThread;
