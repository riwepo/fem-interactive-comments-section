import React from "react";
import Replies from "./Replies";
import Comment from "./comment/Comment";

function CommentThread({ commentThread }) {
  return (
    <li>
      <Comment comment={commentThread} />
      {commentThread.replies && <Replies comments={commentThread.replies} />}
    </li>
  );
}

export default CommentThread;
