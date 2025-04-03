import React from "react";
import "./Albuns.css";
import SingleItem from "./SingleItem";

const Albuns = ({ itemsArray, idDelete }) => {
	const safeItemsArray = Array.isArray(itemsArray) ? itemsArray : [];

	return (
		<div className="max-w-[1400px] albuns__container-pm" id="Home">
			<h2 className="title__container--album">Álbuns</h2>
			<ul className="albuns__container grid grid-cols-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 justify-between">
				{safeItemsArray
					.filter((currObj) => currObj?._id !== idDelete)
					.map((currObj, index) => (
						<SingleItem {...currObj} key={currObj?._id || index} />
					))}
			</ul>
		</div>
	);
};

export default Albuns;
