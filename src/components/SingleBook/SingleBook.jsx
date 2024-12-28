/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useEffect, useState } from "react";
import { useGetBookQuery } from "./SingleBookSlice";
import { useParams, Link } from "react-router-dom";

export default function SingleBook({ selectedBookId, setSelectedBookId }) {
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

  // There are 3 possibilities:
  // let $details;
  // // 1. A book has not yet been selected.
  // if (!singleBook) {
  //   $details = <p>Please select a book to see more details.</p>;
  // }
  // //  2. A book has been selected, but results have not yet returned from the API.
  // else if (isLoading) {
  //   $details = <p>Loading book information...</p>;
  // } else if (error) {
  //   $details = <p>Error loading book details: {error.message}</p>;
  // }
  // // 3. Information about the selected book has returned from the API.
  // else {
  //   $details = (
  //     <>
  //       <div>
  //         <h3>
  //           {singleBook.title} by {singleBook.author}
  //         </h3>
  //         <img
  //           src={singleBook.coverimage}
  //           alt={singleBook.name}
  //           width="150px"
  //         />
  //         <p>{singleBook.description}</p>
  //         <p>Available: {singleBook.available ? "✅" : "❌"}</p>
  //       </div>
  //     </>
  //   );
  // }

  return (
    <div className="bookcontainer">
      <div className="bookdetails">
        <h3>{singleBook.title}</h3>
        <h5>by {singleBook.author}</h5>
        <p>{singleBook.description}</p>
        <p>Available: {singleBook.available ? "✅" : "❌"}</p>
      </div>
      <div className="bookdetails">
        <img src={singleBook.coverimage} alt={singleBook.name} />
      </div>
    </div>
  );
}
