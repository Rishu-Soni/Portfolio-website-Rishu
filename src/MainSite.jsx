import { useState, useEffect } from "react";
import "./ProjectCard.jsx";
import "./assets/CSS/MainSite.css";
import ProjectCard from "./ProjectCard.jsx";
import chessImage from "./assets/Project_Assets/chess-Rishu.png";
import CalculatorImage from "./assets/Project_Assets/Calculator-Rishu.png";
import ToDoImage from "./assets/Project_Assets/ToDo_list-Rishu.png";
import Mail_image from "./assets/Contact_Assets/mail_image.png";
import Tele_image from "./assets/Contact_Assets/Telegram_logo.png";
import Github_image from "./assets/Contact_Assets/github_image.png";
import Linkedin_image from "./assets/Contact_Assets/linkedin_image.png";
import X_image from "./assets/Contact_Assets/twitter_image.png";
import About_Section from "./About_Section.jsx";
import Coder_shadow from "./assets/About_assets/coder_shadow_img.png";
import Rishu_img from "./assets/Index_Assets/me_Img.jpg";
import moon_icon from "./assets/Index_Assets/moon_icon.png";
import sun_icon from "./assets/Index_Assets/sun_icon.svg";

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
  const [ColorTheme, setColorTheme] = useState(false);

  useEffect(() => {
    handleMouseEnter(
      mousehoveredSkill,
      setExperienceBarValue,
      setExperienceBarAbout,
      setFurther_exp_visibility
    );
  }, [mousehoveredSkill]);

  useEffect(()=>{ 
    const root = document.documentElement;
    if(ColorTheme) // dark theme 
    {
      root.style.setProperty('--text-color-heading', 'hsl(0, 0%, 100%)');
      root.style.setProperty('--text-color-heading-inverse', 'hsl(0, 0%, 90%)');
      root.style.setProperty('--text-color-para', 'hsl(0, 0%, 70%)');
      root.style.setProperty('--text-color-para-inverse', 'hsl(0, 50%, 85%)');
      root.style.setProperty('--background-color-back', 'hsl(0, 0%, 13%)');
      root.style.setProperty('--background-color-normal', 'hsl(0, 0%, 17%)');
      root.style.setProperty('--background-color-front', 'hsl(0, 0%, 27%)');
      root.style.setProperty('--shadow-dark', 'hsl(0, 0%, 0%)');
      root.style.setProperty('--shadow-light', 'hsl(0, 0%, 40%)');
      root.style.setProperty('--navMenuIcon', '0.7');
      
      document.querySelector(".theme_innerBar").style.justifyContent = "flex-end";
      document.querySelector(".theme_innerBar").style.backgroundColor = "var(--primary-color)";
      document.querySelector(".theme_innerBar").style.marginLeft = "5px";
      document.querySelector(".theme_innerBar").style.marginRight = "2px";
      document.querySelector(".sun").style.display = "none";
      document.querySelector(".moon").style.display = "inline-block";
      
    }
    else{   // light theme
      root.style.setProperty('--text-color-heading', 'hsl(0, 0%, 10%)');
      root.style.setProperty('--text-color-heading-inverse', 'hsl(0, 0%, 90%)');
      root.style.setProperty('--text-color-para', 'hsl(0, 0%, 20%)');
      root.style.setProperty('--text-color-para-inverse', 'hsl(0, 0%, 80%)');
      root.style.setProperty('--background-color-back', 'hsl(150, 10%, 90%)');
      root.style.setProperty('--background-color-normal', 'hsl(150, 5%, 95%)');
      root.style.setProperty('--background-color-front', 'hsl(0, 0%, 100%)');
      root.style.setProperty('--shadow-dark', 'hsl(0, 0%, 70%)');
      root.style.setProperty('--shadow-light', 'hsl(0, 0%, 100%)');
      root.style.setProperty('--navMenuIcon', '0');
      
      document.querySelector(".theme_innerBar").style.justifyContent = "flex-start";
      document.querySelector(".theme_innerBar").style.backgroundColor = "var(--secondary-color)";
      document.querySelector(".theme_innerBar").style.marginLeft = "2px";
      document.querySelector(".theme_innerBar").style.marginRight = "5px";
      document.querySelector(".sun").style.display = "inline-block";
      document.querySelector(".moon").style.display = "none";
    }
  },[ColorTheme]);



  const ProgressBar_value = {
    width: `${experienceBarValue}%`, // Change this value to set the progress
  };
  return (
    <>
      <main>
        <div className="themeDiv">
          <div className="theme_outerBar" onClick={()=>{setColorTheme(pre => !pre)}} >
            <div className="theme_innerBar">
            <img src={sun_icon} alt="" className="theme_image sun" />
            <img src={moon_icon} alt="" className="theme_image moon" /></div>
          </div>
        </div>
        {/* first page of the portfolio */}
        <div className="first-page">
          <img className="main-img" src={Rishu_img} alt="Rishu_Soni" />
          <div className="first_page_text_side">
            <h2>RISHU's</h2>
            <p className="portfolio">PORTFOLIO</p>
            <p className="para_page_first">
              This is a simple portfolio site of ME and also built by ME.
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
              <ul className="skills_ul">
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
              <ul className="skills_ul">
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
            {/* <progress className="furtherExp_bar" value={experienceBarValue} max="100"></progress> */}
            <div className="furtherExp_barContainer">
              <h3>Skill Proficiency</h3>
              <div className="furtherExp_outerBar">
                <div className="furtherExp_innerBar" style={ProgressBar_value}>
                  {/* <div className="furtherExp_innerBar_color"/> */}
                  <span className="innerBarText" >{experienceBarValue}%</span>
                  {/* <div className="furtherExp_innerBar_color"/> */}
                </div>
              </div>
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
              path="https://chess-rishu.netlify.app/"
              image={chessImage}
              title="Chess Game"
              description="Working Chess game with basic functionalities. which you can play with your friend."
              githubLink="https://github.com/Rishu-Soni/SideProject_Chess-Rishu.git"
            />
            <ProjectCard
              path="https://calculator-rishu.netlify.app/"
              image={CalculatorImage}
              title="Calculator App"
              description="Calculator App with basic functionalities including remainders"
              githubLink="https://github.com/Rishu-Soni/SideProject_Calculator-Rishu.git"
            />
            <ProjectCard
              path="https://todo-rishu.netlify.app/"
              image={ToDoImage}
              title="To Do List App"
              description="Have you ever thing about a ToDo list which Can store your task in your browser locally."
              githubLink="https://github.com/Rishu-Soni/SideProject_ToDo_List-Rishu.git"
            />
          </div>
        </div>

        <div className="about-page">
          <h2 className="heading2">About ME</h2>
          <p className="about-para">
            <About_Section
              heading="Who am I?"
              imgClass="coder_shadow"
              image_alt="coder_shadow"
              image_src={Coder_shadow}
              discription_para="I am Rishu, currently a first year student pursuing B.Tech in CSE in AI at kiet Ghaziabad. I have a strong passion for coding and development."
            />
          </p>
        </div>
      </main>
      <footer>
        <div className="footer_div">
          <div className="otherRelatedLinks">
            {/* <h2 className="contact_heading">Other Links</h2> */}
          </div>
          <div className="footer_contact">
            <div className="contact_div">
              <a
                href="https://www.linkedin.com/in/rishu-soni-207694325/"
                target="_blank"
                rel="noopener noreferrer"
                className="otherLinks"
              >
                <img
                  src={Linkedin_image}
                  alt=""
                  className="contact_logo blackLogo"
                />
              </a>
              <a
                href="https://x.com/_R_s_8_"
                target="_blank"
                rel="noopener noreferrer"
                className="otherLinks"
              >
                <img src={X_image} alt="" className="contact_logo blackLogo" />
              </a>
              <a
                href="https://github.com/Rishu-Soni"
                target="_blank"
                rel="noopener noreferrer"
                className="otherLinks"
              >
                <img
                  src={Github_image}
                  alt=""
                  className="contact_logo blackLogo"
                />
              </a>
              <a href="mailto:rishusoni6393@gmail.com" className="email-link">
                <img
                  className="contact_logo mail"
                  src={Mail_image}
                  alt="Mail_logo"
                />
              </a>
              <a
                href="https://t.me/Rs_8_telegram_group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="contact_logo tele"
                  src={Tele_image}
                  alt="Telegram_logo"
                />
              </a>
              <p className="contact-para">
                Feel free to reach out for collaborations or just a friendly
                hello.!
              </p>
            </div>
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
