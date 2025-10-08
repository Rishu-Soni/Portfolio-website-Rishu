import "./assets/CSS/Navbar.css";
import "./assets/Navbar_assets/rishu_logo.png";
import "./assets/Navbar_assets/rishu_logo.png";
import Rs_logo from "./assets/Index_Assets/R-s_Logo.png";
import menuIcon from "./assets/Navbar_assets/menu_svg.svg";
import upArrowIcon from "./assets/Navbar_assets/upArrow_svg.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="permaNav">
        <div className="logoContainer">
          <img src={Rs_logo} alt="Portfolio-Logo" className="logoImage" />
          <h1>Rishu's Portfolio</h1>
        </div>

        <ul className="navLinks">
          <li>
            <a href="Portfolio_Rishu\index.html"> Home </a>
          </li>
          <li>
            <a href=""> About </a>
          </li>
          <li>
            <a href=""> Projects </a>
          </li>
          <li>
            <a href=""> Contact </a>
          </li>
        </ul>

        {/* will only shown when in mobile view */}
        <div className="mobile_menu">
          <img
            src={menuIcon}
            alt=""
            id="menuIcon"
            onClick={(e) => {
              document.getElementById("slidebar").style.display = "flex";
              document.getElementById("menuIcon").style.display = "none";
              document.querySelector(".permaNav").style.justifyContent = "center";
              
            }}
            />
        </div>
      </div>
      <aside id="slidebar">
        <ul className="mobileNavLinks">
          <li>
            <a href="Portfolio_Rishu\index.html"> Home </a>
          </li>
          <li>
            <a href=""> About </a>
          </li>
          <li>
            <a href=""> Projects </a>
          </li>
          <li>
            <a href=""> Contact </a>
          </li>
        </ul>
        <img
          className="crossIcon"
          src={upArrowIcon}
          alt=""
          onClick={(e) => {
            document.getElementById("menuIcon").style.display = "inline-block";
            document.getElementById("slidebar").style.display = "none";
            document.querySelector(".permaNav").style.justifyContent = "space-between";
          }}
        />
      </aside>
    </nav>
  );
}

export default Navbar;
