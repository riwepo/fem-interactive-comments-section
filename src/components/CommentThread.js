import React from "react";
import CommentList from "./CommentList";
import Comment from "./Comment";

function CommentThread({ commentThread }) {
  return (
    <li>
      <Comment comment={commentThread} />
      {commentThread.replies && (
        <CommentList comments={commentThread.replies} />
      )}
    </li>
  );
}

export default CommentThread;
