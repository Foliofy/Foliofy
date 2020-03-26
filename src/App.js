import React from "react";
import "./App.css";
import Header from "../src/components/header/Header";
import Form from "../src/components/Form/Form";
import StartupPage from "../src/components/StartupPage/StartupPage";

// import Particles from "../src/components/Particle/ParticleComponent"
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
    let displayElement = <StartupPage changed={this.showFormHandler} />;
    if (this.state.showForm) {
      displayElement = <Form />;
    } else {
      displayElement = <StartupPage changed={this.showFormHandler} />;
    }
    return (
      <React.Fragment>
        <Header />
        {/* <Particles /> */}
        {/* <Particles className="Particle-Layer" /> */}
        {displayElement}
      </React.Fragment>
    );
  }
}

export default App;
