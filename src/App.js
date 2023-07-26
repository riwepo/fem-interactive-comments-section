import React from "react";

import CommentThreadList from "./components/CommentThreadList";

import { getCurrentUser, getCommentThreads } from "./data/dummyData";

import classes from "./App.module.css";
import CurrentUserProvider from "./context/current-user-context";

//const currentUser = getCurrentUser();
const dummyCommentThreads = getCommentThreads();

function App() {
  return (
    <main className={classes.main}>
      <CurrentUserProvider>
        <CommentThreadList commentThreads={dummyCommentThreads} />
      </CurrentUserProvider>
    </main>
  );
}

export default App;
