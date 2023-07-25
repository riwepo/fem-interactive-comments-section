import React from "react";

import CommentList from "./components/CommentList";

import dummyData from "./data/dummyData";

const currentUser = dummyData.getCurrentUser();
const dummyComments = dummyData.getComments();

function App() {
  return (
    <div className="App">
      <CommentList />
    </div>
  );
}

export default App;
