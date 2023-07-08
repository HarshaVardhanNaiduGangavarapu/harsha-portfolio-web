import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import classes from "./css/Navigation.module.css";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <main className={classes.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
