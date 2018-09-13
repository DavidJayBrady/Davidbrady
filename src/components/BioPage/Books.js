import React, { Component } from "react";
import "./Books.css";

import MistbornImage from "../../Assets/Bio/Books/mistborn.jpg";
import DuneImage from "../../Assets/Bio/Books/dune.jpg";
import RadianceImage from "../../Assets/Bio/Books/radiance.jpeg";

class Books extends Component {
	constructor() {
		super();
		this.state = { quote: "" };
	}

	render() {
		return (
			<div
				id="bookPage"
				class="bioTab"
				align="center"
				style={{ height: "200%", backgroundColor: "green" }}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						height: "100%",
						width: "100vw",
					}}
				>
					<div className="books">
						<div
							className="mistborn"
							onMouseEnter={() =>
								this.setState({ quote: "Ash fell from the sky" })
							}
						>
							<img src={MistbornImage} alt="Mistborn" />
						</div>
						<div
							className="dune"
							onMouseEnter={() =>
								this.setState({
									quote: "Without the sardonic, greatness destroys a man",
								})
							}
						>
							<img src={DuneImage} alt="Dune" />
						</div>
						<div
							className="radiance"
							onMouseEnter={() =>
								this.setState({ quote: "Journey before destination" })
							}
						>
							<img src={RadianceImage} alt="Words of Radiance" />
						</div>
					</div>
					<div
						style={{
							height: "150px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							backgroundColor: "orange",
						}}
					>
						<h3>{this.state.quote}</h3>
					</div>
				</div>
			</div>
		);
	}
}

export default Books;
