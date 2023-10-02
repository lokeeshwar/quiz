import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navbar">
      <Link to="/">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/quiz">Quiz</Link>
    </div>
  );
}
