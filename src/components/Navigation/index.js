import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { logOut } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";

export default function Navigation() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const history = useHistory();

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <NavLink
        className="josefin flex items-center text-white mr-6"
        to="/"
        exact
      >
        paleboard
      </NavLink>
      {" | "}
      <span className="josefin flex items-center text-white mr-6">
        {token ? user.email : " "}
      </span>{" "}
      {" | "}{" "}
      {token ? (
        <button
          className="josefin flex items-center text-white mr-6"
          onClick={() => dispatch(logOut())}
        >
          log out
        </button>
      ) : (
        <button
          className="josefin flex items-center text-white mr-6"
          onClick={() => history.push("/login")}
        >
          log in
        </button>
      )}
    </nav>
  );
}
