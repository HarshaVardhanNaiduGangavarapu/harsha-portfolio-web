import { useState } from "react";
import classes from "./css/GitHub.module.css";
import GitHubLogo from "../../resources/github-tile.svg";

const GitHubButton = () => {
  const [gitHubButtonClicked, setGitHubButtonClicked] = useState(false);

  const myGitHubURL = "https://github.com/HarshaVardhanNaiduGangavarapu/";

  const handleGitHubClick = (event) => {
    event.preventDefault();
    if (!gitHubButtonClicked) {
      setGitHubButtonClicked(true);
      window.open(myGitHubURL, `_blank`);
      setGitHubButtonClicked(false);
    }
  };

  return (
    <button
      id="GitHub"
      className={classes.buttonGithub}
      onClick={handleGitHubClick}
    >
      <img
        src={GitHubLogo}
        alt="GitHub Logo"
        className={classes.buttonGithubImg}
      />
    </button>
  );
};

export default GitHubButton;
