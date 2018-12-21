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
							width: "80%",
							height: "80%",
							maxHeight: "350px",
							maxWidth: "500px"
						}}
					/>
				</div>
				<h3
					style={{
						color: "lightSkyBlue",
						display: "flex",
						flexGrow: 2,
						flexWrap: "nowrap",
						height: "40%",
						width: "60%",
						justifyContent: "center",
					}}
				>
					{this.props.text}
				</h3>
			</div>
		);
	}
}

export default HobbyTopicInfo;
