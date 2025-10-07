import "./assets/CSS/Navbar.css";
import "./assets/Navbar_assets/rishu_logo.png";
import "./assets/Navbar_assets/rishu_logo.png";
import Rs_logo from "./assets/Index_Assets/R-s_Logo.png";
function Navbar() {
  return (
      <nav className="navbar">
        <div className="logoContainer">
          <img
            src={Rs_logo}
            alt="Portfolio-Logo"
            className="logoImage"
          />
          <h1>Rishu's Portfolio</h1>
        </div>

        <ul className="navLinks">
          <li>
            {" "}
            <a href="Portfolio_Rishu\index.html"> Home </a>{" "}
          </li>
          <li>
            {" "}
            <a href=""> About </a>{" "}
          </li>
          <li>
            {" "}
            <a href=""> Projects </a>{" "}
          </li>
          <li>
            {" "}
            <a href=""> Contact </a>{" "}
          </li>
        </ul>
      </nav>
  );
}

export default Navbar;
