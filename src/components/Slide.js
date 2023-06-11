import classes from "./css/Experience.module.css";

const Slide = (props) => {
  return (
    <>
      <div className={`${classes.slide} ${props.isActive ? "active" : ""}`}>
        <div className={classes.slideTop}>
          <img
            className={classes.companyLogo}
            src={props.logo}
            alt={props.logoAlt}
          />
          <table>
            <tbody>
              <tr>
                <td className={classes.position}>{props.position}</td>
                <td className={classes.duration}>{props.duration}</td>
              </tr>
              <tr>
                <td className={classes.company}>{props.companyName}</td>
                <td className={classes.location}>{props.location}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div className={classes.slideHorizontalSplit} />
        <div className={classes.responsibilities}>
          <ul>
            {props.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Slide;
