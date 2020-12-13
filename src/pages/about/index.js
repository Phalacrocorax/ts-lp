import React from "react";
import Navbar from "./../../components/Navbar";

function About(props) {
  const About = (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <section className="section">
        <div className="container">
          <h1 className="title">About US</h1>
          <h2 className="subtitle">
            A simple container to divide your page into{" "}
            <strong>sections</strong>, like the one you're currently reading
          </h2>
        </div>
      </section>
    </>
  );
  return About;
}

export default About;
