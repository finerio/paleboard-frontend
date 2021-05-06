import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { login } from "../../store/user/actions";
import { selectToken, selectUser } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

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
    console.log("hi");
    event.preventDefault();

    dispatch(login(email, password, role));

    setEmail("");
    setPassword("");
    setRole("patient");
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Login</h1>
        <Form.Group controlId="formBasicEmail">
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
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
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
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Log in
          </Button>
        </Form.Group>
        <Link to="/signup" style={{ textAlign: "center" }}>
          Click here to sign up
        </Link>
      </Form>
    </Container>
  );
}
