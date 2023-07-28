// adds a new comment and returns the new comment list
export function addComment(comments, author, replyToCommentId, content) {
  const nextId =
    Math.max.apply(
      Math,
      comments.map((c) => c.id)
    ) + 1;

  const newComment = {
    id: nextId,
    content: content,
    createdAt: "today",
    score: 0,
    username: author,
    replyToCommentId: replyToCommentId,
  };
  const newCommentList = [...comments, newComment];
  return newCommentList;
}
