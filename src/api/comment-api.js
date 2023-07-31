// adds a new comment and returns the new comment list

/**
 *
 * @param {*} comments original data
 * @param {*} author author of new comment
 * @param {*} replyToCommentId comment we are replying to
 * @param {*} replyToUsername username we are replying to
 * @param {*} content content of the comment
 * @returns new list of comments
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

/**
 *
 * @param {*} comments  original data
 * @param {*} id  id of comment to delete
 * @returns new list of comments
 */
export function deleteComment(comments, id) {
  const newCommentList = comments.filter((x) => x.id !== id);
  return newCommentList;
}

/**
 *
 * @param {*} comments original data
 * @param {*} id id of comment to update
 * @param {*} content updated content of the comment
 * @returns new list of comments
 */
export function updateComment(comments, id, content) {
  const matchingIdComments = comments.filter((x) => x.id === id);
  let newCommentList = comments;
  if (matchingIdComments.length === 1) {
    const existingComment = matchingIdComments[0];
    const updatedComment = { ...existingComment, content };
    const otherComments = comments.filter((x) => x.id !== id);
    newCommentList = [...otherComments, updatedComment];
  }

  return newCommentList;
}
