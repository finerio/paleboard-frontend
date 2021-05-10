import React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { logOut } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";

export default function Navigation() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  return (
    <div>
      <NavLink to="/" exact>
        paleboard
      </NavLink>
      {" | "}
      <span>{token ? user.email : " "}</span> {" | "}{" "}
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
}
