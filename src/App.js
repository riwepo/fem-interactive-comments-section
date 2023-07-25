import React from "react";

import CommentThreadList from "./components/CommentThreadList";

import { getCurrentUser, getCommentThreads } from "./data/dummyData";

const currentUser = getCurrentUser();
const dummyCommentThreads = getCommentThreads();

function App() {
  return (
    <div className="App">
      <CommentThreadList commentThreads={dummyCommentThreads} />
    </div>
  );
}

export default App;
