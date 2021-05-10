import React from "react";

import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <h1>Home</h1>
      <span>Please </span>
      <Link to="/login">log in</Link>
      <span> or </span>
      <Link to="/signup">sign up</Link>
      <span> to begin</span>
    </div>
  );
}
