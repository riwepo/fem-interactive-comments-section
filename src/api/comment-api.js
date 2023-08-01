import { INITIAL_COMMENTS } from "./dummyData";

const LOCAL_STORE_COMMENTS_KEY = "COMMENTS_DATA";

function saveComments(comments) {
  const commentStr = JSON.stringify(comments);
  localStorage.setItem(LOCAL_STORE_COMMENTS_KEY, commentStr);
  return comments;
}

export function getComments() {
  const commentStr = localStorage.getItem(LOCAL_STORE_COMMENTS_KEY);
  if (commentStr === null) {
    return null;
  }
  const comments = JSON.parse(commentStr);
  return comments;
}

export function initialise() {
  // if there is nothing in local storage, put the dummy data in there
  let comments = getComments();
  if (comments === null) {
    saveComments(INITIAL_COMMENTS);
  }
}

/**
 *
 * @param {*} author author of new comment
 * @param {*} replyToCommentId comment we are replying to
 * @param {*} replyToUsername username we are replying to
 * @param {*} content content of the comment
 * @returns new list of comments
 */
export function addComment(author, replyToCommentId, replyToUsername, content) {
  const comments = getComments();

  // the next id will be one more than the current max
  const nextId =
    Math.max.apply(
      Math,
      comments.map((c) => c.id)
    ) + 1;

  // build a new comment
  const newComment = {
    id: nextId,
    content: content,
    createdAt: new Date().toUTCString(),
    username: author,
    replyToCommentId: replyToCommentId,
    replyToUsername: replyToUsername,
    votes: [],
  };
  const newCommentList = [...comments, newComment];

  return saveComments(newCommentList);
}

/**
 *
 * @param {*} id  id of comment to delete
 * @returns new list of comments
 */
export function deleteComment(id) {
  const comments = getComments();
  const newCommentList = comments.filter((x) => x.id !== id);
  return saveComments(newCommentList);
}

/**
 *
 * @param {*} id id of comment to update
 * @param {*} content updated content of the comment
 * @returns new list of comments
 */
export function updateComment(id, content) {
  const comments = getComments();
  let newCommentList = comments;

  // find comments for the comment id
  // we would always expect to find exactly 1
  // but don't want to crash if not there
  const matchingIdComments = comments.filter((x) => x.id === id);
  if (matchingIdComments.length === 1) {
    const matchingComment = matchingIdComments[0];
    // build a whole new comment
    const updatedComment = { ...matchingComment, content };

    // buld a whole new comments list
    const otherComments = comments.filter((x) => x.id !== id);
    newCommentList = [...otherComments, updatedComment];
  }

  return saveComments(newCommentList);
}

/**
 *
 * @param {*} id id of the comment to vote on
 * @param {*} username username of the guy voting
 * @param {*} isUpvote true if upvote, otherwise downvote
 * @returns new comment list
 */
export function updateCommentVotes(id, username, isUpvote) {
  const comments = getComments();

  let currentUsernameVoteValue = 0;
  let newCommentList = comments;
  let updatedVotes = [];

  // find comments for the comment id
  // we would always expect to find exactly 1
  // but don't want to crash if not there
  const matchingIdComments = comments.filter((x) => x.id === id);
  if (matchingIdComments.length === 1) {
    const matchingComment = matchingIdComments[0];

    // find votes already by the guy voting
    // we expect 0 or 1 votes
    const matchingVotes = matchingComment.votes.filter(
      (x) => x.username === username
    );
    if (matchingVotes.length > 0) {
      currentUsernameVoteValue = matchingVotes[0].value;
    }
    if (isUpvote) {
      currentUsernameVoteValue++;
    } else {
      currentUsernameVoteValue--;
    }

    // limit value to be between -1 and +1
    // the UI should prevent this anyway
    currentUsernameVoteValue = Math.max(-1, currentUsernameVoteValue);
    currentUsernameVoteValue = Math.min(1, currentUsernameVoteValue);

    const otherVotes = matchingComment.votes.filter(
      (x) => x.username !== username
    );

    // rebuild the vote list from scratch
    // only put the new vote in if it is non-zero
    updatedVotes = [...otherVotes];
    if (currentUsernameVoteValue) {
      updatedVotes = [
        ...otherVotes,
        { username, value: currentUsernameVoteValue },
      ];
    }

    // rebuild a whole new comment object
    const updatedComment = { ...matchingComment, votes: updatedVotes };

    const otherComments = comments.filter((x) => x.id !== id);

    // rebuild a whole new comment list
    newCommentList = [...otherComments, updatedComment];
  }

  console.log(newCommentList);

  return saveComments(newCommentList);
}
