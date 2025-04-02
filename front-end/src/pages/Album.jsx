import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faShareNodes,
	faPlay,
} from "@fortawesome/free-solid-svg-icons";
import SongList from "../components/SongList";
import Albuns from "../components/Albuns";
import image_foto from "../assets/album__lobos.jpg";
import "./Album.css";

const Album = (name) => {
	console.log(name);
	return (
		<>
			<section className="album__container flex flex-col gap-5 pt-25 p-10 bg-blue-100">
				<div className="actions__link">
					<a href="/" className="albuns__return">
						<FontAwesomeIcon icon={faChevronLeft} /> Voltar para todos os álbuns
					</a>
				</div>
				<div className="card flex">
					<div className="album__image--container">
						<img src={image_foto} alt="Foto do Jão" className="album__image" />
						<img
							src={image_foto}
							alt="Foto do Jão"
							className="album__image--two"
						/>
						<img
							src={image_foto}
							alt="Foto do Jão"
							className="album__image-three"
						/>
					</div>
					<div className="card__description flex flex-col gap-5 ml-10">
						<h4 className="card__info bg-blue-200 rounded-full w-[120px] flex items-center justify-center">
							Álbum • 2018
						</h4>
						<h2 className="card__title text-5xl font-extrabold">Lobos</h2>
						<p className="card__paragraph text-gray-500 text-[18px] max-w-[700px]">
							O álbum de estreia de Jão, lançado em 2018, que o colocou no mapa
							da música pop brasileira com hits como 'Álvaro' e 'Imaturo'.
						</p>
						<div className="actions__card flex gap-5">
							<button className="card-button__play bg-black border-2 rounded-md px-4 py-2 border-black text-white flex items-center gap-3 cursor-pointer hover:bg-gray-900 duration-300 ease-in-out hover:border-gray-900">
								<FontAwesomeIcon icon={faPlay} /> Ouvir Agora
							</button>
							<button className="card-button__share bg-gray-100 border-2 rounded-md px-4 py-2 border-gray-300 flex items-center gap-3 cursor-pointer hover:bg-gray-400 duration-300 ease-in-out hover:border-gray-400">
								<FontAwesomeIcon icon={faShareNodes} /> Compartilhar
							</button>
						</div>
						<div className="card__data text-gray-500 flex gap-5">
							<p className="data__text">8 faixas</p>
							<p className="data__text">Aproximadamente 35 min</p>
						</div>
					</div>
				</div>
			</section>

			{/* Listagem das faixas */}
			<SongList />

			{/* Informações sobre o álbum */}
			<section className="about__container p-10 bg-blue-100 text-gray-500 flex gap-10">
				<div className="col-about max-w-[700px]">
					<h2 className="about__title">Sobre o Álbum</h2>
					<p className="about__text">
						O álbum de estreia de Jão, lançado em 2018, que o colocou no mapa da
						música pop brasileira com hits como 'Álvaro' e 'Imaturo'. Este álbum
						representa um momento importante na carreira de Jão, mostrando sua
						evolução como artista e compositor.
					</p>
					<p className="about__text">
						Com produção cuidadosa e arranjos que mesclam elementos pop com
						influências diversas,Lobos conquistou tanto o público quanto a
						crítica especializada.Lobos conquistou tanto o público quanto a
						crítica especializada.
					</p>
					<p className="about__text">
						As letras abordam temas pessoais e universais, criando uma conexão
						profunda com os ouvintes e estabelecendo Jão como um dos
						compositores mais talentosos de sua geração.
					</p>
				</div>
				<div className="col-info flex flex-col gap-2">
					<h2 className="about__title">Informações</h2>
					<p className="col-info--text">
						<strong className="text-black">Lançamento: </strong>
						2018
					</p>
					<p className="col-info--text">
						<strong className="text-black">Gravadora: </strong>
						Universal Music Brasil
					</p>
					<p className="col-info--text">
						<strong className="text-black">Produção: </strong>
						Pedro Tófani, Zebu
					</p>
					<p className="col-info--text">
						<strong className="text-black">Gênero: </strong>
						Pop, Indie Pop
					</p>
				</div>
			</section>

			{/* Outros Álbuns */}
			<Albuns name={name} />
		</>
	);
};

export default Album;
