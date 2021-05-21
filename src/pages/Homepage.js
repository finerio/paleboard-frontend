import React from "react";

import { Link } from "react-router-dom";

export default function Homepage() {
  
  console.log("hi");
  
  return (
    <div>
      <h3 className="relative p-5 mt-50 font-sans flex items-center text-white mr-6">
        <span>Please </span>{" "}
        <Link to="/login" className="mr-6 ml-6">
          {" "}
          log in{" "}
        </Link>{" "}
        <span> or </span>{" "}
        <Link to="/signup" className="mr-6 ml-6">
          {" "}
          sign up{" "}
        </Link>{" "}
        <span> to begin</span>
      </h3>
    </div>
  );
}
