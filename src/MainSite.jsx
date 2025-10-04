import { useState, useEffect } from "react";
import "./ProjectCard.jsx";
import "./assets/CSS/MainSite.css";
import ProjectCard from "./ProjectCard.jsx";
import chessImage from "./assets/Project_Assets/chess-Rishu.png";
import CalculatorImage from "./assets/Project_Assets/Calculator-Rishu.png";
import ToDoImage from "./assets/Project_Assets/ToDo_list-Rishu.png";
import Mail_image from "./assets/Contact_Assets/Mail_image.png";
import Tele_image from "./assets/Contact_Assets/Telegram_logo.webp";

const frontendSkills = [
  {
    skill: "HTML",
    level: 85,
    description:
      "Expert in HTML5, creating semantic, accessible, and SEO-friendly web structures.",
  },
  {
    skill: "CSS",
    level: 80,
    description:
      "Skilled in CSS3, including Flexbox, Grid, animations, and responsive design.",
  },
  {
    skill: "JavaScript",
    level: 70,
    description:
      "Proficient in ES6+, with expertise in DOM manipulation and asynchronous programming.",
  },
  {
    skill: "React",
    level: 75,
    description:
      "Experienced in building dynamic, component-based UIs with React and state management.",
  },
];

const codingLanguages = [
  {
    skill: "C",
    level: 85,
    description:
      "Proficient in C, with strong knowledge of pointers, memory management, and low-level programming.",
  },
  {
    skill: "C++",
    level: 80,
    description:
      "Skilled in C++ for object-oriented programming and performance-critical applications.",
  },
  {
    skill: "Python",
    level: 30,
    description:
      "Experienced in Python for scripting, automation, and data analysis.",
  },
  {
    skill: "Java",
    level: 30,
    description:
      "Proficient in Java for building robust, platform-independent applications.",
  },
];

function handleMouseEnter(
  mousehoveredSkill,
  setExperienceBarValue,
  setExperienceBarAbout,
  setFurther_exp_visibility
) {
  if (!mousehoveredSkill) {
    setFurther_exp_visibility("hidden");
    setExperienceBarValue(0); // Reset to 0 or a default value
    setExperienceBarAbout(""); // Clear description
    return;
  }
  for (let skill of [...frontendSkills, ...codingLanguages]) {
    if (skill.skill === mousehoveredSkill) {
      setExperienceBarValue(skill.level);
      setExperienceBarAbout(skill.description);
      setFurther_exp_visibility("visible");
      break;
    }
  }
}

function MainSite() {
  const [experienceBarValue, setExperienceBarValue] = useState(85);
  const [experienceBarAbout, setExperienceBarAbout] = useState("");
  const [further_exp_visibility, setFurther_exp_visibility] =
    useState("invisible");
  const [mousehoveredSkill, setMousehoveredSkill] = useState(null);

  useEffect(() => {
    handleMouseEnter(
      mousehoveredSkill,
      setExperienceBarValue,
      setExperienceBarAbout,
      setFurther_exp_visibility
    );
  }, [mousehoveredSkill]);

  const ProgressBar_value = {
    width: `${experienceBarValue}%`, // Change this value to set the progress
  };
  return (
    <>
      <main>
        {/* first page of the portfolio */}
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

        {/* experience page of the portfolio */}
        <div className="experience-page">
          <h2 className="heading2">EXPERIENCES</h2>

          <div className="table_div">
            <div className="table_content">
              <h3 className="h3_text">Front-end</h3>
              <ul>
                {frontendSkills.map((skill, index) => (
                  <li key={index} className="skills_list">
                    <strong
                      className="skills"
                      tabIndex={0}
                      onMouseEnter={(e) =>
                        setMousehoveredSkill(e.target.innerHTML)
                      }
                      onMouseLeave={() => setMousehoveredSkill(null)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setMousehoveredSkill(e.target.innerHTML);
                        }
                      }}
                    >
                      {skill.skill}
                    </strong>
                  </li>
                ))}
              </ul>
            </div>

            <div className="table_content">
              <h3 className="h3_text">Coding Languages</h3>
              <ul>
                {codingLanguages.map((skill, index) => (
                  <li key={index} className="skills_list">
                    <strong
                      className="skills"
                      tabIndex={0}
                      onMouseEnter={(e) =>
                        setMousehoveredSkill(e.target.innerHTML)
                      }
                      onMouseLeave={() => setMousehoveredSkill(null)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setMousehoveredSkill(e.target.innerHTML);
                        }
                      }}
                    >
                      {skill.skill}
                    </strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <small className="Exp_small_text">
            hover over skill to know more
          </small>

          <div
            className="experience_exp_Container"
            style={{ visibility: further_exp_visibility }}
          >
            <h3>Further Explanation</h3>
            {/* <progress className="furtherExp_bar" value={experienceBarValue} max="100"></progress> */}
            <div className="furtherExp_outerBar">
              <div className="furtherExp_innerBar" style={ProgressBar_value} />
            </div>
            <label className="furtherExp_text">{experienceBarAbout}</label>
          </div>
        </div>

        {/* projects page of the portfolio */}
        <div className="projects-page">
          {/*
            path = "",
            image = "https://static.vecteezy.com/system/resources/thumbnails/005/720/408/small_2x/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg",
            title = "Latest Project",
            description = "This Project is under development now, but will available soon.",
            githubLink = "https://github.com/Rishu-Soni",
          */}
          <div className="project_heading">
            <h2 className="heading2">PROJECTS</h2>
          </div>
          <div className="project-card_container">
            <ProjectCard
              className="project-card"
              path="https://chess-rishu.netlify.app/"
              image={chessImage}
              title="Chess Game"
              description="Working Chess game with basic functionalities. which you can play with your friend."
              githubLink="https://github.com/Rishu-Soni/SideProject_Chess-Rishu.git"
            />
            <ProjectCard
              className="project-card"
              path="https://calculator-rishu.netlify.app/"
              image={CalculatorImage}
              title="Calculator App"
              description="Calculator App with basic functionalities including remainders"
              githubLink="https://github.com/Rishu-Soni/SideProject_Calculator-Rishu.git"
            />
            <ProjectCard
              className="project-card"
              path="https://todo-rishu.netlify.app/"
              image={ToDoImage}
              title="To Do List App"
              description="Have you ever thing about a ToDo list which Can store your task in your browser locally."
              githubLink="https://github.com/Rishu-Soni/SideProject_ToDo_List-Rishu.git"
            />
            <ProjectCard className="project-card" />
            <ProjectCard className="project-card" />
          </div>
        </div>

        {/* contact page of the portfolio */}
        {/* <div className="contact-page">
          <h2 className="heading2">CONTACT</h2>

          <p className="contact-para">
            Feel free to reach out for collaborations or just a friendly hello.!
          </p>

          <p className="contact-para"></p>
        </div> */}
      </main>
      <footer>
        <div className="footer_div">
          <div>
            <a href="mailto:rishusoni6393@gmail.com" className="email-link">
              <img className="contact_logo" src={Mail_image} alt="Mail_logo" />
            </a>
            <a
              href="https://t.me/Rs_8_telegram_group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="contact_logo"
                src={Tele_image}
                alt="Telegram_logo"
              />
            </a>
          </div>
        </div>
        <p className="footer-para">
          &copy; 2025 Rishu Soni. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default MainSite;
