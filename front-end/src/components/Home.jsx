import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import bg__image from "../assets/banner_1.jpg";

const Home = () => {
	return (
		<>
			<section
				className="bg__image flex flex-col text-2xl text-center gap-10 bg-center bg-cover absolute bottom-0 left-0  right-0  h-full mb-70"
				style={{
					backgroundImage: `url(${bg__image})`,
				}}
			></section>
		</>
	);
};

export default Home;
