import React from "react";
import "./Albuns.css";
import image_album_lobos from "../assets/album__lobos.jpg";
import image_album_anti_heroi from "../assets/album__anti-heroi.jpg";
import image_album_pirata from "../assets/album__pirata.png";
import image_album_super from "../assets/album__super.png";

const Albuns = (namePath, name, image, data) => {
	return (
		<div className="max-w-[1400px] albuns__container-pm">
			<h2 className="title__container--album">Álbuns</h2>
			<ul className="albuns__container flex gap-5 justify-between">
				<li
					className="card__album"
					style={{
						backgroundImage: `url(${image_album_lobos})`,
					}}
				>
					<a href="#" className="card__link--container">
						<h3 className="card-album--title font-bold">Lobos</h3>
						<h3 className="card-album--texts">2018</h3>
					</a>
				</li>
				<li
					className="card__album"
					style={{
						backgroundImage: `url(${image_album_anti_heroi})`,
					}}
				>
					<a href="#" className="card__link--container">
						<h3 className="card-album--title font-bold">Anti-Herói</h3>
						<h3 className="card-album--texts">2019</h3>
					</a>
				</li>
				<li
					className="card__album "
					style={{
						backgroundImage: `url(${image_album_pirata})`,
					}}
				>
					<a href={`${namePath}${name}`} className="card__link--container">
						<h3 className="card-album--title font-bold">Pirata</h3>
						<h3 className="card-album--texts">2021</h3>
					</a>
				</li>
				<li
					className="card__album"
					style={{
						backgroundImage: `url(${image_album_super})`,
					}}
				>
					<a href="super" className="card__link--container">
						<h3 className="card-album--title font-bold">Super</h3>
						<h3 className="card-album--texts">2023</h3>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Albuns;
