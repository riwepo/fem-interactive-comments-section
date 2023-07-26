import React from "react";

import Comment from "./Comment";

function CommentList({ comments }) {
  return (
    <ul>
      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </ul>
  );
}

export default CommentList;
