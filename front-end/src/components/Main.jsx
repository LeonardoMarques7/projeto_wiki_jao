import React from "react";
import Home from "./Home";
import Fotos from "./Fotos";
import Destaque from "./Destaque";
import Biography from "./Biography";
import Shows from "./Shows";
import Header from "./Header";
import Albuns from "./Albuns";
import Footer from "./Footer";
import "./Main.css";
import { albunsArray } from "../assets/database/Albuns";
import { showsArray } from "../assets/database/Shows";

const Main = () => {
	return (
		<>
			<main className="main__container">
				<section id="home">
					<Home />
				</section>

				{/* Álbuns */}
				<section id="albuns" className="scroll-m-25">
					<Albuns itemsArray={albunsArray} />
				</section>

				{/* Galeria de Fotos */}
				<section id="fotos" className="scroll-m-10">
					<Fotos />
				</section>

				{/* Destaques */}
				<section id="destaque">
					<Destaque />
				</section>

				{/* Biografia */}
				<section id="biography" className="scroll-m-5">
					<Biography />
				</section>

				{/* Shows */}
				<section id="shows" className="scroll-m-25">
					<Shows itemsArray={showsArray} />
				</section>
			</main>
		</>
	);
};

export default Main;
