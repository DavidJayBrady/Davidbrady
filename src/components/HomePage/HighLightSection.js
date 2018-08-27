import React, { Component } from "react";
import { Link } from "react-router-dom";

class HighlightSection extends Component {
  constructor(props) {
    super(props);

    this.bigOpacity = ".25";
    this.smallOpacity = ".10";

    this.state = { opacity: this.smallOpacity };

    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter() {
    this.props.controlColor(this.props.color);
    this.setState({ opacity: this.bigOpacity });
  }

  mouseLeave() {
    this.setState({ opacity: this.smallOpacity });
  }

  render() {
    return (
      <Link
        to={this.props.linkTo}
        style={{ flex: 1, width: "100%", height: "100%" }}
      >
        <div style={{ width: "100%", height: "100%" }}>
          <div
            style={{
              backgroundColor: this.props.colorEtre,
              opacity: this.state.opacity,
              width: "100%",
              height: "100%",
            }}
            onMouseEnter={this.mouseEnter}
            onMouseLeave={this.mouseLeave}
          >
            <img
              src={this.props.energyBall}
              alt={"Energy ball"}
              style={{
                width: "20%",
                height: "20%",
              }}
            />
          </div>
        </div>
      </Link>
    );
  }
}

export default HighlightSection;
