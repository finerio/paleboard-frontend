import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import P5Wrapper from "react-p5-wrapper";

import { selectSession } from "../store/session/selectors";
import { selectUser, selectSocket } from "../store/user/selectors";

export default function SessionPatient() {
  const history = useHistory();

  const session = useSelector(selectSession);
  const sessionId = session.id;

  const socket = useSelector(selectSocket);

  const loggedInUser = useSelector(selectUser);

  useEffect(() => {
    if (!loggedInUser.token) {
      console.log("sending to homepage");
      history.push("/");
    } else if (!sessionId) {
      console.log("sending to wait-for-session");
      history.push("/wait-for-session");
    }
  }, [sessionId, history, loggedInUser.token]);

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
      p.fill(session.patientBrushColor);
      p.ellipse(p.mouseX, p.mouseY, 20, 20);
    };

    p.newDrawing = function (data) {
      p.noStroke();
      p.fill(session.therapistBrushColor);
      p.ellipse(data.x, data.y, 20, 20);
    };

    if (socket) {
      socket.on("mouse", p.newDrawing);
    }
  }

  return (
    <div>
      <div className="font-sans text-white content-center w-full max-w-md py-3 px-16">
        <h3>Patient view</h3>
      </div>
      <P5Wrapper sketch={sketch} />
    </div>
  );
}
