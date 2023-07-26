import React from "react";

import CommentThreadList from "./components/CommentThreadList";

import { getCurrentUser, getCommentThreads } from "./data/dummyData";

import classes from "./App.module.css";

const currentUser = getCurrentUser();
const dummyCommentThreads = getCommentThreads();

function App() {
  return (
    <main className={classes.main}>
      <CommentThreadList commentThreads={dummyCommentThreads} />
    </main>
  );
}

export default App;
