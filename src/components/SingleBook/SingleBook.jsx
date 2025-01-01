/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useEffect, useState } from "react";
import { useGetBookQuery } from "./SingleBookSlice";
import { useParams, useNavigate } from "react-router-dom";
import { useUpdateBookMutation } from "../Books/BooksSlice";

export default function SingleBook() {
  const { id } = useParams();
  const { data: aBook, isLoading, error } = useGetBookQuery(id);
  const navigate = useNavigate();
  const [updateBook] = useUpdateBookMutation();

  const [singleBook, setSingleBook] = useState({});

  useEffect(() => {
    // console.log("SingleBook", singleBook?.books);
    if (aBook?.book) {
      console.log(aBook?.book);
      setSingleBook(aBook.book);
    }
  }, [aBook]);

  async function handleCheckout(event) {
    event.preventDefault();
    console.log("are you working? handleCheckout");
    try {
      const result = await updateBook({ id, available: false });
      console.log("checkout book result", result);
    } catch (error) {
      console.error("Error during checkout", error);
    }
  }

  // async function handleCheckIn(event) {
  //   event.preventDefault();
  //   console.log("are you working? handleCheck-in");
  //   try {
  //     const result = await updateBook({ id, available: true });
  //     console.log("check-in book result", result);
  //   } catch (error) {
  //     console.error("Error during check-in", error);
  //   }
  // }

  const returnToList = () => {
    navigate("/");
  };
  return (
    <>
      <div className="bookcontainer">
        <div className="bookdetails">
          <h3>{singleBook.title}</h3>
          <h5>by {singleBook.author}</h5>
          <p>{singleBook.description}</p>
          <p>Available: {singleBook.available ? "✅" : "❌"}</p>
          <p>
            {localStorage.getItem("token") && singleBook.available ? (
              <button className="checkoutbutton" onClick={handleCheckout}>
                Checkout
              </button>
            ) : (
              ""
            )}
          </p>
          {/* <p>
            {localStorage.getItem("token") && !singleBook.available ? (
              <button className="checkoutbutton" onClick={handleCheckIn}>
                Check-In
              </button>
            ) : (
              ""
            )}
          </p> */}
        </div>
        <div className="bookdetails">
          <img src={singleBook.coverimage} alt={singleBook.name} />
        </div>
      </div>
      <div className="bookcontainer">
        <button className="returnbutton" onClick={returnToList}>
          Return to List
        </button>
      </div>
    </>
  );
}
