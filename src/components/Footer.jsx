import React from "react";

const Footer = () => {
	return (
		<footer className="footer__container">
			<div className="footer__section-links">
				<div className="footer__card">
					<h2 className="footer__title">Jão Wiki</h2>
					<p className="footer__texts">
						Entre os versos de Jão, encontramos a lição de que ser quem somos,
						sem máscaras, é a única maneira de realmente pertencer ao mundo.
					</p>
				</div>
				<div className="footer__card">
					<h2 className="footer__title">Links Úteis</h2>
					<ul className="footer__card--links">
						<li className="footer__item">
							<a href="#" className="footer__link">
								Álbuns
							</a>
						</li>
						<li className="footer__item">
							<a href="#" className="footer__link">
								Fotos
							</a>
						</li>
						<li className="footer__item">
							<a href="#" className="footer__link">
								Biografia
							</a>
						</li>
						<li className="footer__item">
							<a href="#" className="footer__link">
								Shows
							</a>
						</li>
					</ul>
				</div>
				<div className="footer__card">
					<h2 className="footer__title">Redes Socias</h2>
					<ul className="footer__card--links">
						<li className="footer__item">
							<a href="#" className="footer__link">
								Instagram
							</a>
						</li>
						<li className="footer__item">
							<a href="#" className="footer__link">
								Twitter
							</a>
						</li>
						<li className="footer__item">
							<a href="#" className="footer__link">
								YouTube
							</a>
						</li>
						<li className="footer__item">
							<a href="#" className="footer__link">
								Spotify
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="footer__bottom-texts">
				<p className="bottom-texts">
					© 2025 JÃO WIKI. Todos os direitos reservados.
				</p>
				<p className="bottom-texts">
					Este é um site de fãs não oficial e não está afiliado ao artista ou
					sua gravadora.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
