/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useEffect, useState } from "react";
import { useGetBookQuery } from "./SingleBookSlice";
import { useParams, Link } from "react-router-dom";

export default function SingleBook() {
  const { id } = useParams();
  const { data: aBook, isLoading, error } = useGetBookQuery(id);

  const [singleBook, setSingleBook] = useState({});

  useEffect(() => {
    // console.log("SingleBook", singleBook?.books);
    if (aBook?.book) {
      console.log(aBook?.book);
      setSingleBook(aBook.book);
    }
  }, [aBook]);

  const checkoutBook = () => {
    //add functionality
  };


  return (
    <div className="bookcontainer">
      <div className="bookdetails">
        <h3>{singleBook.title}</h3>
        <h5>by {singleBook.author}</h5>
        <p>{singleBook.description}</p>
        <p>Available: {singleBook.available ? "✅" : "❌"}</p>
        <p>
          {localStorage.getItem("token") && singleBook.available ? (
            <button className="checkoutbutton" onClick={() => checkoutBook}>
              Checkout
            </button>
          ) : (
            ""
          )}
        </p>
      </div>
      <div className="bookdetails">
        <img src={singleBook.coverimage} alt={singleBook.name} />
      </div>
    </div>
  );
}
