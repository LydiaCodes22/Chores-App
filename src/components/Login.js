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

  const [fields, setFields] = useState(initialState.fields);
  const [error, setError] = useState();
  const handleLogIn = (event) => {
    event.preventDefault();
    // logIn(fields.email, fields.password)
    // .then(() => {
    //   return
    axios
      .get(`http://localhost:3300/family/users/?email=${fields.email}`)
      // })
      .then((response) => {
        const [{ userID, role, familyID }] = response.data;
        localStorage.setItem("userID", JSON.stringify(userID));
        localStorage.setItem("userRole", JSON.stringify(role));
        localStorage.setItem("familyID", JSON.stringify(familyID));
        return logIn(fields.email, fields.password);
      })
      .then(() => {
        const storedUserRole = localStorage.getItem("userRole");
        if (storedUserRole === '"parent"') {
          navigate("/parentdashboard");
        } else {
          navigate("/childdashboard");
        }
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  const handleFieldChange = (event) => {
    event.preventDefault();
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  return (
    <form className="login-form" onSubmit={handleLogIn}>
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
      <button type="submit" className="btn btn-fill_purple">
        Log in
      </button>
      <span>{error}</span>
    </form>
  );
};

export default Login;
