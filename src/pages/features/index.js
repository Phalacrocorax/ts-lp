import React from "react";
import Navbar from "./../../components/Navbar";

function Features(props) {
  const Feature1 = (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <section className="section">
        <div className="container">
          <h1 className="title">Section 1</h1>
          <h2 className="subtitle">
            A simple container to divide your page into{" "}
            <strong>sections</strong>, like the one you're currently reading
          </h2>
        </div>
      </section>
    </>
  );
  const Feature2 = (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <section className="section">
        <div className="container">
          <h1 className="title">Section 2</h1>
          <h2 className="subtitle">
            A simple container to divide your page into{" "}
            <strong>sections</strong>, like the one you're currently reading
          </h2>
        </div>
      </section>
    </>
  );
  const Feature3 = (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <section className="section">
        <div className="container">
          <h1 className="title">Section 3</h1>
          <h2 className="subtitle">
            A simple container to divide your page into{" "}
            <strong>sections</strong>, like the one you're currently reading
          </h2>
        </div>
      </section>
    </>
  );
  const Feature4 = (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <section className="section">
        <div className="container">
          <h1 className="title">Section 4</h1>
          <h2 className="subtitle">
            A simple container to divide your page into{" "}
            <strong>sections</strong>, like the one you're currently reading
          </h2>
        </div>
      </section>
    </>
  );

  switch (props.match.params.id) {
    case "1":
      return Feature1;
    case "2":
      return Feature2;
    case "3":
      return Feature3;
    case "4":
      return Feature4;
    default:
      console.log(props.match.params.id);
      return Feature1;
  }
}

export default Features;
