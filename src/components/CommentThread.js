import React from "react";

import CommentAndReply from "./CommentAndReply";
import Replies from "./Replies";

function CommentThread({ commentThread }) {
  return (
    <li>
      <CommentAndReply comment={commentThread} parentComment={commentThread} />
      {commentThread.replies && (
        <Replies
          comments={commentThread.replies}
          parentComment={commentThread}
        />
      )}
    </li>
  );
}

export default CommentThread;
