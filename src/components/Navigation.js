import { Link } from "react-router-dom";
import classes from "./css/Navigation.module.css";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <button>
              <Link to="/">Home</Link>
            </button>
            <button>
              <Link to="/about">About</Link>
            </button>
            <button>
              <Link to="/experience">Experience</Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
