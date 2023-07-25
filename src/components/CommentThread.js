import React from "react";
import CommentList from "./CommentList";

function CommentThread({ commentThread }) {
  return (
    <li>
      <p>{commentThread.content}</p>
      {commentThread.replies && (
        <CommentList comments={commentThread.replies} />
      )}
    </li>
  );
}

export default CommentThread;
