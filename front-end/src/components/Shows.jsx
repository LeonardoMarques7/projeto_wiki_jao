import React from "react";
import "./Shows.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faTicket } from "@fortawesome/free-solid-svg-icons";
import ShowItem from "./ShowItem";

const Shows = ({ itemsArray }) => {
	const safeItemsArray = Array.isArray(itemsArray) ? itemsArray : [];

	return (
		<section className="shows__container">
			{safeItemsArray.map((currObj, index) => (
				<ShowItem {...currObj} key={currObj?._id || index} />
			))}
		</section>
	);
};

export default Shows;
