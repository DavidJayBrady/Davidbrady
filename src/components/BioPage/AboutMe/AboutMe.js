import React, { Component } from "react";

import "./AboutMe.css";
import SelfImage from "../../../Assets/Bio/self.jpg"

class AboutMe extends Component {
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
								alignItems: "center"
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
						<div
							className="bradyContainer"
							style={{  flexGrow: 2 }}
						/>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							height: "30vh"
						}}
					>
						<h3 style={{color: "teal"}}> David Brady: 4th year CSE @ UCI </h3>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutMe;
