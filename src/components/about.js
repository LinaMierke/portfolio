import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Mail";
import "./about.css";

export default function About() {
  return (
    <div className="container2" style={{ paddingTop: "0" }}>
      <div style={{ height: "50%", width: "50%" }}>
        <div className="inner">
          <h1> Hello, I'm Lina </h1>
          <p>
            
            I'm a Washington DC-based Software Developer who loves to study and create. As a former teacher I know the amazing
            power knowledge has in any individual so I treat every day as a new
            opportunity to learn. 
            I bring hard work, creativity, attention to
            detail, and excellent organizational skills to my daily work. If you
            want to know more about me, don't hesitate to reach out.
          </p>
        </div>

        <img
          src="https://i.imgur.com/pVG4hYi.png"
          alt=""
          rel="noopener noreferrer"
          className="img"
        />
        <div className="social">
          <a
            href="https://www.linkedin.com/in/linamierke/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon
              className="socials"
              style={{ fontSize: 50, padding: "20px", color: "#4E127D" }}
            />
          </a>
          <a
            href="https://github.com/LinaMierke"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon
              className="socials"
              style={{ fontSize: 50, padding: "20px", color: "#4E127D" }}
            />
          </a>
          <a
            href="mailto:linamierke@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon
              className="socials"
              style={{ fontSize: 50, padding: "20px", color: "#4E127D" }}
            />
            <span class="Email me"></span>
          </a>
        </div>
      </div>
    </div>
  );
}
