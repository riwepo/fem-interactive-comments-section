import React from "react";

import CommentThreadList from "./components/CommentThreadList";

import { getCommentThreads } from "./data/dummyData";

import classes from "./App.module.css";
import CurrentUserProvider from "./context/current-user-context";
import NewCommentForm from "./components/NewCommentForm";

const dummyCommentThreads = getCommentThreads();

function App() {
  return (
    <main className={classes.main}>
      <CurrentUserProvider>
        <CommentThreadList commentThreads={dummyCommentThreads} />
        <NewCommentForm replyToId={null} />
      </CurrentUserProvider>
    </main>
  );
}

export default App;
