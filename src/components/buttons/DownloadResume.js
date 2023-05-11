import classes from "./css/Resume.module.css";
import DownloadFile from "../../util/fileDownload";

const DownloadResume = () => {
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

export default DownloadResume;
