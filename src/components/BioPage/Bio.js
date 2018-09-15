import React, { Component } from "react";
import "./Bio.css";

import Books from "./Books/Books";
import French from "./French";
import AboutMe from "./AboutMe";

import $ from "jquery";

import RightArrow from "../../Assets/Bio/right_arrow.png";

class Bio extends Component {
	constructor() {
		super();
		this.changeTab = this.changeTab.bind(this);
		this.setActiveKey = this.setActiveKey.bind(this);
		this.state = {
			0: "teal",
			1: "transparent",
			2: "transparent",
			activeKey: 0,
		};
	}

	setActiveKey(key) {
		this.setState({ activeKey: key });
	}

	componentDidMount() {}

	changeTab(direction) {

		if (direction === "right") {
			$("#bio").animate({
				marginLeft: "-=100vw",
			});
			this.state[this.state.activeKey-1] = "transparent";
			this.setState({ activeKey: this.state.activeKey + 1 });
		} else {
			$("#bio").animate({
				marginLeft: "+=100vw",
			});
			// this.state[this.state.activeKey+1] = "transparent";
			// this.setState({ activeKey: this.state.activeKey - 1 });
		}

		this.state[this.state.activeKey] = "teal";
		console.log(this.state);
	}

	render() {
		return (
			<div className="bioPage" id="bioPage" style={{ height: "100%" }}>
				<div className="psuedoNav">
					<div
						className="psuedoNavItem"
						style={{
							backgroundColor: this.state[0],
						}}
					>
						<h4 className="navText">About Me</h4>
					</div>
					<div
						className="psuedoNavItem"
						style={{
							backgroundColor: this.state[1],
						}}
					>
						<h4>Favorite Books</h4>
					</div>
					<div
						className="psuedoNavItem"
						style={{
							backgroundColor: this.state[2],
						}}
					>
						<h4>Other</h4>
					</div>
				</div>

				<div
					id="bio"
					style={{
						display: "flex",
						width: "300vw",
						height: "100%",
						scroll: "smooth",
					}}
				>
					<AboutMe />
					<Books />
					<French />
				</div>

				<img
					src={RightArrow}
					alt="LeftArrow"
					onClick={() => this.changeTab("left")}
					style={{
						width: "5%",
						height: "10%",
						position: "absolute",
						top: "50%",
						left: "0px",
					}}
				/>

				<img
					src={RightArrow}
					alt="RightArrow"
					onClick={() => this.changeTab("right")}
					style={{
						width: "5%",
						height: "10%",
						position: "absolute",
						top: "50%",
						right: "0px",
					}}
				/>
			</div>
		);
	}
}

export default Bio;
