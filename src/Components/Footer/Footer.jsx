import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.grid_container}>
        <div className={styles.col1}>
          <p style={{ fontWeight: 500, color: "black" }}>Quick Links</p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: ".8rem",
              justifyContent: "center",
              textAlign: "center",
              gap: "1rem",
            }}
          >
            <Link className="linkss" to="/ResourceHub">
              Resource Hub
            </Link>
            <a href="#about_us" className="linkss">
              Message
            </a>
            <a href="#annual" className="linkss">
              Annual Attractions
            </a>
          </div>
        </div>
        <div className="col2">
          <p style={{ fontWeight: 500, color: "black" }}>Contact Us</p>
          <div className="emailFooter">
            <p style={{ color: "white" }}>Email:- </p>
            <a
              href="mailto:ecs.nitsilchar2023@gmail.com"
              style={{ color: "white", fontSize: "16px" }}
            >
              ecs.nitsilchar2023@gmail.com
            </a>
          </div>
        </div>
        <div className="col3">
          <p style={{ fontWeight: 500, color: "black" }}>Quick Links</p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: ".8rem",
              justifyContent: "center",
              textAlign: "center",
              gap: "1rem",
            }}
          >
            <Link to="/" className="linkss">
              Home
            </Link>
            <Link className="linkss" to="/Member">
              Members
            </Link>
            <Link className="linkss" to="/Gallery">
              Gallery
            </Link>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© Copyright 2022 All rights reserved</p>
        <p>ECS NIT Silchar</p>
      </div>
    </div>
  );
};

export default Footer;
