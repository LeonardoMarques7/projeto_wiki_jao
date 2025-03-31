import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const SongList = () => {
	return (
		<section className="songs_container">
			<h2 className="songs__title">Faixas</h2>
			<ul className="songs__list">
				<li className="song__item">
					<p className="item__num">1</p>
					<p className="item__title">Imaturo</p>
					<button className="item__button">
						<FontAwesomeIcon icon={faPlay} />
					</button>
					<p className="item__duration">3:24</p>
				</li>
			</ul>
		</section>
	);
};

export default SongList;
