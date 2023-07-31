import React, { useState } from "react";

import { INITIAL_COMMENTS } from "../data/dummyData";
import { transformCommentsToThreads } from "../utils";
import {
  addComment as addCommentApi,
  deleteComment as deleteCommentApi,
} from "../api/comment-api";

export const CommentsContext = React.createContext({
  // flat comments data
  comments: [{}],

  // function to add a comment
  addCommment: (author, replyToCommentId, replyToUsername, content) => {},

  // function to delete a comment
  deleteCommment: (id) => {},

  // comment thread data
  getCommentThreads: () => {},
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

  // utility function to transform flat data to threads
  const getCommentThreads = () => {
    return transformCommentsToThreads(comments);
  };

  return (
    <CommentsContext.Provider
      value={{
        comments: comments,
        addCommment: addComment,
        deleteCommment: deleteComment,
        getCommentThreads: getCommentThreads,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
}
