import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";

import HobbyTopic from "./HobbyTopic";
import HobbyTopicInfo from "./HobbyTopicInfo";

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
						<Link to="/bio/hobbies#Calisthenics">
							<HobbyTopic topic="Calisthenics" />
						</Link>
						<Link to="/bio/hobbies#Reading">
							<HobbyTopic topic="Reading" />
						</Link>
						<Link to="/bio/hobbies#French">
							<HobbyTopic topic="French" />
						</Link>
						<Link to="/bio/hobbies#Gaming">
							<HobbyTopic topic="Gaming" />
						</Link>
						<Link to="/bio/hobbies#Piano">
							<HobbyTopic topic="Piano" />
						</Link>
						<Link to="/bio/hobbies#Dancing">
							<HobbyTopic topic="Dancing" />
						</Link>
					</div>
					{/* right side */
					/* add Switch + Route setup here to hide/show on click */}

					<HobbyTopicInfo image={MistbornImage} text="Hey text here" />
				</div>
			</div>
		);
	}
}

export default Hobbies;
