import React, { useState, useEffect } from "react";
import { login } from "../../store/user/actions";
import { selectToken, selectUser } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const loggedInUser = useSelector(selectUser);
  const history = useHistory();
  
  console.log("hi");

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
    <div className="relative ml-50 h-1000 flex">
      <div className="font-sans text-white content-center w-full max-w-md ml-5 py-10 px-16">
        <form>
          <h3 className="p-2 mt-1 mb-3 font-sans">Login</h3>
          <fieldset controlid="formBasicEmail">
            <div
              type="radio"
              name="role"
              defaultValue="patient"
              onChange={(event) => setRole(event.target.value)}
            >
              <label>Role: </label>
              <input
                className="ml-2"
                type="radio"
                value="patient"
                name="role"
                defaultChecked={true}
              ></input>
              <label className="ml-0.5">Patient</label>{" "}
              <input
                className="ml-2"
                type="radio"
                value="therapist"
                name="role"
              ></input>
              <label className="ml-0.5">Therapist</label>
            </div>{" "}
            <p>Email address</p>
            <input
              className="text-black"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter email"
              required
            />
          </fieldset>

          <fieldset controlid="formBasicPassword">
            <p className="mt-2">Password</p>
            <input
              className="text-black"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </fieldset>
          <fieldset className="mt-3">
            <button
              className="bg-green py-2 px-4 rounded border border-green focus:outline-none focus:border-green-dark"
              variant="primary"
              type="submit"
              onClick={submitForm}
            >
              Log in
            </button>
          </fieldset>
          <p></p>
          <Link className="mt-5" to="/signup" style={{ textAlign: "center" }}>
            Click here to sign up
          </Link>
        </form>
      </div>
    </div>
  );
}
