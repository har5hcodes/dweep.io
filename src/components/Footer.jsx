import React from "react";
import "../../src/App.css";

const Footer = (props) => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="box1">
          {props.data.footerLinks.map((link) => {
            return <a href="/">{link}</a>;
          })}
        </div>
        <div className="box2">
          <a href="/">props.data.emailAddress</a>
          <a href="/">Made with love in India</a>
          <a href="/">
            <div className="iconsContainer">
              <a href="/">
                <img
                  src={require("../assets/LinkedinLogo.png")}
                  alt="LinkedinLogo"
                />
              </a>
              <a href="/">
                <img
                  src={require("../assets/InstagramLogo.png")}
                  alt="InstagramLogo"
                />
              </a>
            </div>
          </a>
          <a href="/">hello@dweep.io</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
