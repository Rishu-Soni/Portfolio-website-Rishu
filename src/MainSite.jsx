// function MainPage() {
//     return(
//         <>
//         <main>
//       <div className="projects-page">
//         <h2>Projects</h2>
//         <div className="project-cards"></div>
//       </div>

//       <div className="contact-page-container">
//         <div className="contact-page">
//           <h2>Contact Me</h2>
//           <p>
//             {" "}
//             <a href="mailto:rishusoni6393@gmail.com">Email: </a>
//           </p>
//         </div>
//         <table className="social-media-table">
//           <thead>Social Media</thead>
//           <tr>LinkedIn</tr>
//           <tr>GitHub</tr>
//           <tr>Twitter</tr>
//         </table>
//       </div>
//     </main>
//     </>
//     )
// }

// export default MainPage;

import { useState, useEffect } from "react";
import "./assets/CSS/MainSite.css";

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
    useState("hidden");
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
          <h2>EXPERIENCES</h2>

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

        <div className="projects-page">
          <h2>PROJECTS</h2>
          <div className="project-cards"></div>
        </div>
      </main>
    </>
  );
}

export default MainSite;
