import classes from "./css/Resume.module.css";
import DownloadFile from "../../util/fileDownload";

const DownloadResume = () => {
  const resumeURL =
    "https://firebasestorage.googleapis.com/v0/b/my-food-order-app-64b79.appspot.com/o/HarshaGangavarapu_Resume.pdf?alt=media";
  const fileName = "HarshaGangavarapu_Resume";
  return (
    <button
      onClick={() => DownloadFile(resumeURL, fileName)}
      className={classes.buttonResume}
    >
      Resume
    </button>
  );
};

export default DownloadResume;
