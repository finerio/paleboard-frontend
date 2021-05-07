import React, { useEffect } from "react";

import { Jumbotron } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import P5Wrapper from "react-p5-wrapper";

import { endSession } from "../store/session/actions";

import { selectSocket } from "../store/session/selectors";
import { selectSessionId } from "../store/session/selectors";
import { selectUser } from "../store/user/selectors";

export default function SessionTherapist() {
  const dispatch = useDispatch();

  const history = useHistory();

  const socket = useSelector(selectSocket);

  console.log("socket", socket);

  const sessionId = useSelector(selectSessionId);
  const loggedInUser = useSelector(selectUser);

  useEffect(() => {
    if (!loggedInUser.token) {
      history.push("/");
    }

    if (!sessionId) {
      history.push("/create-session");
    }
  }, [sessionId, history, loggedInUser]);

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
      p.fill(0);
      p.ellipse(p.mouseX, p.mouseY, 36, 36);
    };

    p.newDrawing = function (data) {
      // console.log("p.newDrawing data=", data);

      p.noStroke();
      p.fill(255);
      p.ellipse(data.x, data.y, 36, 36);
    };

    //  console.log("p.newDrawing", p.newDrawing);

    if (socket) {
      socket.on("mouse", p.newDrawing);
    }
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
