import { useState, useEffect } from "react";
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
	faBookOpen,
	faCamera,
	faCompactDisc,
	faTicket,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
	return (
		<>
			<li className="container__item text__home hidden">
				<Link to="/" className="item__link uppercase font-bold text-3xl">
					Jão Wiki
				</Link>
			</li>
			<header className="flex justify-between items-center w-full px-10 py-5 fixed ">
				<ul className="container__icon text__home__hidden--moblie">
					<li className="container__item">
						<Link to="/" className="item__link uppercase font-bold text-3xl ">
							Jão Wiki
						</Link>
					</li>
				</ul>
				<ul className="navagation__container flex justify-center gap-10	">
					<li className="container__item">
						<a href="/#albuns" className="item__link">
							Álbuns
						</a>
					</li>
					<li className="container__item">
						<a href="/#fotos" className="item__link">
							Fotos
						</a>
					</li>
					<li className="container__item">
						<a href="/#biography" className="item__link">
							Biografia
						</a>
					</li>
					<li className="container__item">
						<a href="/#shows" className="item__link">
							Shows
						</a>
					</li>
				</ul>
				<ul className="navagation__container--moblie gap-10	">
					<li className="container__item">
						<a href="/#albuns" className="item__link">
							<FontAwesomeIcon icon={faCompactDisc} />
						</a>
					</li>
					<li className="container__item">
						<a href="/#fotos" className="item__link">
							<FontAwesomeIcon icon={faCamera} />
						</a>
					</li>
					<li className="container__item">
						<a href="/#biography" className="item__link">
							<FontAwesomeIcon icon={faBookOpen} />
						</a>
					</li>
					<li className="container__item">
						<a href="/#shows" className="item__link">
							<FontAwesomeIcon icon={faTicket} />
						</a>
					</li>
				</ul>
				<div className="actions__header flex gap-2">
					<Link
						to="https://github.com/LeonardoMarques7"
						className="button__header bg-white rounded-md px-2.5 py-1 text-black border-1 border-blue-100"
					>
						<span className="icon__action">
							<FontAwesomeIcon icon={faGithub} />
						</span>{" "}
						<span className="text__action">Github</span>
					</Link>
					<Link
						to="https://www.linkedin.com/in/leonardo-emanuel-3695451a0/"
						className="button__header bg-black rounded-md px-2.5 py-1 text-white border-1 border-black"
					>
						<span className="icon__action">
							<FontAwesomeIcon icon={faLinkedin} />
						</span>{" "}
						<span className="text__action">Linkedin</span>
					</Link>
				</div>
			</header>
		</>
	);
};

export default Header;
