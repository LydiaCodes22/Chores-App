/* eslint-disable react/jsx-no-constructed-context-values */
import { render, screen } from "@testing-library/react";
import React from "react";
import ChildDashboard from "../components/ChildDashboard";
import { userAuthContext } from "../context/UserAuthContext";

describe("the parents dashboard", () => {
  const validChore = {
    choreID: "1",
    name: "valid chore",
    price: "5",
    owner: "1",
  };
  const familyID = "";
  const chores = [validChore];
  const setChores = () => {};
  const userID = "1";
  // want to be able to test the chore is displayed

  it("matches the snapshot", () => {
    const { asFragment } = render(
      <userAuthContext.Provider value={{ familyID, chores, setChores, userID }}>
        <ChildDashboard />
      </userAuthContext.Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("should render basic fields", () => {
    render(
      <userAuthContext.Provider value={{ familyID, chores, setChores, userID }}>
        <ChildDashboard />
      </userAuthContext.Provider>
    );
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /find a new chore/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/my chores/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /request amount/i })
    ).toBeInTheDocument();
  });
});
