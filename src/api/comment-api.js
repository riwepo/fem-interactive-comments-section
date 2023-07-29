// adds a new comment and returns the new comment list

/**
 *
 * @param {*} comments original data
 * @param {*} author author of new comment
 * @param {*} replyToCommentId comment we are replying to
 * @param {*} replyToUsername username we are replying to
 * @param {*} content content of the comment
 * @returns
 */
export function addComment(
  comments,
  author,
  replyToCommentId,
  replyToUsername,
  content
) {
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
    replyToUsername: replyToUsername,
  };
  const newCommentList = [...comments, newComment];

  return newCommentList;
}
