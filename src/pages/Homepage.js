import React, { useState, useEffect } from "react";

import { Jumbotron } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { selectUser } from "../store/user/selectors";
import { selectMyPatients } from "../store/patients/selectors";

import { fetchMyPatients } from "../store/patients/actions";
import { createSession } from "../store/session/actions";

export default function Homepage() {
  const dispatch = useDispatch();

  const loggedInUser = useSelector(selectUser);
  const myPatients = useSelector(selectMyPatients);
  const [selectedPatient, setSelectedPatient] = useState(myPatients[0]);

  console.log("myPatients", myPatients);

  useEffect(() => {
    dispatch(fetchMyPatients());
  }, [dispatch]);

  function beginSession(event) {
    event.preventDefault();

    console.log("selectedPatient", selectedPatient);

    dispatch(createSession(selectedPatient));
  }

  if (loggedInUser.therapistId) {
    return (
      <div>
        <Jumbotron>
          <h1>Home</h1>
        </Jumbotron>
        <p>please wait for your session to begin</p>
      </div>
    );
  }

  return (
    <div>
      <Jumbotron>
        <h1>Home</h1>
      </Jumbotron>
      <label>Select patient:</label>{" "}
      <select
        onChange={(event) => {
          setSelectedPatient(event.target.value);
        }}
        value={selectedPatient}
      >
        {myPatients.map((patient) => (
          <option key={patient.id} value={patient.id}>
            {patient.name}
          </option>
        ))}
      </select>
      <p></p>
      <button onClick={beginSession}>Begin Session</button>
    </div>
  );
}

//<option value="patient 1">patient 1</option>
//      <option value="patient 2">patient 2</option>
