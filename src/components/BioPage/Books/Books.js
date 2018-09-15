import React, { Component } from "react";
import "./Books.css";

import Book from "./Book";

import MistbornImage from "../../../Assets/Bio/Books/mistborn.jpg";
import DuneImage from "../../../Assets/Bio/Books/dune.jpg";
import RadianceImage from "../../../Assets/Bio/Books/radiance.jpeg";

class Books extends Component {
	constructor() {
		super();
		this.state = { quote: "" };

		this.setQuote = this.setQuote.bind(this);
	}

	setQuote(childQuote) {
		this.setState({ quote: childQuote });
	}

	render() {
		return (
			<div
				id="bookPage"
				className="bioTab"
				align="center"
				style={{ height: "200%", display: "flex" }}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						height: "100%",
						width: "100vw",
					}}
				>
					<div className="bookRow">
						<Book
							cssClass="mistborn"
							quote="Ash fell from the sky"
							image={MistbornImage}
							altText="Mistborn"
							controlQuote={this.setQuote}
						/>

						<Book
							cssClass="dune"
							quote="Without the sardonic, greatness destroys a man"
							image={DuneImage}
							altText="Dune"
							controlQuote={this.setQuote}
						/>

						<Book
							cssClass="radiance"
							quote="Journey before destination"
							image={RadianceImage}
							altText="Words of Radiance"
							controlQuote={this.setQuote}
						/>
					</div>
					<div className="bookQuote">
						<h3>{this.state.quote}</h3>
					</div>
				</div>
			</div>
		);
	}
}

export default Books;
