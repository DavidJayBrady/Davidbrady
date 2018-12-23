import React, { Component } from "react";
import "./HighLightScreen.css";

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
					className="bigRow"
				>
					<HighLightSection
						className="bigRow"
						colorEtre={this.state.color}
						linkTo="/yoshi"
						text="Yoshi"
						controlColor={this.setColor}
						color="blue"
						energyBall={BlueEnergy}
					/>



"





				</div>

				<div
					className="littleRow">
					<h1 className="welcomeText">
						Welcome to David's Site
					</h1>
				</div>

				<div
					className="bigRow"
				>
					<HighLightSection
						colorEtre={this.state.color}
						linkTo="/bio"
						text="Bio"
						controlColor={this.setColor}
						color="pink"
						energyBall={GreenEnergy}
					/>

				</div>
			</div>
		);
	}
}

export default HighLightScreen;
