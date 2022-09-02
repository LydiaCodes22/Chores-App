/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import ChoreCard from "./ChoreCard";
import "../styles/ChildProfile.css";
import { useUserAuth } from "../context/UserAuthContext";

const ChildProfile = ({ userID, familyID }) => {
  const [childDetails, setChildDetails] = useState({ name: "" });
  const [searchParams] = useSearchParams();
  const { chores, setChores } = useUserAuth();
  const email = searchParams.get("email");
  useEffect(() => {
    if (familyID) {
      axios
        .get(`http://localhost:3300/family/${familyID}/chores`)
        .then((response) => {
          setChores(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      console.log("no family ID");
    }
  }, []);
  useEffect(() => {
    if (userID) {
      axios
        .get(`http://localhost:3300/family/users?email=${email}`)
        .then((response) => {
          setChildDetails(response.data[0]);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      console.log("no user ID");
    }
  }, []);
  return (
    <div className="child-profile-container">
      <h1>{`${childDetails.name}'s Account`}</h1>
      <div className="child-profile-section">
        <h2>Balance: £0</h2>
        <span>
          Requested amount: £0{" "}
          <button type="button" className="btn chore-btn btn-fill_peach">
            Approve Request
          </button>
        </span>
        {
          // FUTURE DEVELOPMENT: to get this from the DB.
        }
      </div>
      <div className="child-profile-section">
        <h2>{`${childDetails.name}'s Chores`}</h2>
        {chores
          // eslint-disable-next-line eqeqeq
          .filter((chore) => chore.owner == childDetails.userID)
          .map((chore) => (
            <ChoreCard
              key={chore.choreID}
              name={chore.name}
              price={chore.price}
              choreID={chore.choreID}
              status={chore.status}
            />
          ))}
      </div>
      <div>
        <button type="button" className="btn btn-narrow btn-stroke_white">
          <a href="/parentdashboard">Back To Dashboard</a>
        </button>
      </div>
    </div>
  );
};

export default ChildProfile;
