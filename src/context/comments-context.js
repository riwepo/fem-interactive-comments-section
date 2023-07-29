import React, { useState } from "react";

import { INITIAL_COMMENTS } from "../data/dummyData";
import { transformCommentsToThreads } from "../utils";
import { addComment as addCommentApi } from "../api/comment-api";

export const CommentsContext = React.createContext({
  // flat comments data
  comments: [{}],

  // function to add a comment
  addCommment: (author, replyToCommentId, replyToUsername, content) => {},

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

  // utility function to transform flat data to threads
  const getCommentThreads = () => {
    return transformCommentsToThreads(comments);
  };

  return (
    <CommentsContext.Provider
      value={{
        comments: comments,
        addCommment: addComment,
        getCommentThreads: getCommentThreads,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
}
