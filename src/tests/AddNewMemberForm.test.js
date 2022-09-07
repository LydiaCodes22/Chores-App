import { render, screen } from "@testing-library/react";
import React from "react";
import AddNewMemberForm from "../components/AddNewMemberForm";
import { userAuthContext } from "../context/UserAuthContext";

describe("the new member form", () => {
  const testContext = { familyID: 1 };
  it("matches the snapshot", () => {
    const { asFragment } = render(
      <userAuthContext.Provider value={testContext.familyID}>
        <AddNewMemberForm />
      </userAuthContext.Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("should render basic fields", () => {
    render(
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <userAuthContext.Provider value={testContext.familyID}>
        <AddNewMemberForm />
      </userAuthContext.Provider>
    );
    expect(screen.getByText(/new member/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /send invite/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/choose a role/i)).toBeInTheDocument();
    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /back to dashboard/i })
    ).toBeInTheDocument();
  });
});
