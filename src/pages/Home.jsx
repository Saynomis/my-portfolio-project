import profilePicture from "../assets/profile-picture.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import "../styles/home.css";

export default function Home() {
  return (
    <div id="content-container">
      <main className="main">
        <img id="my-picture" src={profilePicture} alt="" />
        <div className="main-content">
          <h1>
            Hi, I{"'"}m <span className="blue">Simon</span>{" "}
            <span id="wave">👋🏻</span>
          </h1>
          <h2>
            I{"'"}m a <span className="blue">F</span>rontend{" "}
            <span className="blue">R</span>eact <span className="blue">D</span>
            eveloper.
          </h2>
          <ul className="list">
            <li className="list-element">
              {" "}
              <span className="list-icons">🫖</span>fueled by tea
            </li>
            <li className="list-element">
              {" "}
              <span className="list-icons">🌍</span>based in EU
            </li>
            <li className="list-element">
              {" "}
              <span className="list-icons">👨🏻‍💻</span>junior FE dev
            </li>
            <li className="list-element">
              {" "}
              <span className="list-icons">📧</span>ehrlich97@gmail.com
            </li>
          </ul>
          <div className="social-icons">
            <a href="https://www.facebook.com/simon.ehrlich.10/">
              <FaFacebookF />
            </a>
            <a href="https://www.facebook.com/simon.ehrlich.10/">
              <FaInstagram />
            </a>
            <a href="https://github.com/Saynomis">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/simon-ehrlich-993151214/">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
