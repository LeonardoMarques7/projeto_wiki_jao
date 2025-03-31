import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import bg__image from "../assets/banner_1.jpg";

const Home = () => {
	return (
		<section
			className="bg__image h-svh flex flex-col mt-10 text-2xl text-center gap-10 bg-center bg-cover"
			style={{
				backgroundImage: `url(${bg__image})`,
			}}
		>
			<div className="main__texts pt-35 text-white text-center flex flex-col gap-10">
				<h1 className="main__title text-6xl uppercase font-bold">Jão</h1>
				<p className="main__paragraph">
					Cantor e compositor, é um dos maiores nomes da música pop brasileira
					atual
				</p>
				<a
					href="#"
					className="main__icon mt-25 bg-white text-black w-[50px] h-[50px] flex items-center justify-center rounded-full m-auto"
				>
					<FontAwesomeIcon icon={faChevronDown} />
				</a>
			</div>
		</section>
	);
};

export default Home;
