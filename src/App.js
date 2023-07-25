import React from "react";

import CommentThreadList from "./components/CommentThreadList";

import { getCurrentUser, getComments } from "./data/dummyData";

const currentUser = getCurrentUser();
const dummyComments = getComments();

function App() {
  return (
    <div className="App">
      <CommentThreadList commentThreads={dummyComments} />
    </div>
  );
}

export default App;
