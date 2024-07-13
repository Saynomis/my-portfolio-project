import "../styles/resume.css";

export default function Resume() {
  return (
    <div className="cv-container">
      <div className="cv">
        <img src="/public/Screenshot 2024-07-14 at 01.27.19.png" alt="" />
      </div>
      <div className="cv">
        <img src="/public/Screenshot 2024-07-14 at 01.27.40.png" alt="" />
      </div>
      <button className="download-button">Download CV</button>
    </div>
  );
}
