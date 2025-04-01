import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./Songlist.css";

const SongList = () => {
	return (
		<section className="songs_container p-10">
			<h2 className="songs__title">Faixas</h2>
			<ul className="songs__list flex flex-col">
				<li className="song__item border-2 px-5 py-2.5 flex gap-5 items-center rounded-md justify-between border-transparent hover:border-gray-300 hover:bg-blue-100 duration-300 ease-in-out">
					<span className="texts__song flex items-center gap-5">
						<p className="item__num">1</p>
						<p className="item__title">Imaturo</p>
					</span>
					<div className="actions__song flex justify-end gap-5">
						<button className="item__button cursor-pointer">
							<FontAwesomeIcon icon={faPlay} />
						</button>
						<p className="item__duration text-gray-500">3:24</p>
					</div>
				</li>
			</ul>
		</section>
	);
};

export default SongList;
