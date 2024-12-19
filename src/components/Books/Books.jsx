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

  const [bookArr, setBookArr] = useState();

  useEffect(() => {
    console.log("bookList", bookList?.books);
    if (bookList?.books) {
      setBookArr(bookList?.books);
    }
  }, [bookList]);

  return (
    <article>
      {/*input box and search button */}
      {/* <div className="searchbar">
    <form className="searchform" onSubmit={filterPuppies}>
      <label>
        <input
          name="puppyName"
          placeholder="Enter Puppies Name"
          value={puppyFilter}
          onChange={(e) => setPuppyFilter(e.target.value)}
        />
      </label>
      <button className="searchbutton" type="submit">
        Search
      </button>
    </form>
  </div>
  <br /> */}
      <h2>Library Books</h2>
      <ul className="books">
        {isLoading && <li>Loading books...</li>}
        {error && <li>Error loading books...</li>}
        {bookArr?.map((p) => (
          <li key={p.id}>
            <p>{p.title} </p>
            <p>{p.author}</p>
            {/* <p>{p.available}</p> */}

            <figure className="outline">
              <img src={p.coverimage} alt={p.name} width="200px" />
            </figure>
            <button
              className="detailbutton"
              onClick={() => seeBookDetails(p.id)}
            >
              See details
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}
