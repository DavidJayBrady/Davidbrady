import React, { Component } from "react";

import "./Hobbies.css";

class OtherHobbies extends Component {
	constructor() {
		super();
		this.state = { backgroundColor: "transparent" };

		this.backgroundColorOn = this.backgroundColorOn.bind(this);
		this.backgroundColorOff = this.backgroundColorOff.bind(this);
	}

	backgroundColorOn() {
		this.setState({ backgroundColor: "rgba(50, 200, 150, .3)" });
	}

	backgroundColorOff() {
		this.setState({ backgroundColor: "transparent" });
	}

	render() {
		return (
			<h2
				style={{ backgroundColor: this.state.backgroundColor }}
				className="hobbyTopic"
				onMouseEnter={this.backgroundColorOn}
				onMouseLeave={this.backgroundColorOff}
			>
				{this.props.topic}
			</h2>
		);
	}
}

export default OtherHobbies;
