import React, { useEffect } from "react";

import { Jumbotron } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import P5Wrapper from "react-p5-wrapper";

// import { endSession } from "../store/session/actions";

import { selectSessionId, selectPatientId } from "../store/session/selectors";
import { selectUser, selectSocket } from "../store/user/selectors";

export default function SessionTherapist() {
  //   const dispatch = useDispatch();

  const history = useHistory();

  const socket = useSelector(selectSocket);

  const sessionId = useSelector(selectSessionId);
  const loggedInUser = useSelector(selectUser);
  const sessionPatientId = useSelector(selectPatientId);

  useEffect(() => {
    if (!loggedInUser.token) {
      history.push("/");
    }

    if (!sessionId) {
      history.push("/create-session");
    }
  }, [sessionId, history, loggedInUser]);

  function sessionRequestHandler(patientId) {
    if (sessionPatientId === patientId) {
      socket.emit("session", sessionId);
    }
  }

  if (socket) {
    socket.on("sessionRequest", sessionRequestHandler);
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
      p.ellipse(p.mouseX, p.mouseY, 20, 20);
    };

    p.newDrawing = function (data) {
      p.fill(255);
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
