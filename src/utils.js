export function getAvatarPath(username) {
  return `/images/avatars/image-${username}.png`;
}

// transform flat comments data to threads
export function transformCommentsToThreads(comments) {
  const topLevelComments = comments.filter((c) => !c.replyToCommentId);
  // highest score first
  const sortedTopLevel = topLevelComments.sort((a, b) => b.score - a.score);
  // console.log("sortedTopLevel", sortedTopLevel);
  const topLevelTransformed = sortedTopLevel.map(transform);
  const withReplies = topLevelTransformed.map((x) => {
    const replies = comments.filter((y) => y.replyToCommentId === x.id);
    // lowest id first
    const sortedReplies = replies.sort((a, b) => a.score - b.score);
    const transformedReplies = sortedReplies.map(transform);
    const result = { ...x, replies: transformedReplies };
    return result;
  });
  return withReplies;
}

// turn user into object
// add empty replies array
function transform(comment) {
  return {
    ...comment,
    user: { username: comment.username },
    replies: [],
  };
}
