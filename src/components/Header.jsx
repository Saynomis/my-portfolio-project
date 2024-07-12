import Button from "./Button";
import "../styles/header.css";

export default function Header() {
  return (
    <div className="nav-bar-container">
      <nav className="nav-bar-group">
        <Button title="Home" />
        <Button title="About" />
        <div className="logo">
          <a href="#">
            <p>Se</p>
          </a>
        </div>
        <Button title="Projects" />
        <Button title="Resume" />
      </nav>
    </div>
  );
}
