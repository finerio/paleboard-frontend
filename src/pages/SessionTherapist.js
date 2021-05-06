import React /*, { useState, useEffect }*/ from "react";

import { Jumbotron } from "react-bootstrap";
import { /*useSelector,*/ useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// import { selectUser } from "../store/user/selectors";
// import { selectMyPatients } from "../store/patients/selectors";

// import { fetchMyPatients } from "../store/patients/actions";
import { endSession } from "../store/session/actions";

export default function SessionTherapist() {
  const dispatch = useDispatch();

  const history = useHistory();

  //   const loggedInUser = useSelector(selectUser);
  //   const myPatients = useSelector(selectMyPatients);
  //   const [selectedPatient, setSelectedPatient] = useState(myPatients[0]);

  //   console.log("myPatients", myPatients);

  //   useEffect(() => {
  //     dispatch(fetchMyPatients());
  //   }, [dispatch]);

  function endSessionHandler() {
    dispatch(endSession());
    history.push("/create-session");
  }

  return (
    <div>
      <Jumbotron>
        <h1>Session Therapist</h1>
      </Jumbotron>
      <button onClick={endSessionHandler}>End Session</button>
    </div>
  );
}
