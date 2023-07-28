// adds a new comment and returns the new comment list
export function addComment(comments, author, replyingTo, content) {
  const nextId = comments.max((c) => c.id) + 1;
  const newComment = {
    id: nextId,
    content: content,
    createdAt: "today",
    score: 0,
    username: author,
    replyingTo: replyingTo,
  };
  const newCommentList = [...comments, newComment];
  return newCommentList;
}
