import React, { useState } from "react";

import Replies from "./Replies";
import Comment from "./comment/Comment";
import NewCommentForm from "./NewCommentForm";

function CommentThread({ commentThread }) {
  const [isReplying, setIsReplying] = useState(false);
  const replyClickHandler = () => {
    console.log("reply clicked");
    setIsReplying((current) => !current);
  };
  return (
    <li>
      <Comment comment={commentThread} onReplyClick={replyClickHandler} />
      {isReplying && <NewCommentForm replyToId={commentThread.id} />}
      {commentThread.replies && <Replies comments={commentThread.replies} />}
    </li>
  );
}

export default CommentThread;
