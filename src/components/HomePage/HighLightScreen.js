import React, { Component } from "react";

import HighLightSection from "../HomePage/HighLightSection";
import BlueEnergy from "../../Assets/MainPage/blue_energy.png";
import GreenEnergy from "../../Assets/MainPage/green_energy.png";
import RedEnergy from "../../Assets/MainPage/red_energy.png";
import YellowEnergy from "../../Assets/MainPage/yellow_energy.png";

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
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					height: "100%",
					width: "100%",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						flex: 1,
						width: "100%",
					}}
				>
					<HighLightSection
						colorEtre={this.state.color}
						linkTo="/yoshi"
						text="Yoshi"
						controlColor={this.setColor}
						color="blue"
						energyBall={BlueEnergy}
					/>
					<HighLightSection
						colorEtre={this.state.color}
						linkTo="/"
						text="Constructing"
						controlColor={this.setColor}
						color="green"
						energyBall={GreenEnergy}
					/>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						flex: 1,
						widht: "100%",
					}}
				>
					<HighLightSection
						colorEtre={this.state.color}
						linkTo="/bio"
						text="Bio"
						controlColor={this.setColor}
						color="yellow"
						energyBall={YellowEnergy}
					/>
					<HighLightSection
						colorEtre={this.state.color}
						linkTo="/"
						text="Constructing"
						controlColor={this.setColor}
						color="red"
						energyBall={RedEnergy}
					/>
				</div>
			</div>
		);
	}
}

export default HighLightScreen;
