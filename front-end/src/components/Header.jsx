import { useState, useEffect } from "react";
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsVisible(window.scrollY > 40);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className="flex justify-between items-center top-0 w-full px-5 py-5">
			<ul className="container__icon">
				<li className="container__item">
					<Link to="/" className="item__link uppercase font-bold text-3xl">
						Jão Wiki
					</Link>
				</li>
			</ul>
			<ul className="navagation__container flex ml-15 gap-10	">
				<li className="container__item">
					<a href="#albuns" className="item__link">
						Álbuns
					</a>
				</li>
				<li className="container__item">
					<a href="#fotos" className="item__link">
						Fotos
					</a>
				</li>
				<li className="container__item">
					<a href="#biography" className="item__link">
						Biografia
					</a>
				</li>
				<li className="container__item">
					<a href="#shows" className="item__link">
						Shows
					</a>
				</li>
			</ul>
			<div className="actions__header flex gap-2">
				<Link
					to="https://github.com/LeonardoMarques7"
					className="button__header bg-white rounded-md px-2.5 py-1 text-black border-1 border-blue-100"
				>
					Github
				</Link>
				<Link
					to="https://www.linkedin.com/in/leonardo-emanuel-3695451a0/"
					className="button__header bg-black rounded-md px-2.5 py-1 text-white border-1 border-black"
				>
					Linkedin
				</Link>
			</div>
		</header>
	);
};

export default Header;
