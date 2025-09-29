import { createRoot } from "react-dom/client";
import Navbar from "./Navbar.jsx";
import MainSite from "./MainSite.jsx";
import "./assets/CSS/navbar.css";

createRoot(document.getElementById("root")).render(
  <>
    <Navbar />
    <MainSite />
  </>
);