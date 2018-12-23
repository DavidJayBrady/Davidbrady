import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./HighLight.css";

class HighlightSection extends Component {
	constructor(props) {
		super(props);

		this.weakBackgroundOpacity = "0";
		this.strongBackgroundOpacity = ".15";

		this.weakEnergyOpacity = ".50";
		this.strongEnergyOpacity = "1";

		this.state = {
			backgroundOpacity: this.weakBackgroundOpacity,
			energyOpacity: this.weakEnergyOpacity,
			hover: false,
		};

		this.mouseEnter = this.mouseEnter.bind(this);
		this.mouseLeave = this.mouseLeave.bind(this);
	}

	mouseEnter() {
		this.props.controlColor(this.props.color);
		this.setState({
			backgroundOpacity: this.strongBackgroundOpacity,
			energyOpacity: this.strongEnergyOpacity,
			hover: true,
		});
	}

	mouseLeave() {
		this.setState({
			backgroundOpacity: this.weakBackgroundOpacity,
			energyOpacity: this.weakEnergyOpacity,
			hover: false,
		});
	}

	render() {
		return (
			<Link
				to={this.props.linkTo}
				style={{ flex: 1, width: "100%", height: "100%" }}
			>
				<div
					style={{
						width: "100%",
						height: "100%",
						position: "relative",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
					onMouseEnter={this.mouseEnter}
					onMouseLeave={this.mouseLeave}
					className="HighLighter"
				>
					<div
						style={{
							position: "absolute",
							width: "100%",
							height: "100%",
							backgroundColor: this.props.colorEtre,
							opacity: this.state.backgroundOpacity,
						}}
					/>
					<img
						src={this.props.energyBall}
						alt={"Energy ball"}
						style={{
							width: "20%",
							height: "20%",
							opacity: this.state.energyOpacity,
							animation: "EnergySpin infinite 20s linear",
							animationPlayState: this.state.hover ? "running" : "paused",
							display: "flex",
						}}
					/>
					<h1 style={{ color: this.props.color }}>{this.props.text}</h1>
				</div>
			</Link>
		);
	}
}

export default HighlightSection;
