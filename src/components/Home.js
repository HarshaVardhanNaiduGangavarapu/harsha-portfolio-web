import classes from "./css/Home.module.css";
import profileImage from "../resources/HomePic.png";
import LinkedInButton from "./buttons/LinkedInButton";
import GitHubButton from "./buttons/GitHubButton";
import InstaButton from "./buttons/InstaButton";
import ResumeButton from "./buttons/ResumeButton";
import CoverLetterButton from "./buttons/CoverLetterButton";
import DownArrow from "../resources/down-arrow-circle.svg";

const Home = () => {
  return (
    <div className={classes.bgImg}>
      <div className={classes.splitScreen}>
        <div className={classes.leftPane}>
          <div className={classes.hello}>
            Hello There, <br /> I'm{" "}
            <span className={classes.firstName}>Harsha</span>{" "}
            <span className={classes.lastName}>Gangavarapu</span>!
          </div>

          <br />
          <br />
          <div className={classes.AboutMe}>
            <span className={classes.buttonAboutMe}>
              About Me
              <img
                src={DownArrow}
                alt="Down Arrow"
                className={classes.imgAboutMe}
              />
            </span>
          </div>
          <br />
          <br />
          <div className={classes.AboutMe}>
            <LinkedInButton />
            <GitHubButton />
            <InstaButton />
            <ResumeButton />
            <CoverLetterButton />
          </div>
        </div>
        <div className={classes.rightPane}>
          <div className={classes.profileImage}>
            <img src={profileImage} alt="profile pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
