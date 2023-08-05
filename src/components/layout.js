import React, { useState, useEffect } from "react";
import NavBar from "./navbar";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import "../style/main.scss";

import TagManager from "react-gtm-module";



const Layout = (props) => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  const { children } = props;

  useEffect(() => {
    TagManager.initialize({ gtmId: "G-G71XJR2J30" });
  }, []);
  return (
    <div>
      <header>
        <NavBar isActive={isActive} toggleNavbar={toggleNavbar} />
      </header>
      <main className="contain">{children}</main>

      <section
        className="secondary-back flex gap-1"
        style={{ paddingBottom: "10px", paddingTop: 0 }}
      >
        <div className="col-6">
          <h5>Formal Flamingo Digital Marketing</h5>
          <p>
            A digital marketing agency in Palm Bay Florida specializing in helping
            your business gain an edge online.
          </p>
        </div>

        <div className="col-6 social-media align-center">
     
          <div>
            <a href="https://twitter.com/flamingodigital">
              <img alt="pink and white twitter icon" src={twitter}></img>
            </a>
            <a href="https://facebook.com/formalflamingo">
              <img alt="pink and white facebook icon" src={facebook}></img>
            </a>
          </div>
        </div>
      </section>

      <footer style={{ background: "pink" }}>
        <p style={{ color: "hotpink" }}>
          Formal Flamingo Web Design ©{new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default Layout;
