import React from "react";
import Login from "./Login";
import "../styles/HomePage.css";
import "../styles/Login.css";

// eslint-disable-next-line react/prop-types
const HomePage = () => {
  return (
    <div className="container home-container">
      <h1>
        Welcome to
        <br />
        <span className="span-bish"> Bish </span>
        <span className="span-bash">Bash </span>
        <span className="span-dosh">Dosh! </span>
      </h1>
      <br />
      <Login />
      <p>Not yet a member?</p>
      <button type="button" className="btn btn-stroke_purple btn-sign-up">
        <a href="/signup">Sign Up!</a>
      </button>
    </div>
  );
};
export default HomePage;
