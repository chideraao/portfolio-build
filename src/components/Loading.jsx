/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { animated, useTransition } from "react-spring";

function Loading() {
	const [items, setItems] = useState([
		{ id: 0, text: "Loadin'." },
		{ id: 1, text: "Loadin'.." },
		{ id: 2, text: "Loadin'..." },
		{ id: 3, text: "loadin' din' din' loadin'" },
	]);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((state) => (state + 1) % items.length);
		}, 4000);
		return () => clearInterval(interval);
	}, [items]);

	const transitions = useTransition(items[index], items.id, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		trail: 0,
		config: { tension: 2000, friction: 10, duration: 7000 },
	});
	return (
		<div className="container center-div">
			{transitions.map(({ item, props, key }) => (
				<animated.div key={key} style={{ ...props }}>
					<h1>{item.text}</h1>
				</animated.div>
			))}
		</div>
	);
}

export default Loading;
