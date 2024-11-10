import { FaCircle } from "react-icons/fa";
import "../styles/about.css";

export default function About() {
  return (
    <div className="main-container">
      <section className="block-container">
        <div className="upper-line">
          <i className="red">
            <FaCircle />
          </i>
          <i className="yellow">
            <FaCircle />
          </i>
          <i className="green">
            <FaCircle />
          </i>
        </div>
        <div>
          <p>
            {" "}
            <span className="super-color">simonehrlich $</span> cat aboutSimon
          </p>
          <p>
            <span className="super-color">aboutsimon (main) $</span> Hello!{" "}
            {"I'm"} Simon 🙋🏻‍♂️. Junior in web development focused on frontend
            React, looking to find a job as a junior frontend developer. In the
            last six months, I have spent time self-learning by completing
            courses.
          </p>
        </div>
      </section>
      <section className="block-container">
        <div className="upper-line">
          <i className="red">
            <FaCircle />
          </i>
          <i className="yellow">
            <FaCircle />
          </i>
          <i className="green">
            <FaCircle />
          </i>
        </div>
        <div>
          <p>
            {" "}
            <span className="super-color">simonehrlich $</span> cd skills/tools
          </p>
          <p>
            {" "}
            <span className="super-color">skills/tools (main) $</span> ls
          </p>
          <ul>
            <li>html5</li>
            <li>css3</li>
            <li>javascript</li>
            <li>bootstrap</li>
            <li>react</li>
            <li>git</li>
            <li>github</li>
          </ul>
        </div>
      </section>
      <section className="block-container">
        <div className="upper-line">
          <i className="red">
            <FaCircle />
          </i>
          <i className="yellow">
            <FaCircle />
          </i>
          <i className="green">
            <FaCircle />
          </i>
        </div>
        <div>
          <p>
            {" "}
            <span className="super-color">simonehrlich $</span> cd
            hobbies/interests
          </p>
          <p>
            <span className="super-color">hobbies/interests (main) $</span> ls
          </p>
          <ul>
            <li>🍿 movies</li>
            <li>👨🏼‍🍳 cooking</li>
            <li>🎮 gaming</li>
            <li>🏊🏼‍♂️ swimming</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
