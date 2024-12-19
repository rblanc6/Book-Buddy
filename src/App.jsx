import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Books from "./components/Books/Books";
import SingleBook from "./components/SingleBook/SingleBook";

function App() {
  const [token, setToken] = useState(null);
  const [selectedBookId, setSelectedBookId] = useState();

  return (
    <>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books/:id" element={<SingleBook />} />
      </Routes>
    </>
  );
}

export default App;
