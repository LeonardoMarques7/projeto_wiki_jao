import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import bg__image from "../assets/banner_1.jpg";

const Home = () => {
	return (
		<div>
			<img
				className=" flex flex-col text-2xl text-center gap-10 bg-center bg-cover relative top-0 left-0 right-0 object-cover w-full bg__image"
				src={bg__image}
			></img>
		</div>
	);
};

export default Home;
