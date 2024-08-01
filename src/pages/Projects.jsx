import "../styles/projects.css";
import { FaCode } from "react-icons/fa";

export default function Projects() {
  function handleClick(url) {
    window.open(url, "_blank");
  }
  return (
    <div className="container">
      <div className="text-container">
        <h1>To Do List</h1>
        <p>
          The To-Do List app is designed to help users manage their tasks
          efficiently and effectively. The app provides a user-friendly
          interface and a variety of features to ensure users can add, mark as
          complete and delete tasks with ease.
        </p>
        <div className="btn-container">
          <button
            onClick={() => handleClick("https://saynomis.github.io/ToDoList/")}
            className="btn"
          >
            Preview
          </button>
          <button
            onClick={() =>
              handleClick(
                "https://github.com/Saynomis/ToDoList/blob/main/src/App.jsx"
              )
            }
            className="btn"
          >
            Code <FaCode />
          </button>
        </div>
      </div>
      <div className="image-container">
        <img className="ntb" src="PC-preview.png" alt="Notebook Preview" />
        <img className="phone" src="phone-preview.png" alt="Phone Preview" />
      </div>
    </div>
  );
}
