/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useState, useEffect } from "react";
import { useGetBooksQuery } from "./BooksSlice";
import { useNavigate } from "react-router-dom";

export default function Books({ setSelectedBookId }) {
  const { data: bookList, isLoading, error } = useGetBooksQuery();

  const navigate = useNavigate();
  const seeBookDetails = (id) => {
    console.log(id);
    navigate(`/books/${id}`);
  };
  const [bookFilter, setBookFilter] = useState({
    bookSearch: "",
  });

  const [bookArr, setBookArr] = useState();

  useEffect(() => {
    console.log("bookList", bookList?.books);
    if (bookList?.books) {
      setBookArr(bookList?.books);
    }
  }, [bookList]);

  const update = (e) => {
    setBookFilter({
      bookSearch: e.target.value,
    });
    const temp = e.target.value;
    if (temp.length === 0) {
      setBookArr(bookList?.books);
    } else {
      const filteredBooks = bookList?.books.filter((element) => {
        if (
          element.title.toLowerCase().includes(temp) ||
          element.author.toLowerCase().includes(temp)
        ) {
          return element;
        }
      });
      setBookArr(filteredBooks);
    }
    console.log(temp);
  };



  return (
    <article>
      <h2>Library Books</h2>
      <form>
        <label>
          <p className="searchbar">
            Search by Title or Author:{" "}
            <input
              className="inputfield"
              name="bookSearch"
              value={bookFilter.bookSearch}
              onChange={update}
            />
          </p>
        </label>
      </form>
      <p>
        {isLoading && "Loading books..."}
        {error && "Error loading books..."}
      </p>
      <ul className="books">
        {bookArr?.map((p) => (
          <li key={p.id}>
            <p className="booktitle">{p.title} </p>
            <p className="bookauthor">by {p.author}</p>
            <figure>
              <div className="card">
                <div className="ribbon">
                  <span>{p.available ? "Available" : "Unavailable"}</span>
                </div>
                <img src={p.coverimage} alt={p.name} className="bookimage" />
              </div>
            </figure>

            <button
              className="detailbutton"
              onClick={() => seeBookDetails(p.id)}
            >
              Click for Details
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}
