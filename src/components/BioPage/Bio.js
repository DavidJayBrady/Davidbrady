import React, { Component } from 'react';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

import Books from "./Books";
import French from "./French";

class Bio extends Component {

	render() {
		return (
			<div>
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							David Brady
						</Navbar.Brand>
					</Navbar.Header>
					<Nav           bsStyle="tabs"
								   justified
								   activeKey={1}>
						<NavItem eventKey={1} href="#">
							<Link to="/bio/books"> Books </Link>
						</NavItem>
						<NavItem eventKey={2} href="#">
							<Link to="/bio/french"> French </Link>
						</NavItem>
						<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
							<MenuItem eventKey={3.1}>Action</MenuItem>
							<MenuItem eventKey={3.2}>Another action</MenuItem>
							<MenuItem eventKey={3.3}>Something else here</MenuItem>
							<MenuItem divider />
							<MenuItem eventKey={3.4}>Separated link</MenuItem>
						</NavDropdown>
					</Nav>
				</Navbar>;


				<Route exact path="/bio/books" component={Books} />
				<Route exact path="/bio/french" component={French} />

			</div>
		);
	}
}

export default Bio;

