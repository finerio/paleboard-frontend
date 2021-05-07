import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Jumbotron } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { selectSessionId } from "../store/session/selectors";
import { selectUser } from "../store/user/selectors";

import { fetchSession } from "../store/session/actions";

export default function WaitForSession() {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionId = useSelector(selectSessionId);
  const loggedInUser = useSelector(selectUser);

  useEffect(() => {
    console.log("sessionId", sessionId);

    if (!loggedInUser.token) {
      history.push("/");
    } else if (sessionId) {
      history.push("/session-patient");
    } else {
      dispatch(fetchSession());
    }
  }, [dispatch, sessionId, history, loggedInUser.token]);

  return (
    <div>
      <Jumbotron>
        <h1>Wait For Session</h1>
      </Jumbotron>
      <p>Please wait for your session to begin</p>
    </div>
  );
}
