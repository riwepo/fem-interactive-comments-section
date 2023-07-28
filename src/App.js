import React from "react";

import CommentThreadList from "./components/CommentThreadList";
import NewCommentForm from "./components/NewCommentForm";

import CurrentUserProvider from "./context/current-user-context";
import CommentsProvider from "./context/comments-context";

import classes from "./App.module.css";

function App() {
  return (
    <main className={classes.main}>
      <CurrentUserProvider>
        <CommentsProvider>
          <CommentThreadList />
          <NewCommentForm replyToId={null} />
        </CommentsProvider>
      </CurrentUserProvider>
    </main>
  );
}

export default App;
