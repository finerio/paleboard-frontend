import React, { useState, useEffect } from "react";
import { login } from "../../store/user/actions";
import { selectToken, selectUser } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const loggedInUser = useSelector(selectUser);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      if (loggedInUser.therapistId) {
        history.push("/wait-for-session");
      } else {
        history.push("/create-session");
      }
    }
  }, [token, history, loggedInUser.therapistId]);

  function submitForm(event) {
    //  console.log("hi");
    event.preventDefault();

    dispatch(login(email, password, role));

    setEmail("");
    setPassword("");
    setRole("patient");
  }

  return (
    <div>
      <form>
        <h1 className="mt-5 mb-5">Login</h1>
        <fieldset controlid="formBasicEmail">
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
          <label>Email address</label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
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
        <fieldset className="mt-5">
          <button variant="primary" type="submit" onClick={submitForm}>
            Log in
          </button>
        </fieldset>
        <Link to="/signup" style={{ textAlign: "center" }}>
          Click here to sign up
        </Link>
      </form>
    </div>
  );
}
