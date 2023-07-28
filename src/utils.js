export function getAvatarPath(username) {
  return `/images/avatars/image-${username}.png`;
}

// transform flat comments data to threads
export function transformCommentsToThreads(comments) {
  const topLevelComments = comments.filter((c) => !c.replyingTo);
  const topLevelTransformed = topLevelComments.map(transform);
  const withReplies = topLevelTransformed.map((x) => {
    const replies = comments.filter((y) => y.replyingTo === x.id);
    const transformedReplies = replies.map(transform);
    const result = { ...x, replies: transformedReplies };
    return result;
  });
  return withReplies;
}

// turn user into object
// add empty replies array
function transform(comment) {
  return {
    id: comment.id,
    content: comment.content,
    createdAt: comment.createdAt,
    score: comment.score,
    user: { username: comment.username },
    replies: [],
  };
}
