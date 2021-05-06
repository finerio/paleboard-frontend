import React, { /*useState,*/ useEffect } from "react";

import { Jumbotron } from "react-bootstrap";
import { useSelector /*, useDispatch*/ } from "react-redux";
import { useHistory } from "react-router-dom";

import { selectSessionId } from "../store/session/selectors";

// import { selectUser } from "../store/user/selectors";
// import { selectMyPatients } from "../store/patients/selectors";

// import { fetchMyPatients } from "../store/patients/actions";
// import { createSession } from "../store/session/actions";

export default function SessionPatient() {
  const history = useHistory();

  const sessionId = useSelector(selectSessionId);

  useEffect(() => {
    if (!sessionId) {
      history.push("/wait-for-session");
    }
  }, [sessionId, history]);

  //   const dispatch = useDispatch();

  //   const loggedInUser = useSelector(selectUser);
  //   const myPatients = useSelector(selectMyPatients);
  //   const [selectedPatient, setSelectedPatient] = useState(myPatients[0]);

  //   console.log("myPatients", myPatients);

  //   useEffect(() => {
  //     dispatch(fetchMyPatients());
  //   }, [dispatch]);

  return (
    <div>
      <Jumbotron>
        <h1>Session Patient</h1>
      </Jumbotron>
    </div>
  );
}
