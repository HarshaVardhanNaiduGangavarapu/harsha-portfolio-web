import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import classes from "./css/Navigation.module.css";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
