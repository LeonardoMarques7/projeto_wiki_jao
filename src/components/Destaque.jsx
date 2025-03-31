import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Destaque = () => {
	return (
		<section className="destaque__container">
			<div className="destaque__card">
				<p className="destaque__pill"></p>
				<h2 className="destaque__title--big">Super (2023)</h2>
				<p className="destaque__texts">
					O quarto álbum de estúdio de Jão, "SUPER", lançado em 2023, explora
					temas de superação, identidade e transformação. Com uma sonoridade que
					mistura pop, elementos eletrônicos e influências dos anos 80, o álbum
					marca uma nova fase na carreira do artista.
				</p>
				<div className="destaque__actions">
					<button>
						<FontAwesomeIcon icon={faPlay} /> Ouvir Agora
					</button>
					<button>
						Ver Detalhes <FontAwesomeIcon icon={faChevronRight} />
					</button>
				</div>
				<div className="destaque__info">
					<div className="destaques__likes">
						<FontAwesomeIcon icon={faHeart} />
						12.5M
					</div>
					<div className="destaques__faixas">11 faixas</div>
					<div className="destaques__duration">42 min</div>
				</div>
			</div>
			<div className="destaque__container--images">
				<img src="./" alt="Foto do Jão" className="destaque__image" />
				<img src="./" alt="Foto do Jão" className="destaque__image--two" />
				<img src="./" alt="Foto do Jão" className="destaque__image-three" />
			</div>
		</section>
	);
};

export default Destaque;
