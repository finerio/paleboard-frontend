import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { selectSession } from "../store/session/selectors";
import { selectUser, selectSocket } from "../store/user/selectors";

import { fetchSession } from "../store/session/actions";

export default function WaitForSession() {
  const dispatch = useDispatch();
  const history = useHistory();

  const session = useSelector(selectSession);

  const fetchedSessionId = session.id;
  const loggedInUser = useSelector(selectUser);
  const socket = useSelector(selectSocket);

  const [sentSessionRequest, setSentSessionRequest] = useState(false);

  useEffect(() => {
    console.log("fetchedSessionId", fetchedSessionId);

    if (!loggedInUser.token) {
      history.push("/");
    } else if (fetchedSessionId) {
      history.push("/session-patient");
    }
  }, [dispatch, fetchedSessionId, history, loggedInUser.token]);

  function sessionStartedHandler(sessionId) {
    console.log("sessionStartedHandler(sessionId = ", sessionId);

    console.log("fetchedSessionId", fetchedSessionId);

    if (fetchedSessionId === null) {
      console.log(
        "fetchedSessionId is null, fetchedSessionId = fetchedSessionId"
      );

      if (sessionId) {
        dispatch(fetchSession(sessionId));
      }
    }
  }

  if (socket) {
    socket.on("session", sessionStartedHandler);

    if (!sentSessionRequest) {
      socket.emit("sessionRequest", loggedInUser.id);

      setSentSessionRequest(true);
    }
  }

  return (
    <div>
      <h1>Wait For Session</h1>
      <p>Please wait for your session to begin</p>
    </div>
  );
}
