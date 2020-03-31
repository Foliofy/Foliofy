import React from "react";
import "./StartupPage.css";
import { Button } from "react-bootstrap";
import Header from "../header/Header";
import Footer from "../footerMain/FooterMain";
const startupPage = props => {
  return (
    <React.Fragment>
      <Header />
      <div className="App">
        <h1 className="Company-Text">Foliofy</h1>
        <h4 className="Company-TagLine">
          Instant portfolio generator{" "}
          <span role="img" aria-label="cool" style={{ fontSize: "2rem" }}>
            😎
          </span>
        </h4>
        <Button className="Start-Button" onClick={props.changed}>
          Let's Start!
        </Button>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default startupPage;
