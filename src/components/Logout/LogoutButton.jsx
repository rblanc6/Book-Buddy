// import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";

// const LogoutButton = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const history = useHistory();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const logout = () => {
//     // Clear only the UI state, don't touch the token
//     setIsLoggedIn(false);

//     // Optionally, store the token elsewhere or keep it in localStorage
//     const token = localStorage.getItem("token");
//     sessionStorage.setItem("token", token);

//     // Redirect the user to a different page (login, homepage, etc.)
//     history.push("/login");
//   };

//   return isLoggedIn ? (
//     <button onClick={logout}>Logout</button>
//   ) : (
//     <div>Please log in</div>
//   );
// };

// export default LogoutButton;
