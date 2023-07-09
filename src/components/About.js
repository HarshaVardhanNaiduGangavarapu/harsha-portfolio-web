import classes from "./css/About.module.css";
import AboutImage from "../resources/About-pic-BB.png";
import { useState } from "react";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoading = () => {
    setIsLoading(false);
  };

  return (
    <div className={classes.splitScreen}>
      <div className={classes.leftPane}>
        {isLoading && <div className={classes.spinner}></div>}
        <div className={classes.AboutImage}>
          <img src={AboutImage} alt="About Pic" onLoad={handleImageLoading} />
        </div>
      </div>
      <div className={classes.rightPane}>
        <h1>{`<About Myself/>`}</h1>
        <h2>{`{ I'm a Sofware Engineer from Ontario, Canada🇨🇦 }`}</h2>
        <h3>
          As a highly skilled software engineer, I bring expertise in designing
          and developing complex systems using Java, JavaScript, and related
          frameworks such as Spring, Springboot, React, and Node.js. With
          experience in implementing REST APIs, messaging queues like Kafka for
          event-driven architectures, and containerization technologies like
          Docker and Kubernetes, I have a proven track record of delivering
          scalable and robust solutions for various industries.
          <span className={classes.newLine}>
            <br />
          </span>
          My proficiency in system design and architecture, coupled with my
          ability to work in Agile environments and using tools like Jira and
          Confluence, has helped me successfully deliver project tasks and
          features on time. As a scrum master, I have facilitated agile scrum
          events, including daily stand-ups, sprint planning, and
          retrospectives, and ensured effective collaboration between
          stakeholders.
          <span className={classes.newLine}>
            <br />
          </span>
          My passion for learning and staying updated with the latest
          technologies has helped me stay ahead of the curve and continuously
          improve my skills. Overall, I am an enthusiastic and dedicated
          professional who is committed to delivering high-quality solutions and
          fostering a collaborative and innovative work environment.
          <span className={classes.newLine}>
            <br />
          </span>
        </h3>
      </div>
    </div>
  );
};

export default About;
