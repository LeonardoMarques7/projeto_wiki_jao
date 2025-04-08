import React from "react";
import { Link } from "react-router";
import Main from "../components/Main";
import Home from "./Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const NotFound = () => {
	return (
		<div className="text-center flex justify-center items-center flex-col h-screen bg-black gap-10">
			<span className="not-found__texts text-white flex flex-col gap-5">
				<h1 className="text-5xl font-bold">404</h1>
				<p className="text-4xl">Página não encontrada</p>
				<p className="text-gray-600 max-w-[300px] m-auto">
					A página que você está procurando não existe ou foi movida.
				</p>
			</span>
			<span className="not-found__actions flex gap-5 text-white">
				<Link
					to={"/"}
					className="not-found__button rounded-md p-2 duration-300 ease-in-out"
				>
					<FontAwesomeIcon icon={faHome} />
				</Link>
				<Link
					to="https://github.com/LeonardoMarques7"
					className="not-found__button rounded-md p-2 duration-300 ease-in-out"
				>
					<FontAwesomeIcon icon={faGithub} />
				</Link>
				<Link
					to="https://www.linkedin.com/in/leonardo-emanuel-3695451a0/"
					className="not-found__button rounded-md p-2 duration-300 ease-in-out"
				>
					<FontAwesomeIcon icon={faLinkedin} />
				</Link>
			</span>
		</div>
	);
};

export default NotFound;
