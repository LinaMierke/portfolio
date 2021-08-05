import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import "./navbar.css";

export default function NavBar() {
  return (
    <div className="nav">
      <div className="bar">
        <AppBar
          position="inline"
          style={{
            display: "flex",
            backgroundColor: "white",
            border: "none",
            boxShadow: "none",
          }}
        >
          <Toolbar style={{ display: "flex", justifyContent: "left" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                className="uno"
                style={{ paddingRight: "20px", color: "##292E46" }}
              >
                Home
              </Button>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Button
                className="uno"
                style={{ paddingRight: "20px", color: "##292E46" }}
              >
                About{" "}
              </Button>
            </Link>
            <Link to="/portfolio" style={{ textDecoration: "none" }}>
              <Button
                className="uno"
                style={{ paddingRight: "20px", color: "##292E46" }}
              >
                Portfolio
              </Button>
            </Link>
            <a
              href="https://docs.google.com/document/d/1OkJmj16TNvD3lDe7rLN2YTnEW76aaJN0HiYKjHWeS0c/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button
                className="uno"
                style={{ paddingRight: "20px", color: "#292E46" }}
              >
                Resume
              </Button>
            </a>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
