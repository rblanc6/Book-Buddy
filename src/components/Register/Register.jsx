/* TODO - add your code to create a functional React component that renders a registration form */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "./RegisterSlice";

export default function Register() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [registerUser] = useRegisterMutation();
  const [error, setError] = useState(null);
  const change = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(form).unwrap();
      console.log(response);
      navigate("/account");

    } catch (err) {
      setError(err.data.message);
      console.log(err.data.message);
    }
  };

  return (
    <div>
      <h3>Register</h3>

      <form onSubmit={submit}>
        <div className="form-group">
          <label>First name: </label>
          <input
            type="text"
            placeholder="Enter first name"
            name="firstname"
            onChange={change}
          />
        </div>
        <div className="form-group">
          <label>Last name: </label>
          <input
            type="text"
            placeholder="Enter last name"
            name="lastname"
            onChange={change}
          />
        </div>
        <div className="form-group">
          <label>Email address: </label>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={change}
          />
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
            onChange={change}
          />

          <p className="passwordField">
            Must contain at least one number and one uppercase and lowercase
            letter, and at least 8 or more characters
          </p>
        </div>
        <button type="submit">Submit</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}
