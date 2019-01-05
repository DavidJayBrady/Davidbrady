import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { Link, BrowserRouter } from "react-router-dom";

import HobbyTopic from "./HobbyTopic";
import HobbyTopicInfo from "./HobbyTopicInfo";

import "./Hobbies.css";

import CalisthenicsImage from "../../../Assets/Hobbies/rings.jpg"
import BJJImage from "../../../Assets/Hobbies/bjj.jpg"
import RocketLeagueImage from "../../../Assets/Hobbies/rocketleague.jpg"
import VGDCImage from "../../../Assets/Hobbies/VGDC.png"
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
						<Link to="/bio/hobbies/gamedev">
							<HobbyTopic topic="GameDev" />
						</Link>
					</div>

					{/* right side */
					/* add Switch + Route setup here to hide/show on click */}

					<Switch>
						<Route
							path="/bio/hobbies/calisthenics"
							component={() => (
								<HobbyTopicInfo image={CalisthenicsImage} text="Bodyweight exercises focused on progression to harder movements rather than increasing weight. My way of keeping exercise fun" />
							)}
						/>
						<Route
							path="/bio/hobbies/bjj"
							component={() => (
								<HobbyTopicInfo image={BJJImage} text="A ground grappling martial art, focused on controlling your opponent. Trained since 2013, officer in UCI BJJ club 2018-2019" />
							)}
						/>
						<Route
							path="/bio/hobbies/reading"
							component={() => (
								<HobbyTopicInfo image={Reading} text="Top 3 books are Mistborn, Words of Radiance, and Dune, as their worlds are incredibly unique and interesting." />
							)}
						/>
						<Route
							path="/bio/hobbies/french"
							component={() => (
								<HobbyTopicInfo image={French} text="J'étudie le français depuis Janvier 2018 et ça continue. J'ai pris un cours, et je suis allé en France l'été 2018." />
							)}
						/>
						<Route
							path="/bio/hobbies/gaming"
							component={() => (
								<HobbyTopicInfo image={RocketLeagueImage} text="Rocket League is currently my fav. Also really enjoy Smash Bros, Slay the Spire, and Dota." />
							)}
						/>
						<Route
							path="/bio/hobbies/gamedev"
							component={() => (
								<HobbyTopicInfo image={VGDCImage} text="Participated in Irvine's Video Game Development Club to develop a game. Leaded a team of 6 in Fall 2018." />
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
