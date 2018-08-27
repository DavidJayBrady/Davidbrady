import React, { Component } from "react";

import HighLightSection from "../HomePage/HighLightSection";
import BlueEnergy from "../../Assets/MainPage/blue_energy.jpg";

class HighLightScreen extends Component {
  constructor() {
    super();
    this.state = { color: "none" };

    this.setColor = this.setColor.bind(this);
  }

  setColor(childColor) {
    this.setState({ color: childColor });
  }

  render() {
    return (
      <div style={{display: "flex", flexDirection: "column", height:"100%", width: "100%"}}>
        <div style={{display: "flex", flexDirection: "row", flex: 1, width: "100%"}}>
          <HighLightSection
            colorEtre={this.state.color}
            linkTo="/yoshi"
            controlColor={this.setColor}
            color="blue"
            energyBall={BlueEnergy}
          />
          <HighLightSection
            colorEtre={this.state.color}
            linkTo="/bio"
            controlColor={this.setColor}
            color="orange"
            energyBall={BlueEnergy}
          />
        </div>
        <div style={{display: "flex", flexDirection: "row", flex: 1, widht: "100%"}}>
          <HighLightSection
            colorEtre={this.state.color}
            linkTo="/"
            controlColor={this.setColor}
            color="green"
            energyBall={BlueEnergy}
          />
          <HighLightSection
            colorEtre={this.state.color}
            linkTo="/"
            controlColor={this.setColor}
            color="red"
            energyBall={BlueEnergy}
          />
        </div>
      </div>
    );
  }
}

export default HighLightScreen;
