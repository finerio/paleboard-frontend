import React, { useState, useEffect } from "react";

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
      p.createCanvas(850, 670);

      console.log("session.backgroundColor", session.backgroundColor);

      p.background(
        session.backgroundColor ? session.backgroundColor : "#f0e6df"
      );
    };

    p.mouseDragged = function () {
      const data = { x: p.mouseX, y: p.mouseY };

      if (socket) {
        socket.emit("mouse", data);
      }

      p.noStroke();
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
      <div className="font-sans text-white content-center w-full max-w-md py-3 px-16">
        <h3>Therapist view</h3>
      </div>
      <P5Wrapper sketch={sketch} />
    </div>
  );
}
