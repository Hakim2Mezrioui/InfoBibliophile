import React, { Fragment } from "react";
import Intro from "./intro/intro";
import styles from "./Home.module.css";
import IntroSection from "./IntroSection/IntroSection";

const Home = () => {

  return (
    <Fragment>
      <div className={`${styles.container}`}>
        <Intro />
        <IntroSection />
      </div>
    </Fragment>
  );
};

export default Home;
