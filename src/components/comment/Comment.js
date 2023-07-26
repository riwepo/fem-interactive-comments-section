import React from "react";

import Card from "../ui/Card";

function Comment({ comment }) {
  return (
    <Card>
      <p>{comment.content}</p>
    </Card>
  );
}

export default Comment;
