import React from "react";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { isLoggedIn, login, logout } = useAuth();

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>welcome back!</h1>
          <button onClick={handleLogout}>logout</button>
        </>
      ) : (
        <>
          <h1>Welcome to the home page</h1>
          <p>you are not logged in.</p>
          <button> onClick={handleLogin}</button>
        </>
      )}
      <h1>this is the home component</h1>
      <p> body content</p>
    </div>
  );
};

export default Home;
