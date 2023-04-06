import React from "react";
import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <div className={styles.gpt3__header} id="home">
      <div className={styles.gpt3__headerContent}>
        <h1 className={styles.gradient__text}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Let&apos;s pave our way to a world where garbage is not 'wasted'...
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all
          exercise blessing. Indulgence way everything joy alteration boisterous the
          attachment. Party we years to order allow asked of.
        </p>
        <div className={styles.gpt3__headercontentInput}>
          {/* <input type="email" placeholder="Your Email Address"></input> */}
          <button type="button">Get Started</button>
        </div>
        <div className={styles.gpt3__headerContentPeople}>
          <img src="/images/people.png" alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className={styles.gpt3__headerImage}>
        <img src="/images/hero.jpg" alt="ai" />
      </div>
    </div>
  );
};

export default Hero;
