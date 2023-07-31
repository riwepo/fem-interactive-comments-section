import React, { useState } from "react";

import { INITIAL_COMMENTS } from "../data/dummyData";
import { transformCommentsToThreads } from "../utils";
import {
  addComment as addCommentApi,
  deleteComment as deleteCommentApi,
  updateComment as updateCommentApi,
} from "../api/comment-api";

export const CommentsContext = React.createContext({
  // flat comments data
  comments: [{}],

  // function to add a comment
  addCommment: (author, replyToCommentId, replyToUsername, content) => {},

  // function to delete a comment
  deleteCommment: (id) => {},

  // function to update a comment
  updateCommment: (id, content) => {},

  // comment thread data
  getCommentThreads: (currentUsername) => {},
});

export default function CommentsContextProvider({ children }) {
  // comments as flat data
  const [comments, setCommments] = useState(INITIAL_COMMENTS);

  const addComment = (author, replyToCommentId, replyToUsername, content) => {
    const updatedComments = addCommentApi(
      comments,
      author,
      replyToCommentId,
      replyToUsername,
      content
    );
    setCommments(updatedComments);
  };

  const deleteComment = (id) => {
    const updatedComments = deleteCommentApi(comments, id);
    setCommments(updatedComments);
  };

  const updateComment = (id, content) => {
    const updatedComments = updateCommentApi(comments, id, content);
    setCommments(updatedComments);
  };

  // utility function to transform flat data to threads
  const getCommentThreads = (currentUserName) => {
    return transformCommentsToThreads(new Date(), comments, currentUserName);
  };

  return (
    <CommentsContext.Provider
      value={{
        comments: comments,
        addCommment: addComment,
        deleteCommment: deleteComment,
        updateCommment: updateComment,
        getCommentThreads: getCommentThreads,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
}
