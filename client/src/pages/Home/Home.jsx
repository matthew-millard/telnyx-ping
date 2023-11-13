import React from "react";
import { Logo, Button } from "../../components";
import css from "./Home.module.css";

function Home() {
  return (
    <div>
      <div className={css.fixedHeader}>
        <Logo />
      </div>
      <div className={css.pageContainer} style={{ backgroundColor: "aqua" }}>
        <div className={css.welcomeCard}>
          <h1>
            <span className={css.welcomeMessage}>Welcome to MediCare.</span> <br />
            Where your health, is our priority
          </h1>
          <h2>Book your appointment with one of our specialists today!</h2>
          <div className={css.authButtons}>
            <Button label="Sign In" />
            <Button label="Create Account" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
