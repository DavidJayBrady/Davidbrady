import React, { Component } from "react";

import "./Hobbies.css";

class HobbyTopicInfo extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	render() {
		return (
			<div className="hobbyRightSide">
				<div
					style={{
						display: "flex",
						//height: "60%",
						flexGrow: 3,
						width: "100%",
						justifyContent: "center",
					}}
				>
					<img
						src={this.props.image}
						alt="HobbyInfoImage"
						style={{
							paddingTop: "5%",
							paddingLeft: "10%",
							paddingRight: "10%",
							width: "100%",
						}}
					/>
				</div>
				<h2
					style={{
						color: "lightSkyBlue",
						display: "flex",
						flexGrow: 2,
						flexWrap: "nowrap",
						height: "40%",
						textAlign: "center",
						width: "80%",
					}}
				>
					{this.props.text}
				</h2>
			</div>
		);
	}
}

export default HobbyTopicInfo;
