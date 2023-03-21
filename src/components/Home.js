import React from "react";
import classes from "./css/Home.module.css";
import profileImage from "../resources/ProfileImage.png";

const Home = () => {
  return (
    <div className={classes.splitScreen}>
      <div className={classes.leftPane}>
        <div className={classes.profileImage}>
          <img src={profileImage} alt="profile pic" />
        </div>
      </div>
      <div className={classes.rightPane}>&lt; Full Stack Developer /&gt;</div>
    </div>
  );
};

export default Home;
