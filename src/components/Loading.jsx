import React, { useEffect, useState } from "react";
import { animated, useTransition } from "react-spring";

function Loading() {
	const [items, setItems] = useState([
		{ id: 0, text: "Loadin'" },
		{ id: 1, text: "i am a boy'" },
		{ id: 2, text: "Lokuhfdfnmadin'" },
		{ id: 3, text: "site din' din' din' loadin'" },
	]);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((state) => (state + 1) % items.length);
		}, 4000);
		return () => clearInterval(interval);
	}, []);

	const transitions = useTransition(items[index], (item) => item.id, {
		from: { /**position: "absolute"*/ opacity: 1 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: { duration: 7000 },
		// config: { tension: 220, friction: 120 },
	});
	return (
		<div>
			{transitions.map(({ item, props, key }) => (
				<animated.div key={key} style={{ ...props, position: "absolute" }}>
					<h1>{item.text}</h1>
				</animated.div>
			))}
		</div>
	);
}

export default Loading;
