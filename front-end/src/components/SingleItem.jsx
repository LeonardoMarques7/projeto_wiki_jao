import React from "react";
import { Link } from "react-router-dom";
import "./SingleItem.css";
import "../pages/Album";

const SingleItem = ({ _id, name, release_date, image }) => {
	return (
		<Link to={`/pages/${_id}`} className="card__link--container">
			<li className="card__album" style={{ backgroundImage: `url(${image})` }}>
				<span className="texts__card">
					<h3 className="card-album--title font-bold">{name}</h3>
					<h3 className="card-album--texts">{release_date}</h3>
				</span>
			</li>
		</Link>
	);
};

export default SingleItem;
