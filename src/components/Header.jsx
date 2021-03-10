import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="container flex">
			<div className="">
				<h2>Dhera.dev</h2>
			</div>
			<div className="">
				<ul className="flex">
					<li>
						<Link to="/">Work</Link>
					</li>
					<li>
						<Link to="/">About</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;
