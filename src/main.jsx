import { createRoot } from "react-dom/client";
import {useState} from "react";
import Navbar from "./Navbar.jsx";
import "./assets/CSS/navbar.css";
import "./assets/CSS/MainPage.css";

const frontendSkills = [
  { skill: "HTML", level: 85, about: "I have good knowledge of HTML." },
  { skill: "CSS", level: 80, about: "I have good knowledge of CSS." },
  { skill: "JavaScript", level: 70, about: "I have good knowledge of JavaScript." },
  { skill: "React", level: 60, about: "I have good knowledge of React." }
];

const codingLanguages = [
  { skill: "C", level: 85, about: "I have good knowledge of C." },
  { skill: "C++", level: 75, about: "I have good knowledge of C++." },
  { skill: "Python", level: 65, about: "I have good knowledge of Python." },
  { skill: "Java", level: 55, about: "I have good knowledge of Java." }
];

let [experienceBarValue, setExperienceBarValue ] = useState(70);
let [experienceBarAbout, setExperienceBarAbout]= useState("");

createRoot(document.getElementById("root")).render(
  <>
    <Navbar />

    <main>
      <div className="first-page">
        <img
          className="main-img"
          src="https://productio.com/wp-content/uploads/2021/10/img1wp.jpg"
          alt="index"
        />
        <div className="first_page_text_side">
          <h2>
            Welcome to my <p className="portfolio">PORTFOLIO</p>
          </h2>
          <p className="para_page_first">
            This is a simple portfolio website built using React.
          </p>
          <button className="start-button">Get Started</button>
        </div>
      </div>

      <div className="experience-page">
        <h2>EXPERIENCES</h2>
        <div id="table_div" className="table_div">
          <div className="table_content">
            <h3 className="h3_text">Front-end</h3>
            <p className="table_para">HTML <img src="" alt="something" /> </p>
            <p className="table_para">CSS</p>
            <p className="table_para">JavaScript</p>
            <p className="table_para">React</p>
          </div>
          <div className="table_content">
            <h3 className="h3_text">Coding Languages</h3>
            <p className="table_para">C</p>
            <p className="table_para">C++</p>
            <p className="table_para">Python</p>
            <p className="table_para">java</p>
          </div>
        </div>
        <div>
          <h3>further explanation</h3>
          <label htmlFor="experience_bar">{ experienceBarAbout }</label>
          <progress value = {experienceBarValue} max="100"></progress>
        </div>
      </div>

      <div className="projects-page">
        <h2>Projects</h2>
        <div className="project-cards"></div>
      </div>

      <div className="contact-page-container">
        <div className="contact-page">
          <h2>Contact Me</h2>
          <p>
            {" "}
            <a href="mailto:rishusoni6393@gmail.com">Email: </a>
          </p>
        </div>
        <table className="social-media-table">
          <thead>Social Media</thead>
          <tr>LinkedIn</tr>
          <tr>GitHub</tr>
          <tr>Twitter</tr>
        </table>
      </div>
    </main>
  </>
);
// let table_div = document.getElementById("table_div");
// table_div.addEventListener("mouseover", function (event) {
//   console.log("Hovered element:", event.target);
// });
let table_para = document.getElementsByClassName("table_para");
for (let i = 0; i < table_para.length; i++) {
  table_para[i].addEventListener("mouseover", function () {
    if (this.innerText === "HTML") {
      setExperienceBarValue(90);
      setExperienceBarAbout = ("I have good knowledge of HTML.");
    }
  });
}
