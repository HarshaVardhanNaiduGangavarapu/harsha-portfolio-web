import { useState } from "react";
import Slide from "./Slide";
import classes from "./css/Experience.module.css";
import BB from "../resources/BB.jpg";
import UiPath from "../resources/UiPath.jpg";
import TCS from "../resources/TCS.jpg";
import Polycom from "../resources/Polycom.jpg";
import BBLogo from "../resources/BB-logo.svg";
import UiPathLogo from "../resources/UiPath-logo.svg";
import TCSLogo from "../resources/TCS-logo.svg";
import PolycomLogo from "../resources/Polycom-logo.svg";

const experiencesList = [
  {
    id: 3,
    companyName: "BlackBerry",
    position: "Software Developer Student",
    location: "Waterloo, Ontario",
    duration: "Jan 2023 - Apr 2023",
    experience: "Experience",
    img: BB,
    imgAlt: "BlackBerry",
    logo: BBLogo,
    logoAlt: "BlackBerry Logo",
    responsibilities: [
      "Added new REST API routes and enhanced existing routes in Cluster microservice for the Cloud Workload Protection Platform(CWPP) cloud-service pillar to interact with the CWPP agent.",
      "Implemented Kafka consumers on multiple microservices while adhering to the Event Driven Architecture.",
      "Facilitated communication between microservices belonging to different product pillars and configured them to serialize and deserialize both Protobuf and Avro schemas effectively.",
      "Made sure of seamless testing of new code changes in selected environments through feature flags and guaranteed the reliability of new features.",
      "Ensured 100% code quality and coverage by following a Test-Driven Development (TDD) approach, which involved implementing comprehensive Unit and End-to-End Integration test suites using JUnit and Mockito frameworks.",
    ],
  },
  {
    id: 2,
    companyName: "UiPath (formerly Cloud Elements)",
    position: "Software Engineer",
    location: "Hyderabad, India",
    duration: "Feb 2019 - Dec 2021",
    experience: "Experience",
    img: UiPath,
    imgAlt: "UiPath",
    logo: UiPathLogo,
    logoAlt: "UiPath Logo",
    responsibilities: [
      "Integrated a variety of vendor applications, including Azure Storage, SAP S/4, SAP R/3, Oracle HCM, Dynamics 365 CRM, Shopify, Stripe, Quickbooks, Syncplicity, and more, into a SaaS integration platform using Java and related frameworks. Validated code quality and test coverage by adding test cases using JUnit, Mocha, and Chai.",
      "Resolved a crucial issue related to JSON formatting in the integration platform that led to a 30% reduction in memory usage and significantly enhanced its overall performance.",
      "Engineered a new feature that optimizes the integration platform by passing only necessary API context parameters to the JavaScript execution engine. This optimization reduced memory consumption by 25% and improved response times for the platform’s APIs.",
      "Coded and tested vendor application webhooks, including Azure Storage Services, by researching vendor API documentation and consumed real-time events, enabling efficient workflow triggering and notifications.",
      "Devised and containerized a NodeJS microservice to search and sync integrations metadata into AWS Elasticsearch, improving the efficiency of local development and testing.",
      "Programmed UI components in ReactJS utilizing reference mocks and verified their functionality and performance through Cypress tests.",
      "Chaired as engineering team’s agile scrum master and managed timely delivery of features at sprint levels by collaborating and communicating with all stakeholders, resulting in successful project outcomes.",
      "Orchestrated daily stand-ups, sprints, and retrospective meetings as the scrum master, and moderated live demonstrations of newly developed features and integrations during these scrum ceremonies.",
      "Collaborated with customer success teams in the USA and Europe to ensure prompt resolution of client requests within a 24-hour timeframe.",
      "Contributed to the continuous improvement of the platform by optimizing code, fixing bugs, and ensuring stability throughout the development process, code reviews, and bug bounties.",
    ],
  },
  {
    id: 1,
    companyName: "TATA Consultancy Services",
    position: "Assistant Systems Engineer",
    location: "Hyderabad, India",
    duration: "Mar 2017 - Feb 2019",
    experience: "Experience",
    img: TCS,
    imgAlt: "TCS",
    logo: TCSLogo,
    logoAlt: "TCS Logo",
    responsibilities: [
      "Contributed to the development of Aetna’s health insurance web application by implementing new features.",
      "Programmed user flows using AngularJS that achieved data processing within three seconds. Restricted user access to specific parts of the application to comply with OFAC regulations. Additionally, displayed appropriate messages to users based on their accessibility.",
      "Enabled RESTful API support for the Integrated Port Operating System (IPOS), a product designed to handle container and cargo operations in seaports.",
      "Built a Kafka-based event notification system that triggers port operations data to client dashboard systems, enabling visualization of operations analytics.",
      "Collaborated closely with clients during on-site visits, promptly addressing their change requests and deploying necessary code changes to ensure timely production deployment.",
      "Managed a team with diverse skill sets during the Initial Learning Program(ILP) and successfully delivered the project required to clear the training process.",
    ],
  },
  {
    id: 0,
    companyName: "Poly (formerly Polycom)",
    position: "Intern",
    location: "Hyderabad, India",
    duration: "Oct 2016 - Mar 2017",
    experience: "Experience",
    img: Polycom,
    imgAlt: "Polycom",
    logo: PolycomLogo,
    logoAlt: "Polycom Logo",
    responsibilities: [
      "Automated the software upgrade process for multiple products, achieving 100% automation and reducing the manual effort needed for upgrading and testing.",
      "Built RESTful APIs that automate the deployment and management of Windows virtual machines, which are utilized as worker machines in the automation testing framework.",
      "Developed a Batch Script to automatically install all necessary dependencies mandatory for the automation test framework to run on Windows virtual machines.",
      "Implemented Jenkins continuous integration pipelines to validate system patches and upgrade processes in a timely manner, and automatically send detailed reports to all stakeholders.",
      "Engineered an automation solution that extracts product keys from a key generator deployed in a remote Windows VM. This solution is vital for automated testing, facilitates upgrading to a major software version, and can be accessed through a REST API.",
    ],
  },
];

const Experience = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleSlideChange = (slideIndex) => {
    setActiveSlide(slideIndex);
  };

  const handleImageLoading = () => {
    setIsLoading(false);
  };

  return (
    <div className={classes.splitScreen}>
      <div className={classes.leftPane}>
        {isLoading && <div className={classes.spinner}></div>}
        <img
          src={experiencesList[activeSlide].img}
          alt={experiencesList[activeSlide].imgAlt}
          onLoad={handleImageLoading}
        />
      </div>
      <div className={classes.rightPane}>
        <Slide
          key={experiencesList[activeSlide].id}
          companyName={experiencesList[activeSlide].companyName}
          position={experiencesList[activeSlide].position}
          location={experiencesList[activeSlide].location}
          duration={experiencesList[activeSlide].duration}
          experience={experiencesList[activeSlide].experience}
          logo={experiencesList[activeSlide].logo}
          logoAlt={experiencesList[activeSlide].logoAlt}
          responsibilities={experiencesList[activeSlide].responsibilities}
        />
        <div className={classes["slider-buttons"]}>
          {experiencesList.map((slide, index) => (
            <button
              key={index}
              className={`${classes["slider-button"]}${
                index === activeSlide ? "active" : ""
              }`}
              onClick={() => handleSlideChange(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
