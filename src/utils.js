export function getAvatarPath(username) {
  return `/images/avatars/image-${username}.png`;
}

// transform flat comments data to threads
export function transformCommentsToThreads(now, comments, currentUsername) {
  const topLevelComments = comments.filter((c) => !c.replyToCommentId);
  // highest score first
  const sortedTopLevel = topLevelComments.sort((a, b) => b.score - a.score);
  // console.log("sortedTopLevel", sortedTopLevel);
  const topLevelTransformed = sortedTopLevel.map((x) =>
    transform(now, currentUsername, x)
  );
  const withReplies = topLevelTransformed.map((x) => {
    const replies = comments.filter((y) => y.replyToCommentId === x.id);
    // lowest id first
    const sortedReplies = replies.sort((a, b) => a.id - b.id);
    const transformedReplies = sortedReplies.map((x) =>
      transform(now, currentUsername, x)
    );
    const result = { ...x, replies: transformedReplies };
    return result;
  });
  console.log(withReplies);
  return withReplies;
}

// turn user into object
// add empty replies array
// convert createdAt timestamp to howOld descriptive string
// convert voters to score
function transform(now, currentUsername, comment) {
  // console.log(comment);
  const commentDate = new Date(Date.parse(comment.createdAt));
  const howOld = timeDifference(now, commentDate);
  const isUpvoteEnabled =
    comment.username !== currentUsername &&
    comment.upvoters.filter((x) => x === currentUsername).length === 0;
  const isDownvoteEnabled =
    comment.username !== currentUsername &&
    comment.downvoters.filter((x) => x === currentUsername).length === 0;
  const score = comment.upvoters.length - comment.downvoters.length;
  const result = {
    ...comment,
    howOld,
    user: { username: comment.username },
    replies: [],
    isUpvoteEnabled,
    isDownvoteEnabled,
    score,
  };
  delete result.createdAt;
  delete result.username;
  return result;
}

function timeDifference(current, previous) {
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + " seconds ago";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + " days ago";
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + " months ago";
  } else {
    return Math.round(elapsed / msPerYear) + " years ago";
  }
}
