import {
	faCircleInfo,
	faInfo,
	faInfoCircle,
	faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ShowItem = ({ data, location, city, state }) => {
	const formatDate = (data) => {
		const date = new Date(data);
		return new Intl.DateTimeFormat("pt-BR", {
			day: "2-digit",
			month: "long",
			year: "numeric",
		}).format(date);
	};

	return (
		<div className="show__card">
			<span className="header__card">
				<h3 className="show__data">{`${formatDate(data)}`}</h3>
				<div className="show__location">
					<h4 className="font-bold show__title">{location}</h4>
					<h4 className="show__city">{`${city} / ${state}`}</h4>
				</div>
			</span>
			<div className="show__action">
				<button className="show__button--info flex items-center gap-2">
					<FontAwesomeIcon icon={faInfo} /> Mais informações
				</button>
				<button className="show__button--buy flex items-center gap-2">
					<FontAwesomeIcon icon={faTicket} />
					Comprar Ingressos
				</button>
			</div>
		</div>
	);
};

export default ShowItem;
