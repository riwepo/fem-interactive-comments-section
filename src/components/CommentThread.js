import React from "react";

import Replies from "./Replies";
import Comment from "./comment/Comment";
import NewCommentEditor from "./NewCommentEditor";

function CommentThread({ commentThread }) {
  return (
    <li>
      <Comment comment={commentThread} />
      <NewCommentEditor replyToId={commentThread.id} />
      {commentThread.replies && <Replies comments={commentThread.replies} />}
    </li>
  );
}

export default CommentThread;
