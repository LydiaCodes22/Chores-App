import React, { useEffect, useState } from "react";
import axios from "axios";
import ChoreCard from "./ChoreCard";
import "../styles/ParentDashboard.css";

import { useUserAuth } from "../context/UserAuthContext";

// eslint-disable-next-line react/prop-types
const ParentDashboard = ({ familyID }) => {
  const { chores, setChores } = useUserAuth();
  const [myChildren, setMyChildren] = useState([]);
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
    // this can be altered to be a link to each child's profile once the child profile component is created
    axios
      .get(
        `http://localhost:3300/family/users/?familyID=${familyID}&role=child`
      )
      .then((response) => {
        setMyChildren(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="container parent-dashboard-container">
      <h1>Dashboard</h1>
      <h2>My Family</h2>
      <button type="button" className="btn btn-narrow btn-stroke_white">
        <a href="/newmember">+ Invite new member</a>
      </button>
      <div className="children-container">
        {myChildren.map((child) => (
          <button
            className="btn btn-fill_pink"
            type="button"
            key={child.userID}
          >
            <a href={`/childprofile?email=${child.email}`}>{child.name}</a>
          </button>
        ))}
      </div>
      <h2>Chores</h2>
      <div className="btn-container">
        <button type="button" className="btn btn-narrow btn-stroke_white">
          <a href="/addchore">+ Add new chore</a>
        </button>
        <button type="button" className="btn btn-narrow btn-fill_peach">
          <a href="/approvechores">Manage chores pending approval</a>
        </button>
      </div>
      {/* mapping function to go through the chores list and render them. */}
      {chores.map((chore) => (
        <ChoreCard
          key={chore.choreID}
          name={chore.name}
          price={chore.price}
          status={chore.status}
          choreID={chore.choreID}
          choreOwner={chore.owner}
          component="ParentDashboard"
        />
      ))}
      <div />
    </div>
  );
};

export default ParentDashboard;
