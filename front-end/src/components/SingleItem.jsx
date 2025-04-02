import React from "react";
import { Link } from "react-router-dom";
import "./Albuns.css";
import "../pages/Album";

const SingleItem = ({ _id, name, release_date, image }) => {
	return (
		<li className="card__album" style={{ backgroundImage: `url(${image})` }}>
			<Link to={`/pages/${_id}`} className="card__link--container">
				<h3 className="card-album--title font-bold">{name}</h3>
				<h3 className="card-album--texts">{release_date}</h3>
			</Link>
		</li>
	);
};

export default SingleItem;
