import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <hr />
      <div className="link">
        <a
          href="https://github.com/RiikaInfinityy/weather-react"
          className="btn btn-light btn-outline-secondary btn-lg btn-edit"
          target="_blank"
          alt="Github Open Source Code for Project"
          rel="noopener noreferrer"
        >
          <i class="bi bi-code-square"></i>
        </a>{" "}
        <a
          href="https://rikalim-portfolio-webpage.netlify.app/"
          className="btn btn-light btn-outline-secondary btn-lg btn-edit"
          target="_blank"
          alt="Rika Lim's Front-End Portfolio Page"
          rel="noopener noreferrer"
        >
          <i className="bi bi-braces-asterisk"></i>
        </a>{" "}
        <a
          href="https://www.shecodes.io/graduates/49436-rika-lim-ming-xian"
          className="btn btn-light btn-outline-secondary btn-lg btn-edit"
          target="_blank"
          alt="Coded by Rika Lim"
          rel="noopener noreferrer"
        >
          <i className="bi bi-person-circle"></i>
        </a>{" "}
        <a
          href="https://rikalim.com"
          className="btn btn-light btn-outline-secondary btn-lg btn-edit"
          target="_blank"
          alt="Rika Lim's Game Dev Portfolio"
          rel="noopener noreferrer"
        >
          <i className="bi bi-browser-chrome"></i>
        </a>
        <p />
      </div>
    </div>
  );
}
