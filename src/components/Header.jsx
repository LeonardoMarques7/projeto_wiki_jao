import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<header>
			<ul className="navagation__container">
				<li className="container__item">
					<a href="#" className="item__link">
						Jão Wiki
					</a>
				</li>
				<li className="container__item">
					<a href="#" className="item__link">
						Álbuns
					</a>
				</li>
				<li className="container__item">
					<a href="#" className="item__link">
						Fotos
					</a>
				</li>
				<li className="container__item">
					<a href="#" className="item__link">
						Biografia
					</a>
				</li>
				<li className="container__item">
					<a href="#" className="item__link">
						Shows
					</a>
				</li>
			</ul>
		</header>
	);
};

export default Header;
