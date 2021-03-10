import React from "react";
import Header from "../components/Header";
import Loading from "../components/Loading";

function Home() {
	return (
		<div className="header">
			<Header />
			<Loading />
		</div>
	);
}

export default Home;
