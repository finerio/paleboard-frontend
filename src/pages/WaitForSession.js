import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Jumbotron } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { selectSessionId } from "../store/session/selectors";
import { selectUser, selectSocket } from "../store/user/selectors";

import { fetchSession } from "../store/session/actions";

export default function WaitForSession() {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionId = useSelector(selectSessionId);
  const loggedInUser = useSelector(selectUser);
  const socket = useSelector(selectSocket);

  const [gotSessionMsg, setGotSessionMsg] = useState(false);

  useEffect(() => {
    console.log("sessionId", sessionId);

    if (!loggedInUser.token) {
      history.push("/");
    } else if (sessionId) {
      history.push("/session-patient");
    }
  }, [dispatch, sessionId, history, loggedInUser.token, gotSessionMsg]);

  function sessionStartedHandler(sessionId) {
    console.log("sessionStartedHandler(sessionId = ", sessionId);

    dispatch(fetchSession(sessionId));

    setGotSessionMsg(true);
  }

  if (socket) {
    socket.on("session", sessionStartedHandler);
    socket.emit("sessionRequest", loggedInUser.id);
  }

  return (
    <div>
      <Jumbotron>
        <h1>Wait For Session</h1>
      </Jumbotron>
      <p>Please wait for your session to begin</p>
    </div>
  );
}
