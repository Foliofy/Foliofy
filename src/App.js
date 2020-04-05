import React from "react";
import "./App.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Form from "../src/components/Form/Form";
import StartupPage from "../src/components/StartupPage/StartupPage";

 import Particles from "react-particles-js";
 

 const particleOpt = {
   particles : {
     number : {
       value : 50,
       density : {
         enable: true,
         value_area : 800
       }
     }
   }
 }
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showForm: false
    };
  }
  showFormHandler = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  };
  render() {
    let displayElement = <StartupPage  />;
    // if (this.state.showForm) {
    //   displayElement = <Form />;
    // } else {
    //   displayElement = <StartupPage  />;
    // }
    return (
      <React.Fragment>
        <BrowserRouter> 
        <Switch>
              <Route exact path="/" component={StartupPage} />
              <Route  path="/Form" component={Form} />
          </Switch>
          </BrowserRouter>
        <Particles params={particleOpt} className="Particle-Layer"/> 
        {/* <Particles className="Particle-Layer" /> */}
        
         {/* {displayElement}  */}
      </React.Fragment>
    );
  }
}

export default App;
