import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Jumbotron } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { selectSessionId } from "../store/session/selectors";

import { fetchSession } from "../store/session/actions";

export default function WaitForSession() {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionId = useSelector(selectSessionId);

  useEffect(() => {
    if (sessionId) {
      history.push("/session-patient");
    }

    dispatch(fetchSession());
  }, [dispatch, sessionId, history]);

  return (
    <div>
      <Jumbotron>
        <h1>Wait For Session</h1>
      </Jumbotron>
      <p>please wait for your session to begin</p>
    </div>
  );
}
