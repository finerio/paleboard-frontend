import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Jumbotron } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { selectMyPatients } from "../store/patients/selectors";
import { selectSessionId } from "../store/session/selectors";

import { fetchMyPatients } from "../store/patients/actions";
import { createSession } from "../store/session/actions";

export default function CreateSession() {
  const dispatch = useDispatch();
  const history = useHistory();

  const myPatients = useSelector(selectMyPatients);
  const sessionId = useSelector(selectSessionId);

  const [selectedPatient, setSelectedPatient] = useState(myPatients[0]);

  console.log("myPatients", myPatients);

  useEffect(() => {
    if (sessionId) {
      history.push("/session-therapist");
    }

    dispatch(fetchMyPatients());
  }, [dispatch, sessionId, history]);

  function beginSession(event) {
    event.preventDefault();

    console.log("selectedPatient", selectedPatient);

    dispatch(createSession(selectedPatient));
  }

  return (
    <div>
      <Jumbotron>
        <h1>Create Session</h1>
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
