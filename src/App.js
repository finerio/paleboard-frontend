import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import SessionTherapist from "./pages/SessionTherapist";
import SessionPatient from "./pages/SessionPatient";
import CreateSession from "./pages/CreateSession";
import WaitForSession from "./pages/WaitForSession";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/session-therapist" component={SessionTherapist} />
        <Route path="/session-patient" component={SessionPatient} />
        <Route path="/wait-for-session" component={WaitForSession} />
        <Route path="/create-session" component={CreateSession} />
      </Switch>
    </div>
  );
}

export default App;
