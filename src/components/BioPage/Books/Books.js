import React, { Component } from "react";
import "./Books.css";

import Book from "./Book";

import MistbornImage from "../../../Assets/Bio/Books/mistborn.jpg";
import DuneImage from "../../../Assets/Bio/Books/dune.jpg";
import RadianceImage from "../../../Assets/Bio/Books/radiance.jpeg";
import CountImage from "../../../Assets/Bio/Books/count.jpg"
import EragonImage from "../../../Assets/Bio/Books/eragon.png"
import ElantrisImage from "../../../Assets/Bio/Books/elantris.jpg"
import EnderImage from "../../../Assets/Bio/Books/ender.jpg"
import NameOfWindImage from "../../../Assets/Bio/Books/nameOfWind.jpg"
import EyeOfWorldImage from "../../../Assets/Bio/Books/eyeOfWorld.jpg"



class Books extends Component {
	constructor() {
		super();
		this.state = { quote1: "", quote2: "", quote3: "" };

		this.setQuote1 = this.setQuote1.bind(this);
		this.setQuote2 = this.setQuote2.bind(this);
		this.setQuote3 = this.setQuote3.bind(this);
	}

	setQuote1(childQuote) {
		this.setState({ quote1: childQuote });
	}

	setQuote2(childQuote) {
		this.setState({ quote2: childQuote });
	}

	setQuote3(childQuote) {
		this.setState({ quote3: childQuote });
	}

	render() {
		return (
			<div
				id="bookPage"
				className="bioTab"
				align="center"
				style={{
					height: "240vh", display: "flex", width: "100vw", overflowY: "scroll"
				}}
			>
				<div className="bookQuoteRows">
					<div className="bookQuoteRow">
						<div className="bookRow">
							<Book
								cssClass="leftBook"
								quote="“Ash fell from the sky”"
								image={MistbornImage}
								altText="Mistborn"
								controlQuote={this.setQuote1}
							/>

							<Book
								cssClass="middleBook"
								quote="“Without the sardonic, greatness destroys a man”"
								image={DuneImage}
								altText="Dune"
								controlQuote={this.setQuote1}
							/>

							<Book
								cssClass="rightBook"
								quote="“Journey before destination”"
								image={RadianceImage}
								altText="Words of Radiance"
								controlQuote={this.setQuote1}
							/>
						</div>
						<div className="bookQuote">
							<h3>{this.state.quote1}</h3>
						</div>
					</div>
					<div className="bookQuoteRow">
						<div className="bookRow">
							<Book
								cssClass="leftBook"
								quote="“It's necessary to have wished for death in order to know how good it is to live.” "
								image={CountImage}
								altText="Count of Monte Cristo"
								controlQuote={this.setQuote2}
							/>

							<Book
								cssClass="middleBook"
								quote="“The greatest enemy is one that has nothing to lose.”"
								image={EragonImage}
								altText="Eragon"
								controlQuote={this.setQuote2}
							/>

							<Book
								cssClass="rightBook"
								quote="“Do not dash if you only have the strength to walk, and do not waste your time pushing on the walls that will not give. More importantly, don't shove where a pat would be sufficient.”"
								image={ElantrisImage}
								altText="Elantris"
								controlQuote={this.setQuote2}
							/>
						</div>
						<div className="bookQuote">
							<h3>{this.state.quote2}</h3>
						</div>
					</div>
					<div className="bookQuoteRow">
						<div className="bookRow">
							<Book
								cssClass="leftBook"
								quote="“In the moment when I truly understand my enemy, understand him well enough to defeat him, then in that very moment I also love him. I think it’s impossible to really understand somebody, what they want, what they believe, and not love them the way they love themselves. And then, in that very moment when I love them.... I destroy them.”"
								image={EnderImage}
								altText="Ender's Game"
								controlQuote={this.setQuote3}
							/>

							<Book
								cssClass="middleBook"
								quote="“It's like everyone tells a story about themselves inside their own head. Always. All the time. That story makes you what you are. We build ourselves out of that story.”"
								image={NameOfWindImage}
								altText="Name of the Wind"
								controlQuote={this.setQuote3}
							/>

							<Book
								cssClass="rightBook"
								quote="“Violence harms the one who does it as much as the one who receives it.”"
								image={EyeOfWorldImage}
								altText="The Eye Of The World"
								controlQuote={this.setQuote3}
							/>
						</div>
						<div className="bookQuote">
							<h3>{this.state.quote3}</h3>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Books;
