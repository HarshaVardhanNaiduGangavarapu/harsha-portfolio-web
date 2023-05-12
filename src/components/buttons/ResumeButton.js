import classes from "./css/Resume.module.css";
import DownloadFile from "../../util/fileDownload";

const ResumeButton = () => {
  const fileName = "HarshaGangavarapu_Resume.pdf";
  return (
    <button
      onClick={async () => await DownloadFile(fileName)}
      className={classes.buttonResume}
    >
      Resume
    </button>
  );
};

export default ResumeButton;
