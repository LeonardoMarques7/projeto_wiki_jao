import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer__container flex flex-col m-10">
			<div className="footer__section-links flex">
				<div className="footer__card flex flex-col max-w-[700px]">
					<h2 className="footer__title font-bold uppercase mb-5">Jão Wiki</h2>
					<code className=" text-gray-600">" Ela entrou nos meus braços</code>
					<code className="footer__texts text-gray-600">
						E indicou o caminho
					</code>
					<code className="footer__texts text-gray-600">
						Disse no meu ouvido
					</code>
					<code className="footer__texts text-gray-600">
						Não vai morrer sozinho. "
					</code>
				</div>
				<div className="footer__card mx-10 w-[300px] ">
					<h2 className="footer__title font-bold">Links Úteis</h2>
					<ul className="footer__card--links flex flex-col gap-2 my-5">
						<li className="footer__item text-gray-600">
							<a href="#" className="footer__link">
								Álbuns
							</a>
						</li>
						<li className="footer__item text-gray-600">
							<a href="#" className="footer__link">
								Fotos
							</a>
						</li>
						<li className="footer__item text-gray-600">
							<a href="#" className="footer__link">
								Biografia
							</a>
						</li>
						<li className="footer__item text-gray-600">
							<a href="#" className="footer__link">
								Shows
							</a>
						</li>
					</ul>
				</div>
				<div className="footer__card flex-1/2">
					<h2 className="footer__title font-bold">Redes Socias</h2>
					<ul className="footer__card--links flex flex-col gap-2 my-5">
						<li className="footer__item text-gray-600">
							<a href="#" className="footer__link">
								Instagram
							</a>
						</li>
						<li className="footer__item text-gray-600">
							<a href="#" className="footer__link">
								Twitter
							</a>
						</li>
						<li className="footer__item text-gray-600">
							<a href="#" className="footer__link">
								YouTube
							</a>
						</li>
						<li className="footer__item text-gray-600">
							<a href="#" className="footer__link">
								Spotify
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="footer__bottom-texts border-t-2 border-gray-300 p-10 text-center">
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
