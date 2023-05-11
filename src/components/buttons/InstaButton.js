import { useState } from "react";
import classes from "./css/Insta.module.css";
import InstaLogo from "../../resources/instagram-tile.svg";

const InstaButton = () => {
  const [instaButtonClicked, setInstaButtonClicked] = useState(false);

  const myInstaURL = "https://instagram.com/harshavardhannaidu_gangavarapu";

  const handleInstaClick = (event) => {
    event.preventDefault();
    if (!instaButtonClicked) {
      setInstaButtonClicked(true);
      window.open(myInstaURL, `_blank`);
      setInstaButtonClicked(false);
    }
  };

  return (
    <button
      id="Insta"
      className={classes.buttonInsta}
      onClick={handleInstaClick}
    >
      <img
        src={InstaLogo}
        alt="Insta Logo"
        className={classes.buttonInstaImg}
      />
    </button>
  );
};

export default InstaButton;
