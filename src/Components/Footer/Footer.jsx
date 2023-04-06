/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.col1}>
          <h3 style={{ fontWeight: 500, color: "white", marginBottom: "1rem" }}>
            Contact
          </h3>

          <div className={styles.sec}>
            <i className="fa-brands fa-facebook"></i>
            <a href="https://facebook.com">Facebook</a>
          </div>

          <div className={styles.sec}>
            <i className="fa-brands fa-instagram"></i>
            <a href="https://instagram.com">InstaGram</a>
          </div>

          <div className={styles.sec}>
            <i className="fa-brands fa-linkedin"></i>
            <a href="https://linkedin.com">LinkedIn</a>
          </div>

          <div className={styles.sec}>
            <i className="fa-brands fa-github"></i>
            <a href="https://github.com">GitHub</a>
          </div>
        </div>

        <div className={styles.col2}>
          <h1 style={{ color: "white", fontSize: "3rem" }}>
            Trash<span style={{ color: "red" }}>T</span>rade
          </h1>
        </div>

        <div className={styles.col3}>
          <h3 style={{ fontWeight: 500, color: "white", marginBottom: "1rem" }}>
            Contact
          </h3>

          <div className={styles.sec}>
            <i className="fa-brands fa-facebook"></i>
            <a href="https://facebook.com">Facebook</a>
          </div>

          <div className={styles.sec}>
            <i className="fa-brands fa-instagram"></i>
            <a href="#">InstaGram</a>
          </div>

          <div className={styles.sec}>
            <i className="fa-brands fa-linkedin"></i>
            <a href="#">LinkedIn</a>
          </div>

          <div className={styles.sec}>
            <i className="fa-brands fa-github"></i>
            <a href="#">GitHub</a>
          </div>
        </div>
      </div>
      <div className="footer">
        <p style={{ color: "white" }}>© Copyright 2023 All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
