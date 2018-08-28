import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./HighLight.css";

class HighlightSection extends Component {
	constructor(props) {
		super(props);

		this.weakBackgroundOpacity = ".15";
		this.strongBackgroundOpacity = ".25";

		this.weakEnergyOpacity = ".50";
		this.strongEnergyOpacity = "1";

		this.state = {
			backgroundOpacity: this.weakBackgroundOpacity,
			energyOpacity: this.weakEnergyOpacity,
			hover: false
		};

		this.mouseEnter = this.mouseEnter.bind(this);
		this.mouseLeave = this.mouseLeave.bind(this);
	}

	mouseEnter() {
		this.props.controlColor(this.props.color);
		this.setState({
			backgroundOpacity: this.strongBackgroundOpacity,
			energyOpacity: this.strongEnergyOpacity,
			hover: true
		});
	}

	mouseLeave() {
		this.setState({
			backgroundOpacity: this.weakBackgroundOpacity,
			energyOpacity: this.weakEnergyOpacity,
			hover: false
		});
	}

	render() {
		return (
			<Link
				to={this.props.linkTo}
				style={{ flex: 1, width: "100%", height: "100%" }}
			>
				<div
					style={{ width: "100%", height: "100%", position: "relative" }}
					onMouseEnter={this.mouseEnter}
					onMouseLeave={this.mouseLeave}
				>
					<div
						style={{
							backgroundColor: this.props.colorEtre,
							opacity: this.state.backgroundOpacity,
							width: "100%",
							height: "100%",
						}}
					/>
					<img
						src={this.props.energyBall}
						alt={"Energy ball"}
						style={{
							width: "20%",
							height: "20%",
							position: "absolute",
							top: "30%",
							left: "40%",
							opacity: this.state.energyOpacity,
							animation: "EnergySpin infinite 20s linear",
							animationPlayState: (this.state.hover)? "running": "paused"
						}}
					/>
				</div>
			</Link>
		);
	}
}

export default HighlightSection;
