import React from "react";
import CommentList from "./CommentList";
import Card from "./ui/Card";

function CommentThread({ commentThread }) {
  return (
    <li>
      <Card>
        <p>{commentThread.content}</p>
        {commentThread.replies && (
          <CommentList comments={commentThread.replies} />
        )}
      </Card>
    </li>
  );
}

export default CommentThread;
