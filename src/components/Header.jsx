import "../styles/header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="nav-bar-container">
      <ul>
        <li className="nav-link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="logo">
          <a href="/">Se</a>
        </li>
        <li className="nav-link">
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/resume">Resume</NavLink>
        </li>
      </ul>
    </div>
  );
}
