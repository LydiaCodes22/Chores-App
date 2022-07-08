/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";

const SignUpForm = () => {
  const initialState = {
    fields: {
      familyName: "",
      yourName: "",
      yourEmail: "",
      password: "",
      confirmPassword: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);

  const createAccount = () => {
    // some axios code to go here to send the field data to the database
    // currently the fields will reset but we can change this so we  change the page to be the parent's home page once this is
    setFields(initialState.fields);
  };
  const handleFieldChange = (event) => {
    event.preventDefault();
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="sign-up-container">
      <h1>Sign Up</h1>
      <div>
        <form onSubmit={createAccount}>
          <label htmlFor="familyName">Family Name </label>
          <input
            name="familyName"
            required
            type="text"
            placeholder="e.g. The Cool Gang"
            value={fields.familyName}
            onChange={handleFieldChange}
          />

          <label htmlFor="yourName">Your Name </label>
          <input
            name="yourName"
            required
            type="text"
            placeholder="e.g Mommy"
            value={fields.yourName}
            onChange={handleFieldChange}
          />

          <label htmlFor="yourEmail">Your Email</label>
          <input
            type="email"
            name="yourEmail"
            required
            placeholder="e.g example@example.com"
            value={fields.email}
            onChange={handleFieldChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            data-testid="password"
            required
            placeholder="*******"
            value={fields.password}
            onChange={handleFieldChange}
          />

          <label htmlFor="confirmPassword">Confirm Password </label>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="*******"
            value={fields.confirmPassword}
            onChange={handleFieldChange}
          />

          <button type="submit">Create Account</button>
        </form>
      </div>
      <p>
        You will be able to invite more family members once you make your
        account.
      </p>
    </div>
  );
};

export default SignUpForm;