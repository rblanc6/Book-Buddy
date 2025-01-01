/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import { useGetUserQuery } from "./AccountSlice";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useUpdateBookMutation } from "../Books/BooksSlice";
import { useDeleteReservationMutation } from "../Reservations/ReservationSlice";
import { useGetReservationQuery } from "../Reservations/ReservationSlice";
import Reservation from "../Reservations/Reservation";

export default function Account() {
  const { id } = useParams();
  const { data, isSuccess } = useGetUserQuery(id);
  const [user, setUser] = useState("");
  // const [updateBook] = useUpdateBookMutation();
  const [deleteBook] = useDeleteReservationMutation();
  // const { reservation } = useGetReservationQuery();

  useEffect(() => {
    if (isSuccess) {
      console.log(data);
      setUser(data);
    }
  }, [data]);

  // async function handleCheckIn({ event, id }) {
  //   event.preventDefault();
  //   console.log("Event", event.target.name);
  //   console.log("id", id);
  //   try {
  //     const result = await updateBook({ id, available: false });
  //     console.log("checkIn book result", result);
  //   } catch (error) {
  //     console.error("Error during checkIn", error);
  //   }
  // }

  //   async function handleDeleteBook({ event, id }) {
  //     event.preventDefault();
  //     console.log("Event", event.target.name);
  //     console.log("id", id);
  //     try {
  //       const result = await deleteBook({ id });
  //       console.log("checkIn book result", result);
  //     } catch (error) {
  //       console.error("Error during checkIn", error);
  //     }
  //   }

  return (
    <>
      <div>
        <h2>
          Welcome {user.firstname} {user.lastname}
        </h2>
        <table className="account-table">
          <tbody>
            <tr className="account-header">
              <td>Account Details</td>
              <td>Current Books</td>
            </tr>
            <tr className="account-details">
              <td>
                <p>
                  <b>User ID#:</b> {user.id}
                  <br />
                  <b>Email address:</b> {user.email}
                </p>
              </td>
              <td>
                {/* List a individual book  */}
                {/* {JSON.stringify(user.books[0].title)} */}

                {/* {user?.books?.map((book) => {
                  return (
                    <div key={book.id}>
                      <h3>
                        {book.title}; {book.id}
                      </h3>
                      <button
                        name="deletemeout"
                        onClick={() => handleDeleteBook({ event, id: book.id })}
                      >
                        Check-In
                      </button> */}
                {/* </div>
                  );
                })} */}
                <Reservation />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
