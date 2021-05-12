import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

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
    <div className="relative ml-50 h-500 flex relative">
      <div className="font-sans text-white content-center w-full max-w-md ml-5 py-10 px-16">
        <h3 className="p-2 mt-1 mb-3 font-sans">Create Session</h3>
        <label>Select patient:</label>{" "}
        <select
          className="text-black ml-2"
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
          className="ml-2 border rounded-md outline-none mb-4"
        ></input>
        <p></p>
        <label>Therapist brush color: </label>{" "}
        <input
          type="color"
          value={therapistBrushColor}
          onChange={(event) => {
            setTherapistBrushColor(event.target.value);
          }}
          className="ml-2 border rounded-md outline-none mb-4"
        ></input>
        <p></p>
        <label>Patient brush color: </label>{" "}
        <input
          type="color"
          value={patientBrushColor}
          onChange={(event) => {
            setPatientBrushColor(event.target.value);
          }}
          className="ml-2 border rounded-md outline-none mb-4"
        ></input>
        <p></p>
        <button
          onClick={beginSession}
          className={`bg-green py-2 px-4 rounded border border-green focus:outline-none focus:border-green-dark`}
        >
          Begin Session
        </button>
      </div>
    </div>
  );
}
