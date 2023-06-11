import { Link } from "react-router-dom";
import classes from "./css/Navigation.module.css";
import { useState } from "react";

const Navigation = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (item) => setActiveItem(item);

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <button
              className={activeItem === "Home" ? classes.activeButton : ""}
              onClick={() => handleItemClick("Home")}
            >
              <Link to="/">Home</Link>
            </button>
            <button
              className={activeItem === "About" ? classes.activeButton : ""}
              onClick={() => handleItemClick("About")}
            >
              <Link to="/about">About</Link>
            </button>
            <button
              className={
                activeItem === "Experience" ? classes.activeButton : ""
              }
              onClick={() => handleItemClick("Experience")}
            >
              <Link to="/experience">Experience</Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
