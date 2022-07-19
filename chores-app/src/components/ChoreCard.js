/* eslint-disable react/prop-types */
// not all props required all the time
import React, { useState } from "react";
import PropTypes from "prop-types";
import EditChore from "./EditChore";
// need to add the functionality to these functions; edit button should open an edit view with populated fields based on the chore it was clicked in
// the delete button will remove the chore from the database, and a nice to have would be a "confirm delete".
const ChoreCard = ({
  name,
  price,
  status,
  component,
  choreID,
  owner,
  setRerender,
}) => {
  const [editing, setEditing] = useState(false);
  const editButton = (event) => {
    event.preventDefault();
    setEditing(true);
  };

  const deleteButton = () => {};

  const acceptButton = () => {
    // Accept:
    // -> chore status goes to Unavailable
    // -> chore.owner resets to null
    // -> money goes into child's balance
  };
  const rejectButton = () => {
    // Reject:
    // -> chore status changes to Taken (which stops it rendering here)
    // -> chore.owner stays as the childID
  };
  const doneButton = () => {
    // done button should change the status and owner of the chore in the DB
  };
  const takeButton = () => {
    // this will assign the user ID to the chore.owner & update the chore.status to T
  };

  if (editing) {
    return (
      <EditChore
        name={name}
        price={price}
        status={status}
        setEditing={setEditing}
        choreID={choreID}
        setRerender={setRerender}
        owner={owner}
      />
    );
  }
  return (
    <div>
      <div>{name}</div>
      <div>£{price}</div>
      {!!status && <div>{status}</div>}
      {component === "ParentDashboard" && (
        <button type="button" onClick={editButton}>
          Edit
        </button>
      )}
      {component === "ParentDashboard" && (
        <button type="button" onClick={deleteButton}>
          Delete
        </button>
      )}
      {component === "ChoresToApprove" && (
        <button type="button" onClick={acceptButton}>
          Accept
        </button>
      )}
      {component === "ChoresToApprove" && (
        <button type="button" onClick={rejectButton}>
          Reject
        </button>
      )}
      {component === "ChildDashboard" && (
        <button type="button" onClick={doneButton}>
          Done
        </button>
      )}
      {component === "FindAvailableChores" && (
        <button type="button" onClick={takeButton}>
          Take
        </button>
      )}
    </div>
  );
};

ChoreCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ChoreCard;
