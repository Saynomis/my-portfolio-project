import { FaCode } from "react-icons/fa";
import "../styles/projects.css";

export default function Projects() {
  function handleClick(url) {
    window.open(url, "_blank");
  }
  return (
    <>
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
          <img className="phone" src="phone-preview.png" alt="Phone Preview" />
        </div>
      </div>
      <div className="horizontal-line"><hr /></div>
      <div className="container white">
        <div className="image-container">
          <img className="ntb" src="ntb-prev.png" alt="Notebook Preview" />
          <img className="phone" src="phone-prev.png" alt="Phone Preview" />
        </div>
        <div className="text-container-right">
          <h1>Movie Picker</h1>
          <p>
            The Movie Picker app is designed to help users find there favorite
            movie . The app provides a user-friendly interface and a variety of
            features to ensure users can find the right movie for them by
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
      <div className="horizontal-line margin"><hr /></div>
      <div className="container">
        <div className="text-container">
          <h1>Couple Finance Calculator</h1>
          <p>
            The Couple Finance Calculator app is designed to help couples manage
            their finance expenses efficiently and effectively. The app provides
            a user-friendly interface and a variety of features to ensure users
            can add price which they payed and calculate who ows who money.
          </p>
          <div className="btn-container">
            <button
              onClick={() =>
                handleClick("https://saynomis.github.io/finance-calculator/")
              }
              className="btn"
            >
              Preview
            </button>
            <button
              onClick={() =>
                handleClick(
                  "https://github.com/Saynomis/finance-calculator/blob/main/src/App.jsx"
                )
              }
              className="btn"
            >
              Code <FaCode />
            </button>
          </div>
        </div>
        <div className="image-container">
          <img className="ntb" src="PC-cfc.png" alt="Notebook Preview" />
          <img className="phone" src="phone-cfc.png" alt="Phone Preview" />
        </div>
      </div>
    </>
  );
}
