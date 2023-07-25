import React from "react";

import CommentList from "./components/CommentList";

import { getCurrentUser, getComments } from "./data/dummyData";

const currentUser = getCurrentUser();
const dummyComments = getComments();

function App() {
  return (
    <div className="App">
      <CommentList />
    </div>
  );
}

export default App;
