export function getAvatarPath(username) {
  return `/images/avatars/image-${username}.png`;
}

// transform flat comments data to threads
export function transformCommentsToThreads(comments) {
  const topLevelComments = comments.filter((c) => !c.replyToCommentId);
  // console.log("topLevelComments", topLevelComments);
  const topLevelTransformed = topLevelComments.map((x) =>
    transform(comments, x)
  );
  const withReplies = topLevelTransformed.map((x) => {
    const replies = comments.filter((y) => y.replyToCommentId === x.id);
    const transformedReplies = replies.map((x) => transform(comments, x));
    const result = { ...x, replies: transformedReplies };
    return result;
  });
  // console.log("withReplies", withReplies);
  return withReplies;
}

// add the replyToUsername, found from the replyToCommentId
// turn user into object
// add empty replies array
function transform(comments, comment) {
  const withReplyToUsername = addReplyToUsername(comments, comment);
  return {
    ...withReplyToUsername,
    user: { username: comment.username },
    replies: [],
  };
}

function addReplyToUsername(comments, comment) {
  let replyToUsername = null;
  if (comment.replyToCommentId) {
    const repliedComment = comments.find(
      (x) => x.id === comment.replyToCommentId
    );
    replyToUsername = repliedComment.username;
  }
  return { ...comment, replyToUsername };
}
