import clasess from "./css/Error.module.css";
import { useNavigate } from "react-router-dom";
import ErrorLogo from "../resources/404-Error-img.svg";

const Error = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => navigate("/");

  return (
    <div className={clasess.errorPage}>
      <img src={ErrorLogo} alt="Error Logo" />
      <h3>Click the button to go to Home page</h3>
      <br />
      <button onClick={handleHomeClick}>Home</button>
    </div>
  );
};

export default Error;
