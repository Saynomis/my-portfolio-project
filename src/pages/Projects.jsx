// import Project from "../components/Project";
// import pcImageToDoList from '/PC-preview.png'
// import phoneImageToDoList from '/phone-preview.png'
// import previewURL from "https://saynomis.github.io/ToDoList/"
// import codeURL from "https://github.com/Saynomis/ToDoList/blob/main/src/App.jsx"
import { FaCode } from "react-icons/fa";
import "../styles/projects.css";

export default function Projects() {
  function handleClick(url) {
    window.open(url, "_blank");
  }
  return (
    <>
      {/* <Project
        title="To Do List"
        description="The To-Do List app is designed to help users manage their tasks
          efficiently and effectively. The app provides a user-friendly
          interface and a variety of features to ensure users can add, mark as
          complete and delete tasks with ease."
        preview={previewURL}
        code={codeURL}
        pcImg={pcImageToDoList}
        phoneImg={phoneImageToDoList}
      />
      <Project /> */}
      <>
        <div className="container">
          <div className="text-container">
            <h1>To Do List</h1>
            <p>
              The To-Do List app is designed to help users manage their tasks
              efficiently and effectively. The app provides a user-friendly
              interface and a variety of features to ensure users can add, mark
              as complete and delete tasks with ease.
            </p>
            <div className="btn-container">
              <button
                onClick={() =>
                  handleClick("https://saynomis.github.io/ToDoList/")
                }
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
            <img
              className="phone"
              src="phone-preview.png"
              alt="Phone Preview"
            />
          </div>
        </div>
        <div className="container">
          <div className="image-container">
            <img className="ntb" src="ntb-prev.png" alt="Notebook Preview" />
            <img className="phone" src="phone-prev.png" alt="Phone Preview" />
          </div>
          <div className="text-container">
            <h1>Movie Picker</h1>
            <p>
              The Movie Picker app is designed to help users find there favorite
              movie . The app provides a user-friendly interface and a variety
              of features to ensure users can find the right movie for them by
              providing description and Imdb rating.
            </p>
            <div className="btn-container">
              <button
                onClick={() =>
                  handleClick("https://saynomis.github.io/movie-picker/")
                }
                className="btn"
              >
                Preview
              </button>
              <button
                onClick={() =>
                  handleClick(
                    "https://github.com/Saynomis/movie-picker/blob/main/src/App.jsx"
                  )
                }
                className="btn"
              >
                Code <FaCode />
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
