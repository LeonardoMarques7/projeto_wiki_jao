import React from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faShareNodes,
	faPlay,
} from "@fortawesome/free-solid-svg-icons";
import SongList from "../components/SongList";
import Albuns from "../components/Albuns";
import "./Album.css";
import { albunsArray } from "../assets/database/Albuns";
import { songsArray } from "../assets/database/Songs";

const Album = () => {
	const { id } = useParams();
	const album = albunsArray.find((album) => album._id === id);

	const albumSongs = songsArray.filter((song) => song.album === album.name);

	if (!album) {
		return (
			<section className="album__container flex flex-col gap-5 p-10 bg-blue-100">
				<h2 className="text-3xl font-bold">Álbum não encontrado</h2>
				<Link to="/" className="albuns__return text-blue-500">
					Voltar para todos os álbuns
				</Link>
			</section>
		);
	}

	const formatDuration = (seconds) => {
		const minutes = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${minutes}:${secs.toString().padStart(2, "0")}`;
	};

	return (
		<>
			<section className="album__container flex flex-col gap-5 py-20 p-10 top-0 absolute left-0 right-0 bg-blue-100">
				<span className="max-w-[1400px] m-auto flex flex-col gap-5 w-full">
					<div className="actions__link mt-20">
						<Link to="/" className="albuns__return">
							<FontAwesomeIcon icon={faChevronLeft} /> Voltar para todos os
							álbuns
						</Link>
					</div>
					<div className="card flex justify-start gap-0">
						<div className="album__image--container">
							<img
								src={album.image}
								alt={album.name}
								className="album__image"
							/>
							<img
								src={album.image}
								alt={album.name}
								className="album__image--two"
							/>
							<img
								src={album.image}
								alt={album.name}
								className="album__image-three"
							/>
						</div>
						<div className="card__description flex flex-col gap-5 ml-10">
							<h4 className="card__info bg-blue-200 rounded-full w-[120px] flex items-center justify-center">
								Álbum • {album.release_date}
							</h4>
							<h2 className="card__title text-5xl font-extrabold">
								{album.name}
							</h2>
							<p className="card__paragraph text-gray-500 text-[18px] max-w-[700px] line-clamp-3">
								{album.description}
							</p>
							<div className="actions__card flex gap-5">
								<Link
									to={album.play_link}
									className="card-button__play bg-black border-2 rounded-md px-4 py-2 border-black text-white flex items-center gap-3 cursor-pointer hover:bg-gray-900 duration-300 ease-in-out hover:border-gray-900"
								>
									<FontAwesomeIcon icon={faPlay} /> Ouvir Agora
								</Link>
								<button className="card-button__share bg-gray-100 border-2 rounded-md px-4 py-2 border-gray-300 flex items-center gap-3 cursor-pointer hover:bg-gray-400 duration-300 ease-in-out hover:border-gray-400">
									<FontAwesomeIcon icon={faShareNodes} /> Compartilhar
								</button>
							</div>
							<div className="card__data text-gray-500 flex gap-5">
								<p className="data__text">Faixas {albumSongs.length}</p>
								<p className="data__text">
									Aproximadamente {formatDuration(album.duration)} min
								</p>
							</div>
						</div>
					</div>
				</span>
			</section>

			{/* Listagem das faixas */}
			<SongList songs={album.name} />

			{/* Informações sobre o álbum */}
			<section className="about__container p-10 bg-blue-100 text-gray-500 flex gap-10">
				<span className="max-w-[1400px] flex w-full justify-start m-auto gap-20">
					<div className="col-about max-w-[700px]">
						<h2 className="about__title">Sobre o Álbum</h2>
						<p className="about__text">{album.description}</p>
					</div>
					<div className="col-info flex flex-col gap-2">
						<h2 className="about__title">Informações</h2>
						<p className="col-info--text">
							<strong className="text-black">Lançamento: </strong>
							{album.release_date}
						</p>
						<p className="col-info--text">
							<strong className="text-black">Gravadora: </strong>
							{album.record_label}
						</p>
						<p className="col-info--text">
							<strong className="text-black">Produção: </strong>
							{album.production}
						</p>

						<p className="col-info--text">
							<strong className="text-black">Gênero: </strong>
							{album.genre}
						</p>
					</div>
				</span>
			</section>

			{/* Outros Álbuns */}
			<Albuns itemsArray={albunsArray} idDelete={album._id} />
		</>
	);
};

export default Album;
