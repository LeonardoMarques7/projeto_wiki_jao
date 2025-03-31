import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faShareNodes,
	faPlay,
} from "@fortawesome/free-solid-svg-icons";
import SongList from "../components/SongList";
import Albuns from "../components/Albuns";

const Album = (name) => {
	return (
		<>
			<section className="album__container">
				<div className="actions__link">
					<a href="/" className="albuns__return">
						<FontAwesomeIcon icon={faChevronLeft} /> Voltar para todos os álbuns
					</a>
				</div>
				<div className="card">
					<img src="./" alt="Foto do Álbum" className="card__image" />
					<div className="card__description">
						<h4 className="card__info">Álbum • 2018</h4>
						<h2 className="card__title">Lobos</h2>
						<p className="card__paragraph">
							O álbum de estreia de Jão, lançado em 2018, que o colocou no mapa
							da música pop brasileira com hits como 'Álvaro' e 'Imaturo'.
						</p>
						<div className="actions__card">
							<button className="card-button__play">
								<FontAwesomeIcon icon={faPlay} /> Ouvir Agora
							</button>
							<button className="card-button__share">
								<FontAwesomeIcon icon={faShareNodes} /> Compartilhar
							</button>
						</div>
						<div className="card__data">
							<p className="data__text">8 faixas</p>
							<p className="data__text">Aproximadamente 35 min</p>
						</div>
					</div>
				</div>
			</section>

			{/* Listagem das faixas */}
			<SongList />

			{/* Informações sobre o álbum */}
			<section className="about__container">
				<div className="col-about">
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
				<div className="col-info">
					<p className="col-info--text">
						<strong>Lançamento: </strong>
						2018
					</p>
					<p className="col-info--text">
						<strong>Gravadora: </strong>
						Universal Music Brasil
					</p>
					<p className="col-info--text">
						<strong>Produção: </strong>
						Pedro Tófani, Zebu
					</p>
					<p className="col-info--text">
						<strong>Gênero: </strong>
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
