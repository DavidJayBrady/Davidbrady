import React, { Component } from "react";

import "./Other.css";

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
			<div style={{backgroundColor:"rgba(0,0,0,.4"}}>
				<div
					className="hobbyTopic"
					onMouseEnter={this.backgroundColorOn}
					onMouseLeave={this.backgroundColorOff}
					style={{ backgroundColor: this.state.backgroundColor }}
				>
					<h2> {this.props.topic} </h2>
				</div>
			</div>
		);
	}
}

export default OtherHobbies;
