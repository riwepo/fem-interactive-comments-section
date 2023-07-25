import React from "react";

import CommentThread from "./CommentThread";

function CommentThreadList({ commentThreads }) {
  return (
    <ul>
      {commentThreads.map((commentThread) => {
        return <CommentThread commentThread={commentThread} />;
      })}
    </ul>
  );
}

export default CommentThreadList;
