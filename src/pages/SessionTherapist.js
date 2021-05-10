import React, { useState, useEffect } from "react";

import { Jumbotron } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import P5Wrapper from "react-p5-wrapper";

import { selectSession } from "../store/session/selectors";
import { selectUser, selectSocket } from "../store/user/selectors";

export default function SessionTherapist() {
  const history = useHistory();

  const socket = useSelector(selectSocket);

  const session = useSelector(selectSession);
  const loggedInUser = useSelector(selectUser);

  const sessionId = session.id;
  const sessionPatientId = session.patientId;

  const [sessionRequestAnswered, setSessionRequestAnswered] = useState(false);
  const [sessionMsgSent, setSessionMsgSent] = useState(false);

  if (!sessionMsgSent) {
    if (socket) {
      console.log("sending session message, sessionId = ", sessionId);

      socket.emit("session", sessionId);
    }

    setSessionMsgSent(true);
  }

  useEffect(() => {
    if (!loggedInUser.token) {
      history.push("/");
    }

    if (!sessionId) {
      history.push("/create-session");
    }
  }, [sessionId, history, loggedInUser]);

  function sessionRequestHandler(patientId) {
    console.log("sessionRequestHandler( patientId = ", patientId);

    console.log("sessionPatientId", sessionPatientId);

    console.log("sessionRequestAnswered", sessionRequestAnswered);

    console.log("sessionId", sessionId);
    if (sessionRequestAnswered === false) {
      if (sessionPatientId === patientId) {
        console.log("sessionPatientId === patientId");

        console.log("sending session message, sessionId = ", sessionId);

        socket.emit("session", sessionId);
      }
      setSessionRequestAnswered(true);
    }
  }

  if (socket) {
    socket.on("sessionRequest", sessionRequestHandler);
  }

  function sketch(p) {
    p.setup = function () {
      p.createCanvas(1030, 730);
      p.background(session.backgroundColor);
    };

    p.mouseDragged = function () {
      const data = { x: p.mouseX, y: p.mouseY };

      if (socket) {
        socket.emit("mouse", data);
      }

      p.noStroke();

      // console.log("session", session);

      p.fill(session.therapistBrushColor);
      p.ellipse(p.mouseX, p.mouseY, 20, 20);
    };

    p.newDrawing = function (data) {
      p.fill(session.patientBrushColor);
      p.ellipse(data.x, data.y, 20, 20);
    };

    if (socket) {
      socket.on("mouse", p.newDrawing);
    }
  }

  return (
    <div>
      <Jumbotron>
        <h1>Therapist view</h1>
      </Jumbotron>
      <P5Wrapper sketch={sketch} />
    </div>
  );
}

// <button onClick={endSessionHandler}>End Session</button>{" "}

/* <label>Brush color: </label>
<input
  type="color"
  value={brushColor}
  onChange={changeBrushColorHandler}
></input> */

// function changeBrushColorHandler(event) {
//    event.preventDefault();

//    setBrushColor(event.target.value);
//  }

// function endSessionHandler() {
//    dispatch(endSession());
//    history.push("/create-session");
//  }

// const [brushColor, setBrushColor] = useState("#FFFFFF");
