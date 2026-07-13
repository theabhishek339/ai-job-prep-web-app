// components/Navbar.jsx
import React from "react";
import "./Navbar.scss";

function Navbar() {
	return (
		<div className="navbar-dock-container">
			<nav className="app-navbar-dock">
				<div className="navbar-brand">
					<span className="logo-spark">✦</span> AI JOB PREP
				</div>
				<div className="navbar-tabs">
					<button className="tab-item active">Home</button>
					<button className="tab-item">Features</button>
					<button className="tab-item">Pricing</button>
					<button className="tab-item">About</button>
				</div>
			</nav>
			{/* Dynamic SVG shadow injector to perfectly match the custom arc shape */}
			<div className="dock-shadow-injector"></div>
		</div>
	);
}

export default Navbar;
