import React from "react";

import CommentThreadList from "./components/CommentThreadList";

import { getCurrentUser, getCommentThreads } from "./data/dummyData";

import classes from "./App.module.css";
import CurrentUserProvider from "./context/current-user-context";
import NewCommentEditor from "./components/NewCommentEditor";

//const currentUser = getCurrentUser();
const dummyCommentThreads = getCommentThreads();

function App() {
  return (
    <main className={classes.main}>
      <CurrentUserProvider>
        <CommentThreadList commentThreads={dummyCommentThreads} />
        <NewCommentEditor />
      </CurrentUserProvider>
    </main>
  );
}

export default App;
