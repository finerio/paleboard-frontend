import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Jumbotron } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { selectMyPatients } from "../store/patients/selectors";
import { selectSessionId } from "../store/session/selectors";

import { fetchMyPatients } from "../store/patients/actions";
import { createSession } from "../store/session/actions";
import { selectUser } from "../store/user/selectors";

export default function CreateSession() {
  const dispatch = useDispatch();
  const history = useHistory();

  const myPatients = useSelector(selectMyPatients);
  const sessionId = useSelector(selectSessionId);
  const loggedInUser = useSelector(selectUser);

  const [selectedPatient, setSelectedPatient] = useState("");
  const [gotPatients, setGotPatients] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#F0E6DF");
  const [therapistBrushColor, setTherapistBrushColor] = useState("#FFFFFF");
  const [patientBrushColor, setPatientBrushColor] = useState("#000000");

  if (myPatients && myPatients.length > 0 && !gotPatients) {
    setSelectedPatient(myPatients[0].id);
    setGotPatients(true);
  }

  useEffect(() => {
    if (!loggedInUser.token) {
      history.push("/");
    } else if (sessionId) {
      history.push("/session-therapist");
    } else {
      dispatch(fetchMyPatients());
    }
  }, [dispatch, sessionId, history, loggedInUser.token]);

  console.log("myPatients", myPatients);

  function beginSession(event) {
    event.preventDefault();

    console.log("selectedPatient", selectedPatient);

    dispatch(
      createSession(
        selectedPatient,
        backgroundColor,
        therapistBrushColor,
        patientBrushColor
      )
    );
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
      <label>Background color: </label>{" "}
      <input
        type="color"
        value={backgroundColor}
        onChange={(event) => {
          setBackgroundColor(event.target.value);
        }}
      ></input>
      <p></p>
      <label>Therapist brush color: </label>{" "}
      <input
        type="color"
        value={therapistBrushColor}
        onChange={(event) => {
          setTherapistBrushColor(event.target.value);
        }}
      ></input>
      <p></p>
      <label>Patient brush color: </label>{" "}
      <input
        type="color"
        value={patientBrushColor}
        onChange={(event) => {
          setPatientBrushColor(event.target.value);
        }}
      ></input>
      <p></p>
      <button onClick={beginSession}>Begin Session</button>
    </div>
  );
}
