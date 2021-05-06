import React from "react";

import { Jumbotron } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import P5Wrapper from "react-p5-wrapper";

import { endSession } from "../store/session/actions";

import { selectSocket } from "../store/session/selectors";

export default function SessionTherapist() {
  const dispatch = useDispatch();

  const history = useHistory();

  const socket = useSelector(selectSocket);

  console.log("socket", socket);

  function endSessionHandler() {
    dispatch(endSession());
    history.push("/create-session");
  }

  function sketch(p) {
    p.setup = function () {
      p.createCanvas(600, 600);
      p.background(200);
    };

    p.mouseDragged = function () {
      const data = { x: p.mouseX, y: p.mouseY };

      if (socket) {
        socket.emit("mouse", data);
      }

      p.noStroke();
      p.fill(255);
      p.ellipse(p.mouseX, p.mouseY, 36, 36);
    };
  }

  return (
    <div>
      <Jumbotron>
        <h1>Session Therapist</h1>
      </Jumbotron>
      <button onClick={endSessionHandler}>End Session</button>
      <P5Wrapper sketch={sketch} />
    </div>
  );
}
