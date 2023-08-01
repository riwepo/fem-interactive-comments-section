import React, { useState } from "react";

import { transformCommentsToThreads } from "../utils";
import {
  initialise as initialiseApi,
  getComments as getCommentsApi,
  addComment as addCommentApi,
  deleteComment as deleteCommentApi,
  updateComment as updateCommentApi,
  updateCommentVotes as updateCommentVotesApi,
} from "../api/comment-api";

export const CommentsContext = React.createContext({
  // flat comment data
  comments: [{}],

  // function to add a comment
  addCommment: (author, replyToCommentId, replyToUsername, content) => {},

  // function to delete a comment
  deleteCommment: (id) => {},

  // function to update a comment
  updateCommment: (id, content) => {},

  // function to update comment votes
  updateCommentVotes: (id, currentUser, isUpvote) => {},

  // helper function to convert flat comments to thread data
  getCommentThreads: (comments, currentUsername) => {},
});

export default function CommentsContextProvider({ children }) {
  const [comments, setComments] = useState([]);

  const addComment = (author, replyToCommentId, replyToUsername, content) => {
    const _comments = addCommentApi(
      author,
      replyToCommentId,
      replyToUsername,
      content
    );
    setComments(_comments);
  };

  const deleteComment = (id) => {
    const _comments = deleteCommentApi(id);
    setComments(_comments);
  };

  const updateComment = (id, content) => {
    const _comments = updateCommentApi(id, content);
    setComments(_comments);
  };

  const updateCommentVotes = (id, currentUser, isUpvote) => {
    const _comments = updateCommentVotesApi(id, currentUser, isUpvote);
    setComments(_comments);
  };

  // get comment data as threads
  const getCommentThreads = (currentUserName) => {
    initialiseApi();
    const comments = getCommentsApi();
    const commentThreads = transformCommentsToThreads(
      new Date(),
      comments,
      currentUserName
    );
    return commentThreads;
  };

  return (
    <CommentsContext.Provider
      value={{
        comments: comments,
        addCommment: addComment,
        deleteCommment: deleteComment,
        updateCommment: updateComment,
        updateCommentVotes: updateCommentVotes,
        getCommentThreads: getCommentThreads,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
}
