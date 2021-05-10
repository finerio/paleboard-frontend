import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { signUp } from "../../store/user/actions";
import { fetchAllTherapists } from "../../store/therapists/actions";
import { selectToken, selectUser } from "../../store/user/selectors";
import { selectTherapists } from "../../store/therapists/selectors";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

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
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Signup</h1>
        <Form.Label>Role: </Form.Label>
        <p></p>
        <ToggleButtonGroup
          type="radio"
          name="role"
          defaultValue="patient"
          onChange={(value) => setRole(value)}
        >
          <ToggleButton value="patient">Patient</ToggleButton>
          <ToggleButton value="therapist">Therapist</ToggleButton>
        </ToggleButtonGroup>{" "}
        <p></p>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Enter name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
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
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Sign up
          </Button>
        </Form.Group>
        <Link to="/login">Click here to log in</Link>
      </Form>
    </Container>
  );
}
