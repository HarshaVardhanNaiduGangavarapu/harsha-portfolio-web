import React from "react";
import classes from "./css/Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      All Rights Reserved. &copy; {currentYear} by Harsha Gangavarapu.
    </footer>
  );
};

export default Footer;
