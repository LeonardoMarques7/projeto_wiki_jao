import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./Songlist.css";
import { songsArray } from "../assets/database/Songs";
import { albunsArray } from "../assets/database/Albuns";
import { Link } from "react-router";

const SongList = ({ songs }) => {
	const filteredSongs = songsArray.filter((song) => song.album === songs);

	const formatDuration = (seconds) => {
		const minutes = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${minutes}:${secs.toString().padStart(2, "0")}`;
	};

	return (
		<section className="songs_container p-10 mt-[50svh]">
			<h2 className="songs__title">Faixas</h2>
			<ul className="songs__list flex flex-col">
				{filteredSongs.length > 0 ? (
					filteredSongs.map((song, index) => (
						<li
							key={song.id}
							className="song__item border-2 px-5 py-2.5 flex gap-5 items-center rounded-md justify-between border-transparent hover:border-gray-300 hover:bg-blue-100 duration-300 ease-in-out"
						>
							<span className="texts__song flex items-center gap-5">
								<p className="item__num">{index + 1}</p>
								<p className="item__title">{song.name}</p>
							</span>
							<div className="actions__song flex justify-end gap-5">
								<Link
									to={song.play_link}
									className="item__button cursor-pointer"
								>
									<FontAwesomeIcon icon={faPlay} />
								</Link>
								<p className="item__duration text-gray-500">
									{formatDuration(song.duration)}
								</p>
							</div>
						</li>
					))
				) : (
					<p className="text-gray-500">
						Nenhuma música encontrada para este álbum.
					</p>
				)}
			</ul>
		</section>
	);
};

export default SongList;
