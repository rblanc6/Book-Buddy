/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import { useGetUserQuery } from "./AccountSlice";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Account() {
  const { id } = useParams();
  const { data, isSuccess } = useGetUserQuery(id);
  const [user, setUser] = useState("");

  useEffect(() => {
    if (isSuccess) {
      console.log(data);
      setUser(data);
    }
  }, [data]);

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
              <td>Books currently checked out</td>
            </tr>
            <tr className="account-details">
              <td>
                <p>
                  <b>User ID#:</b> {user.id}
                  <br />
                  <b>Email address:</b> {user.email}
                </p>
                <p>First: {user.firstname}</p>
                <p>Last: {user.lastname}</p>
              </td>
              <td>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ratione, commodi cum, modi officia explicabo deserunt
                  consequuntur laborum odit nihil, reiciendis ut numquam
                  corrupti? Magnam voluptatum, cum inventore harum sapiente
                  earum. {user.books}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
