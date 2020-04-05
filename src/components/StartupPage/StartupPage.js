import React from "react";
import "./StartupPage.css";
import {Button} from "react-bootstrap";
import {Link, withRouter} from "react-router-dom";
import {BrowserRouter,Switch, Route} from "react-router-dom";
import Form from "../Form/Form"

const startupPage = (props) => {

    return (
        <div className="App">
          
          <h1 className="Company-Text">Foliofy</h1>
          <h4 className="Company-TagLine">
            Instant portfolio generator{" "}
            <span role="img" aria-label="cool" style={{ fontSize: "2rem" }}>
              😎
            </span>
          </h4>
          <Button className="Start-Button" >
            <Link  to={"/Form"}  >
            Let's Start!
            </Link>
          </Button>
        </div>
    );
}

export default withRouter(startupPage);
