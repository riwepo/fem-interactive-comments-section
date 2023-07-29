import React from "react";

import CommentThreadList from "./components/CommentThreadList";
import NewCommentForm from "./components/NewCommentForm";

import CurrentUserProvider from "./context/current-user-context";
import CommentsProvider from "./context/comments-context";

import classes from "./App.module.css";

function App() {
  const onSubmitCommentHandler = () => {
    // nothing to do here
  };
  return (
    <CurrentUserProvider>
      <CommentsProvider>
        <main className={classes.main}>
          <CommentThreadList />
          <NewCommentForm
            replyToCommentId={null}
            onSubmit={onSubmitCommentHandler}
          />
        </main>
      </CommentsProvider>
    </CurrentUserProvider>
  );
}

export default App;
