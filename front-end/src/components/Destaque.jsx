import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronRight,
	faInfo,
	faInfoCircle,
	faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import image_foto from "../assets/album__super.png";
import image_foto2 from "../assets/album__pirata.png";
import image_foto3 from "../assets/album__lobos.jpg";
import "./Destaques.css";
import { Link } from "react-router";

const Destaque = () => {
	return (
		<section className="destaque__container flex mt-10 h-svh items-center justify-between">
			<div className="destaque__card px-10 flex flex-col gap-5 max-w-[700px]">
				<p className="destaque__pill text-red-400 font-bold w-[175px] rounded-full px-3 py-1 bg-blue-100">
					Último Lançamento
				</p>
				<h2 className="destaque__title--big text-4xl uppercase font-bold">
					Super (2023)
				</h2>
				<p className="destaque__texts text-[20px] text-gray-500">
					O quarto álbum de estúdio de Jão, "SUPER", lançado em 2023, explora
					temas de superação, identidade e transformação. Com uma sonoridade que
					mistura pop, elementos eletrônicos e influências dos anos 80, o álbum
					marca uma nova fase na carreira do artista.
				</p>
				<div className="destaque__actions flex gap-5">
					<Link
						to="https://open.spotify.com/intl-pt/album/66R0BPV3pIJCpOWjAc1MBD?si=1Q4ValC1S0--q8v0GT2p5w"
						className="destaque-button__play bg-black text-white px-5 py-2.5 rounded-md hover:bg-gray-900 duration-300 cursor-pointer"
					>
						<FontAwesomeIcon icon={faPlay} /> Ouvir Agora
					</Link>
					<Link
						to="https://jao.fandom.com/pt-br/wiki/SUPER_(%C3%A1lbum)"
						className="destaque-button__details border px-5 py-2.5 rounded-md hover:bg-gray-200 duration-300 cursor-pointer"
					>
						<FontAwesomeIcon icon={faInfoCircle} /> Ver Detalhes
					</Link>
				</div>
				<div className="destaque__info flex gap-5">
					<div className="destaques__likes">
						<FontAwesomeIcon icon={faHeart} className="text-red-500" /> 12.5M
					</div>
					<div className="destaques__faixas">11 faixas</div>
					<div className="destaques__duration">42 min</div>
				</div>
			</div>
			<div className="destaque__container--images mx-10">
				<img src={image_foto} alt="Foto do Jão" className="destaque__image" />
				<img
					src={image_foto2}
					alt="Foto do Jão"
					className="destaque__image--two"
				/>
				<img
					src={image_foto3}
					alt="Foto do Jão"
					className="destaque__image-three"
				/>
			</div>
		</section>
	);
};

export default Destaque;
