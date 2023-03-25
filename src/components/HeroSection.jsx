import React from "react";
import "../../src/App.css";

const HeroSection = (props) => {
  return (
    <section>
      <div className="infoContainer">
        <p className="header">{props.data.header}</p>
        <p className="caption">{props.data.caption}</p>
        <p className="tagline1">{props.data.tagline1}</p>
        <form>
          <input type="email" placeholder="Your e-mail address" />
          <button>Register Now</button>
          <p className="tagline2">{props.data.tagline2}</p>
        </form>
      </div>
      <div className="imgContainer">
        <img src={require("../assets/person.png")} alt="person-vector" />
      </div>
    </section>
  );
};

export default HeroSection;
