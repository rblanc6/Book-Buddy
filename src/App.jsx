import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navigations";
import Books from "./components/Books/Books";
import SingleBook from "./components/SingleBook/SingleBook";

function App() {
  const [token, setToken] = useState(null);
  const [selectedBookId, setSelectedBookId] = useState();

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books/:id" element={<SingleBook />} />
      </Routes>
    </>
  );
}

export default App;
