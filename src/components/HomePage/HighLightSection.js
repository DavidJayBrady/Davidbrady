import React, { Component } from "react";
import { Redirect } from "react-router";

class HighlightSection extends Component {
  constructor(props) {
    super(props);

    this.style = { backgroundColor: this.props.colorEtre, opacity: "0" };
    this.state = { navigate: false, hover: false };

    this.bigOpacity = ".35";
    this.smallOpacity = ".15";

    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  mouseEnter() {
    this.props.controlColor(this.props.color);
    this.setState( {navigate: false, hover: true});
    this.style = { backgroundColor: this.props.colorEtre, opacity: this.bigOpacity };
  }

  mouseLeave() {
	  this.setState( {navigate: false, hover: false});
	  this.props.controlColor("none");
  }

  handleClick() {
    this.setState({ navigate: true });
  }

  render() {

  	if (this.state.hover)
	{
		this.style = { backgroundColor: this.props.colorEtre, opacity: this.bigOpacity };

	}
	else {
		this.style = {backgroundColor: this.props.colorEtre, opacity: this.smallOpacity};
	}

    if (this.state.navigate) {
      return <Redirect to={this.props.linkTo} />;
    }

    return (
      <div
        className={this.props.location}
        style={this.style}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        onClick={this.handleClick}
      />
    );
  }
}

export default HighlightSection;
