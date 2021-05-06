import React, { useEffect } from "react";

import { Jumbotron } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import P5Wrapper from "react-p5-wrapper";

import { selectSessionId } from "../store/session/selectors";

export default function SessionPatient() {
  const history = useHistory();

  const sessionId = useSelector(selectSessionId);

  useEffect(() => {
    if (!sessionId) {
      history.push("/wait-for-session");
    }
  }, [sessionId, history]);

  function sketch(p) {
    p.setup = function () {
      p.createCanvas(600, 600);
      p.background(200);
    };

    p.mouseDragged = function () {
      p.noStroke();
      p.fill(50);
      p.ellipse(p.mouseX, p.mouseY, 36, 36);
    };
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
