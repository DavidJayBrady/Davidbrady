import React, { Component } from "react";

import "./Hobbies.css";


class HobbyTopicInfo extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div
				style={{
					display: "flex",
					flexGrow: 5,
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<div
					style={{
						display: "flex",
						height: "60%",
						width: "100%",
						justifyContent: "center",
					}}
				>
					<img
						src={this.props.image}
						alt="HobbyInfoImage"
						style={{ height: "80%", padding: "10%" }}
					/>
				</div>
				<div
					style={{
						display: "flex",
						height: "40%",
						width: "100%",
						alignItems: "center",
						textAlign: "center",
					}}
				>
					<h4 style={{ color: "teal", width: "100%" }}>{this.props.text}</h4>
				</div>
			</div>
		);
	}
}

export default HobbyTopicInfo;
