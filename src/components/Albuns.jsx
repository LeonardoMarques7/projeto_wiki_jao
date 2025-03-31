import React from "react";

const Albuns = (namePath, name, image, data) => {
	return (
		<ul className="albuns__container">
			<li className="card__album" style={{ backgroundImage: { image } }}>
				<a href="#" className="card__link--container">
					<h3 className="card-album--title">Lobos</h3>
					<h3 className="card-album--texts">{data}</h3>
				</a>
			</li>
			<li className="card__album">
				<a href="#" className="card__link--container">
					<h3 className="card-album--title">Lobos</h3>
					<h3 className="card-album--texts">2018</h3>
				</a>
			</li>
			<li className="card__album">
				<a href={`${namePath}/${name}`} className="card__link--container">
					<h3 className="card-album--title">Lobos</h3>
					<h3 className="card-album--texts">2018</h3>
				</a>
			</li>
			<li className="card__album">
				<a href="#" className="card__link--container">
					<h3 className="card-album--title">Lobos</h3>
					<h3 className="card-album--texts">2018</h3>
				</a>
			</li>
		</ul>
	);
};

export default Albuns;
