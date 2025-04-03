import React from "react";
import "./Fotos.css";
import image_foto from "../assets/fotos/foto1.png";
import image_foto2 from "../assets/fotos/foto2.jpg";
import image_foto3 from "../assets/fotos/foto3.jpg";
import image_foto4 from "../assets/fotos/foto4.jpg";
import image_foto5 from "../assets/fotos/foto5.jpg";
import image_foto6 from "../assets/fotos/foto6.jpg";
import image_foto7 from "../assets/fotos/foto7.png";
import image_foto8 from "../assets/fotos/foto8.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Fotos = () => {
	return (
		<section className="fotos__container mt-10">
			<div className="max-w-[1400px] m-auto justify-center container--fotos ">
				<h2 className="title__container--fotos">Galeria de Fotos</h2>
				<ul className="fotos__list grid grid-cols-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
					<li
						className="fotos__item bg-red-500"
						style={{
							backgroundImage: `url(${image_foto})`,
						}}
					>
						<FontAwesomeIcon icon={faChevronRight} className="foto__icon" />
					</li>
					<li
						className="fotos__item bg-red-900"
						style={{
							backgroundImage: `url(${image_foto2})`,
						}}
					>
						<FontAwesomeIcon icon={faChevronRight} className="foto__icon" />
					</li>
					<li
						className="fotos__item bg-red-500"
						style={{
							backgroundImage: `url(${image_foto3})`,
						}}
					>
						<FontAwesomeIcon icon={faChevronRight} className="foto__icon" />
					</li>
					<li
						className="fotos__item bg-red-900"
						style={{
							backgroundImage: `url(${image_foto4})`,
						}}
					>
						<FontAwesomeIcon icon={faChevronRight} className="foto__icon" />
					</li>
					<li
						className="fotos__item bg-red-500"
						style={{
							backgroundImage: `url(${image_foto5})`,
						}}
					>
						<FontAwesomeIcon icon={faChevronRight} className="foto__icon" />
					</li>
					<li
						className="fotos__item bg-red-900"
						style={{
							backgroundImage: `url(${image_foto6})`,
						}}
					>
						<FontAwesomeIcon icon={faChevronRight} className="foto__icon" />
					</li>
					<li
						className="fotos__item bg-red-500"
						style={{
							backgroundImage: `url(${image_foto7})`,
						}}
					>
						<FontAwesomeIcon icon={faChevronRight} className="foto__icon" />
					</li>
					<li
						className="fotos__item bg-red-900"
						style={{
							backgroundImage: `url(${image_foto8})`,
						}}
					>
						<FontAwesomeIcon icon={faChevronRight} className="foto__icon" />
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Fotos;
