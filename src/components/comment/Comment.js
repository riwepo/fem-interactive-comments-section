import React from "react";

import Card from "../ui/Card";
import CommentUserInfo from "./CommentUserInfo";

function Comment({ comment }) {
  return (
    <Card>
      <CommentUserInfo user={comment.user} />
      <p>{comment.content}</p>
    </Card>
  );
}

export default Comment;
