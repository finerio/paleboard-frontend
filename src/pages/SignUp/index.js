import React, { useState, useEffect } from "react";
import { signUp } from "../../store/user/actions";
import { fetchAllTherapists } from "../../store/therapists/actions";
import { selectToken, selectUser } from "../../store/user/selectors";
import { selectTherapists } from "../../store/therapists/selectors";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

export default function SignUp() {
  const allTherapists = useSelector(selectTherapists);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");
  const [selectedTherapist, setSelectedTherapist] = useState("");
  const [gotTherapists, setGotTherapists] = useState(false);

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const loggedInUser = useSelector(selectUser);
  const history = useHistory();

  if (allTherapists && allTherapists.length > 0 && !gotTherapists) {
    setSelectedTherapist(allTherapists[0].id);
    setGotTherapists(true);
  }

  useEffect(() => {
    if (token !== null) {
      if (loggedInUser.therapistId) {
        history.push("/wait-for-session");
      } else {
        history.push("/create-session");
      }
    }

    dispatch(fetchAllTherapists());
  }, [token, history, loggedInUser.therapistId, dispatch]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(name, email, password, role, selectedTherapist));

    setEmail("");
    setPassword("");
    setName("");
    setRole("patient");
    setSelectedTherapist(allTherapists[0].id);
  }

  return (
    <div>
      <form className="mt-5">
        <h1 className="mt-5 mb-5">Signup</h1>
        <label>Role: </label>
        <p></p>
        <div
          type="radio"
          name="role"
          defaultValue="patient"
          onChange={(event) => setRole(event.target.value)}
        >
          <input
            type="radio"
            value="patient"
            name="role"
            defaultChecked={true}
          ></input>
          <label>Patient</label>{" "}
          <input type="radio" value="therapist" name="role"></input>
          <label>Therapist</label>
        </div>{" "}
        <p></p>
        <fieldset controlid="formBasicName">
          <label>Name</label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Enter name"
            required
          />
        </fieldset>
        <fieldset controlid="formBasicEmail">
          <label>Email address</label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
          <p className="text-muted">
            We'll never share your email with anyone else.
          </p>
        </fieldset>
        <fieldset controlid="formBasicPassword">
          <label>Password</label>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </fieldset>
        {role === "patient" && (
          <div>
            <label>Select therapist:</label>
            <select
              onChange={(event) => {
                setSelectedTherapist(event.target.value);
              }}
              value={selectedTherapist}
            >
              {allTherapists.map((therapist) => (
                <option key={therapist.id} value={therapist.id}>
                  {therapist.name}
                </option>
              ))}
            </select>
            <p></p>
          </div>
        )}
        <fieldset className="mt-5">
          <button variant="primary" type="submit" onClick={submitForm}>
            Sign up
          </button>
        </fieldset>
        <Link to="/login">Click here to log in</Link>
      </form>
    </div>
  );
}
