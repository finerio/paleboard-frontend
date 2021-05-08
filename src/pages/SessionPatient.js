import React, { useEffect } from "react";

import { Jumbotron } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import P5Wrapper from "react-p5-wrapper";

import { fetchSession } from "../store/session/actions";

import { selectSessionId } from "../store/session/selectors";
import { selectUser, selectSocket } from "../store/user/selectors";

export default function SessionPatient() {
  const history = useHistory();
  const dispatch = useDispatch();

  const sessionId = useSelector(selectSessionId);

  const socket = useSelector(selectSocket);

  const loggedInUser = useSelector(selectUser);

  useEffect(() => {
    if (!loggedInUser.token) {
      history.push("/");
    } else if (!sessionId) {
      history.push("/wait-for-session");
    } else {
      dispatch(fetchSession());
    }
  }, [sessionId, history, dispatch, loggedInUser.token]);

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

    p.newDrawing = function (data) {
      // console.log("p.newDrawing data=", data);

      p.noStroke();
      p.fill(0);
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
        <h1>Session Patient</h1>
      </Jumbotron>
      <P5Wrapper sketch={sketch} />
    </div>
  );
}
