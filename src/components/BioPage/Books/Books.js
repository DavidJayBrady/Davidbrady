import React, { Component } from "react";
import "./Books.css";

import Book from "./Book";

import MistbornImage from "../../../Assets/Bio/Books/mistborn.jpg";
import DuneImage from "../../../Assets/Bio/Books/dune.jpg";
import RadianceImage from "../../../Assets/Bio/Books/radiance.jpeg";

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
					height: "240vh",
				}}
			>
				<div className="bookQuoteRows">
					<div className="bookQuoteRow">
						<div className="bookRow">
							<Book
								cssClass="leftBook"
								quote="Ash fell from the sky"
								image={MistbornImage}
								altText="Mistborn"
								controlQuote={this.setQuote1}
							/>

							<Book
								cssClass="middleBook"
								quote="Without the sardonic, greatness destroys a man"
								image={DuneImage}
								altText="Dune"
								controlQuote={this.setQuote1}
							/>

							<Book
								cssClass="rightBook"
								quote="Journey before destination"
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
								quote="Ash fell from the sky"
								image={MistbornImage}
								altText="Mistborn"
								controlQuote={this.setQuote2}
							/>

							<Book
								cssClass="middleBook"
								quote="Without the sardonic, greatness destroys a man"
								image={DuneImage}
								altText="Dune"
								controlQuote={this.setQuote2}
							/>

							<Book
								cssClass="rightBook"
								quote="Journey before destination"
								image={RadianceImage}
								altText="Words of Radiance"
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
								quote="Ash fell from the sky"
								image={MistbornImage}
								altText="Mistborn"
								controlQuote={this.setQuote3}
							/>

							<Book
								cssClass="middleBook"
								quote="Without the sardonic, greatness destroys a man"
								image={DuneImage}
								altText="Dune"
								controlQuote={this.setQuote3}
							/>

							<Book
								cssClass="rightBook"
								quote="Journey before destination"
								image={RadianceImage}
								altText="Words of Radiance"
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
