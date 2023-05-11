import { useState } from "react";
import classes from "./css/Linkedin.module.css";
import LinkedInLogo from "../../resources/linkedin-tile.svg";

const LinkedInButton = () => {
  const [linkedinButtonClicked, setLinkedInButtonClicked] = useState(false);

  const myLinkedInURL = "https://www.linkedin.com/in/gharshavardhannaidu/";

  const handleLinkedInClick = (event) => {
    event.preventDefault();
    if (!linkedinButtonClicked) {
      setLinkedInButtonClicked(true);
      window.open(myLinkedInURL, `_blank`);
      setLinkedInButtonClicked(false);
    }
  };
  return (
    <button
      id="LinkedIn"
      className={classes.buttonLinkedin}
      onClick={handleLinkedInClick}
    >
      <img
        src={LinkedInLogo}
        alt="LinkedIn Logo"
        className={classes.imgLinkedin}
      />
    </button>
  );
};

export default LinkedInButton;
