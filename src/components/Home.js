import classes from "./css/Home.module.css";
import profileImage from "../resources/ProfileImage.png";
import LinkedInButton from "./buttons/LinkedInButton";
import GitHubButton from "./buttons/GitHubButton";
import InstaButton from "./buttons/InstaButton";

const Home = () => {
  return (
    <div className={classes.splitScreen}>
      <div className={classes.leftPane}>
        <div className={classes.profileImage}>
          <img src={profileImage} alt="profile pic" />
        </div>
        <br />
        <LinkedInButton />
        <GitHubButton />
        <InstaButton />
      </div>
      <div className={classes.rightPane}>
        <div className={classes.hello}>
          Hello There, <br /> I'm{" "}
          <span className={classes.firstName}>Harsha</span>{" "}
          <span className={classes.lastName}>Gangavarapu</span>! <br />
          <span className={classes.intro}>
            Welcome to my portfolio website.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
