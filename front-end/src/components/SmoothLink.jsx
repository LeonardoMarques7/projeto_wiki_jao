import React from "react";

const SmoothLink = ({ to, children, className = "" }) => {
	const handleClick = (e) => {
		e.preventDefault();
		if (window.location.pathname !== "/") {
			window.location.href = `/#${to}`;
		} else {
			const element = document.getElementById(to);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	};

	return (
		<button className={className} onClick={handleClick}>
			{children}
		</button>
	);
};

export default SmoothLink;
