/* TODO - add your code to create a functional React component that renders a login form */
import React from "react";
import { useLoginMutation } from "./LoginSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
   
    try {
      const result = await login({ email, password }).unwrap();
      console.log(result);
      navigate("/account");
      localStorage.getItem("token");
      //   setToken(result.token);
      setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
      console.error(error.data.message);
    }
  }
  return (
    <>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>
            Email:{" "}
            <input
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="field">
          <label>
            Password:{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <button className="button">Submit</button>
      </form>
    </>
  );
}
