import React, { useState, useEffect } from "react";
import "./Fotos.css";
import image_foto from "../assets/fotos/foto1.png";
import image_foto2 from "../assets/fotos/foto2.jpg";
import image_foto3 from "../assets/fotos/foto3.jpg";
import image_foto4 from "../assets/fotos/foto4.jpg";
import image_foto5 from "../assets/fotos/foto5.jpg";
import image_foto6 from "../assets/fotos/foto6.jpg";
import image_foto7 from "../assets/fotos/foto7.png";
import image_foto8 from "../assets/fotos/foto8.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ScrollReveal from "scrollreveal";

const Fotos = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeImage, setActiveImage] = useState(null);

	// Travar/destravar o scroll do body
	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "auto";
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isOpen]);

	useEffect(() => {
		ScrollReveal().reveal(".widget", { interval: 50, duration: 2000 });
	}, []);

	const imagens = [
		image_foto,
		image_foto2,
		image_foto3,
		image_foto4,
		image_foto5,
		image_foto6,
		image_foto7,
		image_foto8,
	];

	const abrirImagem = (img) => {
		setActiveImage(img);
		setIsOpen(true);
	};

	const fecharModal = () => {
		setIsOpen(false);
		setActiveImage(null);
	};

	return (
		<section className="fotos__container mt-10">
			<div className="max-w-[1400px] m-auto justify-center container--fotos">
				<h2 className="title__container--fotos">Galeria de Fotos</h2>
				<ul className="fotos__list grid grid-cols-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
					{imagens.map((img, index) => (
						<li
							key={index}
							className="fotos__item bg-red-500 cursor-pointer transition-all ease-in-out duration-500 widget"
							style={{
								backgroundImage: `url(${img})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
							onClick={() => abrirImagem(img)}
						>
							<FontAwesomeIcon
								icon={faChevronRight}
								className="foto__icon text-white"
							/>
						</li>
					))}
				</ul>

				{/* Modal */}
				{isOpen && (
					<div
						className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
						onClick={fecharModal}
					>
						{/* Previne o clique na imagem de fechar o modal */}
						<img
							src={activeImage}
							alt="Foto ampliada"
							className="rounded-lg shadow-lg max-w-[90%] max-h-[90%]"
							onClick={(e) => e.stopPropagation()}
						/>
					</div>
				)}
			</div>
		</section>
	);
};

export default Fotos;
