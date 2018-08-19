import React, { Component } from "react";

import HighLightSection from "../HomePage/HighLightSection";

class HighLightScreen extends Component {
  constructor() {
    super();
    this.state = {color: "none"};

    this.setColor = this.setColor.bind(this);
  }

  setColor(childColor)
  {
    this.setState({color: childColor});
  }

  render() {
    return (
      <div>
        <HighLightSection
          colorEtre={this.state.color}
          location={"top-left"}
          linkTo="/yoshi"
          controlColor={this.setColor}
          color="blue"
        />
        <HighLightSection
          colorEtre={this.state.color}
          location={"top-right"}
          linkTo="/bio"
          controlColor={this.setColor}
          color="orange"
        />
        <HighLightSection
          colorEtre={this.state.color}
          location={"bottom-left"}
          linkTo="/"
          controlColor={this.setColor}
          color="green"
        />
        <HighLightSection
          colorEtre={this.state.color}
          location={"bottom-right"}
          linkTo="/"
          controlColor={this.setColor}
          color="red"
        />
      </div>
    );
  }
}

export default HighLightScreen;
