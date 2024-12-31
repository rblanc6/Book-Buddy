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
    deleteReservation(id);
    console.log("Returned book Id", id);
  }

  useEffect(() => {
    if (isSuccess) {
      console.log("this is reservation", reservation.reservation);
      setBooks(reservation.reservation);
      console.log("books", books);
    }
  }, [isSuccess, reservation]);

  useEffect(() => {
    console.log("Books updated", books);
  }, [books]);
  return (
    <>
      {books?.map((book, index) => {
        return (
          <div key={index}>
            <p>
              {book.title} {book.id}
            </p>
            <button onClick={() => returnBook(book.id)}>Check-In</button>
          </div>
        );
      })}
    </>
  );
}
