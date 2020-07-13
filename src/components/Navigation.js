import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
	return (
		<header className="header">
			<div className="title">React Movie App 2020</div>
			<div className="nav">
				<Link to="/">home</Link>
				<Link to="/about">about</Link>
			</div>
		</header>
	);
}

export default Navigation;