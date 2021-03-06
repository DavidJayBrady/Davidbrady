import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { Link, BrowserRouter } from "react-router-dom";

import HobbyTopic from "./HobbyTopic";
import HobbyTopicInfo from "./HobbyTopicInfo";

import "./Hobbies.css";

import MistbornImage from "../../../Assets/Bio/Books/mistborn.jpg";
import Reading from "../../../Assets/Hobbies/books.jpeg";
import French from "../../../Assets/Hobbies/french.jpg";

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
					<div className="hobbyLeftSide">
						<Link to="/bio/hobbies/calisthenics">
							<HobbyTopic topic="Calisthenics" />
						</Link>
						<Link to="/bio/hobbies/bjj">
							<HobbyTopic topic="Brazilian Jiu Jitsu" />
						</Link>
						<Link to="/bio/hobbies/reading">
							<HobbyTopic topic="Reading" />
						</Link>
						<Link to="/bio/hobbies/french">
							<HobbyTopic topic="French" />
						</Link>
						<Link to="/bio/hobbies/gaming">
							<HobbyTopic topic="Gaming" />
						</Link>
						<Link to="/bio/hobbies/dancing">
							<HobbyTopic topic="Dancing" />
						</Link>
					</div>
					{/* right side */
					/* add Switch + Route setup here to hide/show on click */}

					<Switch>
						<Route
							path="/bio/hobbies/calisthenics"
							component={() => (
								<HobbyTopicInfo image={MistbornImage} text="Calisthenics" />
							)}
						/>
						<Route
							path="/bio/hobbies/bjj"
							component={() => (
								<HobbyTopicInfo image={MistbornImage} text="BJJB JJB JJBJJ BJJBJJBJ JBJ JBJJBJJ BJJBJ JBJJBJ JBJ JBJJ BJJBJ JBJJBJ JBJJ BJ JBJJBJ JBJJ BJ JBJJBJ JBJ JBJJ" />
							)}
						/>
						<Route
							path="/bio/hobbies/reading"
							component={() => (
								<HobbyTopicInfo image={Reading} text="Fantasy worlds are awesome. I mostly like books based on how cool the world is. Top 3 books are Mistborn, Words of Radiance, and Dune." />
							)}
						/>
						<Route
							path="/bio/hobbies/french"
							component={() => (
								<HobbyTopicInfo image={French} text="Studied for ~8 months. Picked it up impulsively but took it more seriously once I found people to practice with!" />
							)}
						/>
						<Route
							path="/bio/hobbies/gaming"
							component={() => (
								<HobbyTopicInfo image={MistbornImage} text="gaming" />
							)}
						/>
						<Route
							path="/bio/hobbies/dancing"
							component={() => (
								<HobbyTopicInfo image={MistbornImage} text="dancing" />
							)}
						/>
					</Switch>
				</div>
			</div>
		);
	}
}

/*
 component={() => (
 <HobbyTopicInfo image={MistbornImage} text="whoooop" />
 )}
 */

export default Hobbies;
