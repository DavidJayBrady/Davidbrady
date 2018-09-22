import React, { Component } from "react";

import "./AboutMe.css";
import SelfImage from "../../../Assets/Bio/self.jpg";

class AboutMe extends Component {
	constructor() {
		super();
		this.state = {
			bioMessage:
				"Hello, welcome to my website! I'm David Brady. I currently attend UC Irvine as a 4th year " +
				"Computer Science and Engineering student. I'm interested in exploring how computer science, " +
				"engineering, and environmental science can work together to change Earth for the better, especially " +
				"relating to lowering CO2 levels and countering the acidification of our oceans. " +
				"If you'd like to know more about me personally, see the other tabs on this page by clicking the arrows " +
				"at the side of the screen.",
		};
	}

	render() {
		return (
			<div className="bioTab">
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						height: "100%",
						width: "100vw",
					}}
				>
					<div
						style={{
							display: "flex",
							height: "60vh",
						}}
					>
						<div
							className="bradyContainer"
							style={{
								display: "flex",
								flexGrow: 1,
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<img
								src={SelfImage}
								alt="sdf"
								style={{
									height: "80%",
									width: "70%",
									display: "flex",
								}}
							/>
						</div>
						<div className="bradyContainer" style={{ flexGrow: 2 }}>
							<p style={{ color: "orange" }}>holder</p>
						</div>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							height: "30vh",
						}}
					>
						<h3 style={{ color: "orange" }} className="bioMessage">
							{this.state.bioMessage}{" "}
						</h3>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutMe;
