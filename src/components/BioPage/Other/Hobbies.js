import React, { Component } from "react";

import HobbyTopic from "./HobbyTopic";

import "./Hobbies.css";
import MistbornImage from "../../../Assets/Bio/Books/mistborn.jpg";

class Hobbies extends Component {
	render() {
		return (
			<div className="bioTab">
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						height: "90vh",
						width: "100%",
					}}
				>
					{/* left side */}
					<div
						style={{
							display: "flex",
							flexGrow: 3,
							flexDirection: "column",
							backgroundColor: "rgba(0,0,0,.5)",
						}}
					>
						<HobbyTopic topic="Calisthenics" />
						<HobbyTopic topic="Reading" />
						<HobbyTopic topic="French" />
						<HobbyTopic topic="Gaming" />
						<HobbyTopic topic="Piano" />
						<HobbyTopic topic="Dancing" />
					</div>
					{/* right side */}
					<div
						style={{
							display: "flex",
							flexGrow: 5,
							flexDirection: "column",
							alignItems: "center"
						}}
					>
						<div style={{ display: "flex", flexGrow: 3 }}>
							<img
								src={MistbornImage}
								alt="text"
							/>
						</div>
						<div style={{ display: "flex", flexGrow: 2 }}>
							<img
								src={MistbornImage}
								alt="text"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Hobbies;
