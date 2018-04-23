import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => 
	<nav className="navbar navbar-default">
		<div className="container-fluid">
			{/*<div className="navbar-header">
				<Link className="navbar-brand" to="/">
				Sip-Happens
				</Link>
			</div>*/}
			<ul className="nav navbar-nav">
				{/*link in the navbar to the home page*/}
				<li className={window.location.pathname === "/home" ? "active"	: ""}>
				<Link className="navlink" to="/home">Home</Link>
				</li>

				{/*link in the navbar to the quiz*/}
				<li className={window.location.pathname === "/quiz" ? "active" : ""}>
				<Link className="navlink" to="/quiz">Quiz</Link>
				</li>

				{/*link in the navbar to the facts page*/}
				<li className={window.location.pathname === "/facts" ? "active" : ""}>
				<Link className="navlink"  to="/facts">Facts</Link>
				</li>

				<li className={window.location.pathname === "/winelist" ? "active" : ""}>
				<Link className="navlink" to="/winelist">Wine List</Link>
				</li>
			</ul>
		</div> 
	</nav>

	export default Navbar;