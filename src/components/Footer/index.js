import React from "react";
import Section from "./../Section";
import { Link } from "./../../util/router.js";
import "./styles.scss";

function Footer(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="FooterComponent__container container">
        <div className="columns">
          <div className="column is-5 is-4-widescreen">
            <Link className="brand" to="/">
              <svg
                t="1607870081866"
                class="icon_logo"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="11759"
                width="32"
                height="32"
              >
                <path
                  d="M922 962.16H511.33c-247.03 0-448-200.98-448-448s200.97-448 448-448c149.06 0 287.93 73.83 371.47 197.51 11.54 17.08 7.05 40.29-10.04 51.83-17.09 11.52-40.3 7.04-51.83-10.04-69.64-103.09-185.38-164.63-309.6-164.63C305.48 140.83 138 308.3 138 514.16s167.48 373.33 373.33 373.33H922c20.62 0 37.33 16.72 37.33 37.33s-16.71 37.34-37.33 37.34z"
                  p-id="11760"
                  fill="#286492"
                ></path>
                <path
                  d="M671.75 581.39H472.83c-20.62 0-37.33-16.72-37.33-37.33V345.14c0-20.62 16.72-37.33 37.33-37.33s37.33 16.72 37.33 37.33v161.58h161.58c20.62 0 37.33 16.72 37.33 37.33s-16.7 37.34-37.32 37.34zM922 728.41H746.96c-20.62 0-37.33-16.72-37.33-37.33s16.72-37.33 37.33-37.33H922c20.62 0 37.33 16.72 37.33 37.33s-16.71 37.33-37.33 37.33zM922 525.61h-87.52c-20.62 0-37.33-16.72-37.33-37.33s16.72-37.33 37.33-37.33H922c20.62 0 37.33 16.72 37.33 37.33s-16.71 37.33-37.33 37.33z"
                  p-id="11761"
                  fill="#286492"
                ></path>
              </svg>
              <b className="is-size-4" style={{ color: "black" }}>
                TimeShot
              </b>
              {/* <div className="brand-icon"> */}
              {/* <img
                  className="FooterComponent__logo"
                  src={props.logo}
                  alt="Logo"
                /> */}
              {/* </div> */}
            </Link>

            {props.description && (
              <p className="FooterComponent__description">
                {props.description}
              </p>
            )}

            {props.copywrite && (
              <p className="FooterComponent__copywrite">{props.copywrite}</p>
            )}
          </div>
          <div className="column is-7 is-6-widescreen is-offset-2-widescreen">
            <div className="columns">
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label">Product</p>
                  <ul className="menu-list">
                    <li>
                      <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label">Company</p>
                  <ul className="menu-list">
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://medium.com"
                        rel="noopener noreferrer"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label">Social</p>
                  <ul className="menu-list">
                    <li>
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://uploads.divjoy.com/icon-facebook.svg"
                          alt="Facebook"
                        />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://uploads.divjoy.com/icon-instagram.svg"
                          alt="Instagram"
                        />
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://uploads.divjoy.com/icon-twitter.svg"
                          alt="Twitter"
                        />
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Footer;
