import classes from "./css/Coverletter.module.css";
import DownloadFile from "../../util/fileDownload";

const CoverLetterButton = () => {
  const fileName = "CoverLetter_HarshaGangavarapu.pdf";
  return (
    <button
      onClick={async () => await DownloadFile(fileName)}
      className={classes.coverletterButton}
    >
      Cover Letter
    </button>
  );
};

export default CoverLetterButton;
