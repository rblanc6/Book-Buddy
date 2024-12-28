/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import { useGetUserQuery } from "./AccountSlice";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Account() {
  const { id } = useParams();
  const { data, isSuccess } = useGetUserQuery(id);
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  //   const [isLoggedin, setIsLoggedin] = useState(false);

  const getUserData = async () => {
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
      //   setIsLoggedin(true);
      setUser(data);
      console.log(data.firstname);
    } catch (error) {
      console.error(error);
    }
  };

  //   const logoutButton = () => {
  //     localStorage.clear();
  //     setIsLoggedin(false);
  //     // navigate("/");
  //   };

  useEffect(() => {
    getUserData();
  }, [data]);

  //   const loginButton = () => {
  //     navigate("/login");
  //   };
  //   const registerButton = () => {
  //     navigate("/register");
  //   };

  return (
    <>
      {/* {isLoggedin ? ( */}
      <div>
        <h2>
          Welcome {user.firstname} {user.lastname}
        </h2>
        <table className="account-table">
          <tr className="account-header">
            <td>Account Details</td>
            <td>Books currently checked out</td>
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
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, commodi cum, modi officia explicabo deserunt consequuntur laborum odit nihil, reiciendis ut numquam corrupti? Magnam voluptatum, cum inventore harum sapiente earum. {user.books}</p>
            </td>
          </tr>
        </table>
        {/* <button onClick={logoutButton}>Logout</button> */}
      </div>
      {/* ) : (
        <div>
          <h3>Welcome</h3>
          <button onClick={loginButton}>Login</button>
          <button onClick={registerButton}>Register</button>
        </div>
      )} */}
    </>
  );
}
