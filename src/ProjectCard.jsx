import { useState } from "react";
import "./assets/CSS/projectCard.css";
// import { motion } from "framer-motion";
// import { fadeIn } from "./variants";
// import { Link } from "react-router-dom";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

function ProjectCard({
  path = "",
  image = "https://static.vecteezy.com/system/resources/thumbnails/005/720/408/small_2x/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg",
  title = "Latest Project",
  description = "This Project is under development now, but will available soon.",
  githubLink = "https://github.com/Rishu-Soni",
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="projectCard"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="projectImageContainer">
        <img src={image} alt={title} className="projectImage" />
      </div>
      <div className="projectContent">
        <h3 className="projectTitle">{title}</h3>
        <p className="projectDescription">{description}</p>
        <div className="projectLinks">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              GitHub
            </a>
          )}
          {path && (
            <a
              href={path}
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
// <div className="projectCard">
//     <img src={image} alt={title} className="projectImage" />
//     <div className="projectContent">
//         <h3 className="projectTitle">{title}</h3>
//         <p className="projectDescription">{description}</p>
//         <div className="projectLinks">
//             {githubLink && (
//                 <a href={githubLink} target="_blank" rel="noopener noreferrer" className="projectLink">
//                     GitHub
//                 </a>
//             )}
//             {link && (
//                 <a href={link} target="_blank" rel="noopener noreferrer" className="projectLink">
//                     Live Demo
//                 </a>
//             )}
//         </div>
//     </div>
// </div>
