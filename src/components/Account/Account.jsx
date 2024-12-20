/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import { useGetUserQuery } from "./AccountSlice";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Account() {
  const { id } = useParams();
  const { data, isSuccess } = useGetUserQuery(id);
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await fetch(
        `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setUser(data);
      console.log(data.firstname);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  //   useEffect(() => {
  //     // getUser();
  //     if (isSuccess) {
  //       setUser(data.user);
  //     }
  //   }, [data]);

  //       const submit = async (e) => {
  //         e.preventDefault();
  //         try {
  //             const response = await updateUser({ id, email }).unwrap();
  //       console.log(response);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  return (
    <div>
      <h3>
        Welcome {user.firstname} {user.lastname}
      </h3>
      <p>
        ACCOUNT DETAILS:
        <br />
        Email address: {user.email}
        <br />
        User ID#: {user.id}
      </p>
      <p>Books currently checked out: {user.books}</p>
    </div>
  );
}
