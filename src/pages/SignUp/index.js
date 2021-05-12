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
    <div className="relative ml-50 h-1000 flex">
      <div className="font-sans text-white content-center w-full max-w-md ml-5 py-10 px-16">
        <form>
          <h3 className="p-2 mt-1 mb-3 font-sans">Signup</h3>
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
          <fieldset controlid="formBasicName">
            <p>Name</p>
            <input
              className="text-black"
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="Enter name"
              required
            />
          </fieldset>
          <fieldset controlid="formBasicEmail">
            <p className="mt-2">Email address</p>
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
          {role === "patient" && (
            <div>
              <label className="mt-4">Select therapist:</label>
              <select
                className="ml-1 text-black"
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
          <fieldset className="mt-3">
            <button
              className="bg-green py-2 px-4 rounded border border-green focus:outline-none focus:border-green-dark"
              variant="primary"
              type="submit"
              onClick={submitForm}
            >
              Sign up
            </button>
          </fieldset>
          <p></p>
          <Link to="/login">Click here to log in</Link>
        </form>
      </div>
    </div>
  );
}
