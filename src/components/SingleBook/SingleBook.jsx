/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useEffect, useState } from "react";
import { useGetBookQuery } from "./SingleBookSlice";

export default function SingleBook({selectedBookId, setSelectedBookId}) {
  const { data: individualBook, isLoading, error } = useGetBookQuery(id);

  const [singleBook, setSingleBook] = useState({});

  useEffect(() => {
    // console.log("SingleBook", singleBook?.books);
    if (individualBook?.data?.book) {
      setSingleBook(individualBook?.data?.book);
    }
  }, [individualBook]);

  // There are 3 possibilities:
  let $details;
  // 1. A book has not yet been selected.
  if (!singleBook) {
    $details = <p>Please select a book to see more details.</p>;
  }
  //  2. A book has been selected, but results have not yet returned from the API.
  else if (isLoading) {
    $details = <p>Loading book information...</p>;
  } else if (error) {
    $details = <p>Error loading book details: {error.message}</p>;
  }
  // 3. Information about the selected book has returned from the API.
  else {
    $details = (
      <>
        <h3>{singleBook.title}</h3>
        {/* //       <p>{puppy.breed}</p>
  //       <p>Team {puppy.team?.name ?? "Unassigned"}</p>
  //       <div>
  //         <button className="rbutton" onClick={() => removePuppy(puppy.id)}>
  //           Remove From Roster
  //         </button>
  //       </div> */}

        <figure>
          <img src={singleBook.coverimage} alt={singleBook.name} />
        </figure>
      </>
    );
  }

  return (
    <aside>
      {/* <h2>Selected Book</h2> */}
      {$details}
    </aside>
  );
}
