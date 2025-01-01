import {
  useGetReservationQuery,
  useDeleteReservationMutation,
} from "./ReservationSlice";
import { useState, useEffect } from "react";

export default function Reservation() {
  const { data: reservation, isSuccess } = useGetReservationQuery();
  const [deleteReservation] = useDeleteReservationMutation();
  const [books, setBooks] = useState([]);

  async function returnBook(id) {
    try {
      await deleteReservation({
        id,
        available: !reservation.available,
      }).unwrap();
      console.log("Returned book Id", id);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (isSuccess) {
      // console.log("this is reservation", reservation.reservation);
      setBooks(reservation.reservation);
      // console.log("books", books);
    }
  }, [isSuccess, reservation]);

  useEffect(() => {
    // console.log("Books updated", books);
  }, [books]);

  let $reservationList;
  if (books.length === 0) {
    $reservationList = <p>You currently have no books checked out.</p>;
  } else {
    $reservationList = (
      <>
        {books?.map((book, index) => {
          return (
            <ul className="reservedbooks" key={index}>
             
             <li> 
                <b>{book.title}</b><br/> by {book.author}
                
              </li>
              <li><button
                  className="reservationbutton"
                  onClick={() => returnBook(book.id)}
                >
                  Return
                </button></li>
            </ul>
          );
        })}
      </>
    );
  }

  return (
    <>
      {$reservationList}

      {/* {books?.map((book, index) => {
        return (
          <div key={index}>
            <p>
              {book.title} {book.id}
            </p>
            <button onClick={() => returnBook(book.id)}>Check-In</button>
          </div>
        );
      })}  */}
    </>
  );
}
