import React from "react";
import "./Shows.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faTicket } from "@fortawesome/free-solid-svg-icons";

const Shows = () => {
	return (
		<section className="shows__container">
			<div className="show__card">
				<h3 className="show__data">12 Maio 2025</h3>
				<div className="show__location">
					<h4 className="font-bold show__title">Allianz Parque</h4>
					<h4 className="show__city">São Paulo, SP</h4>
				</div>
				<div className="show__action">
					<button className="show__button--info">Mais informações</button>
					<button className="show__button--buy">Comprar Ingressos</button>
				</div>
			</div>
			<div className="show__card">
				<h3 className="show__data">18 Maio 2025</h3>
				<div className="show__location">
					<h4 className="font-bold show__title">Jeunesse Arena</h4>
					<h4 className="show__city">Rio de Janeiro, RJ</h4>
				</div>
				<div className="show__action">
					<button className="show__button--info">Mais informações</button>
					<button className="show__button--buy">Comprar Ingressos</button>
				</div>
			</div>
			<div className="show__card">
				<h3 className="show__data">24 Maio 2025</h3>
				<div className="show__location">
					<h4 className="font-bold show__title">Mineirão</h4>
					<h4>Belo Horizonte, MG</h4>
				</div>
				<div className="show__action">
					<button className="show__button--info">Mais informações</button>
					<button className="show__button--buy">Comprar Ingressos</button>
				</div>
			</div>
			<div className="show__card">
				<h3 className="show__data">31 Maio 2025</h3>
				<div className="show__location">
					<h4 className="font-bold show__title">Pedreira Paulo Leminski</h4>
					<h4 className="show__city">Curitiba, PR</h4>
				</div>
				<div className="show__action">
					<button className="show__button--info">Mais informações</button>
					<button className="show__button--buy">Comprar Ingressos</button>
				</div>
			</div>
			<div className="show__card">
				<h3 className="show__data">07 Junho 2025</h3>
				<div className="show__location">
					<h4 className="font-bold show__title">Arena do Grêmio</h4>
					<h4 className="show__city">Porto Alegre, RS</h4>
				</div>
				<div className="show__action">
					<button className="show__button--info">
						<FontAwesomeIcon icon={faCircleInfo} /> Mais informações
					</button>
					<button className="show__button--buy">
						<FontAwesomeIcon icon={faTicket} /> Comprar Ingressos
					</button>
				</div>
			</div>
		</section>
	);
};

export default Shows;
