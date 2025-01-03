import {
  useGetReservationQuery,
  useDeleteReservationMutation,
} from "./ReservationSlice";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "rgb(87, 102, 114)",
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

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
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (isSuccess) {
      setBooks(reservation.reservation);
    }
  }, [isSuccess, reservation]);

  useEffect(() => {}, [books]);

  let $reservationList;
  if (books.length === 0) {
    $reservationList = (
      <Stack spacing={2} className="reservedbooks">
        <Item>You currently have no books checked out.</Item>
      </Stack>
    );
  } else {
    $reservationList = (
      <>
        <Box sx={{ width: "100%" }}>
          {books?.map((book, index) => {
            return (
              <Stack spacing={2} className="reservedbooks" key={index}>
                <Item>
                  <b>{book.title}</b>
                  <br /> by {book.author} <br />
                  <button
                    className="reservationbutton"
                    onClick={() => returnBook(book.id)}
                  >
                    Return
                  </button>
                </Item>
              </Stack>
            );
          })}
        </Box>
      </>
    );
  }

  return <>{$reservationList}</>;
}
