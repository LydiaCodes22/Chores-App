/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const initialState = {
    fields: {
      email: "",
      password: "",
    },
  };
  // const userRole = "parent"; // to check on functionality - should come from context

  const [fields, setFields] = useState(initialState.fields);
  const handleLogIn = (event) => {
    axios.get("");
    event.preventDefault();
    logIn(fields.email, fields.password)
      .then(() => {
        return axios.get(
          `http://localhost:3300/family/users/?email=${fields.email}`
        );
      })
      .then((response) => {
        console.log(response.data);
        const [{ userID, role, familyID }] = response.data;
        localStorage.setItem("userID", JSON.stringify(userID));
        localStorage.setItem("userRole", JSON.stringify(role));
        localStorage.setItem("familyID", JSON.stringify(familyID));

        if (role === "parent") {
          navigate("/parentdashboard");
        } else {
          navigate("/childdashboard");
        }
        // needs to axios.get and set context for the app.
        // console.log(success);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleFieldChange = (event) => {
    event.preventDefault();
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={handleLogIn}>
      <label htmlFor="email">Your Email</label>
      <input
        type="email"
        name="email"
        required
        placeholder="e.g example@example.com"
        value={fields.email}
        onChange={handleFieldChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        required
        placeholder="*******"
        value={fields.password}
        onChange={handleFieldChange}
      />
      <button type="submit">Log in</button>
    </form>
  );
};

export default Login;
