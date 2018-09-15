import React, { Component } from "react";

import HobbyTopic from "./HobbyTopic";

import "./Other.css";

class OtherHobbies extends Component {
	render() {
		return (
			<div className="bioTab">
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						height: "100vh",
						width: "100%",
					}}
				>
					{/* left side */}
					<div
						style={{
							display: "flex",
							flexGrow: 3,
						}}
					>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								width: "100%",
							}}
						>
							<HobbyTopic topic="Calisthenics" />
							<HobbyTopic topic="French" />
							<HobbyTopic topic="Gaming" />
							<HobbyTopic topic="Piano" />
							<HobbyTopic topic="Dancing" />
						</div>
					</div>
					{/* right side */}
					<div
						style={{
							display: "flex",
							flexGrow: 5,
						}}
					/>
					<div />
				</div>
			</div>
		);
	}
}

export default OtherHobbies;
