import React, { createContext, useContext, useEffect, useState } from "react";
import { carregarDadosAlbuns } from "../assets/database/Albuns";
import { carregarDadosShows } from "../assets/database/Shows";
import { carregarDadosSongs } from "../assets/database/Songs";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const [albuns, setAlbuns] = useState([]);
	const [shows, setShows] = useState([]);
	const [songs, setSongs] = useState([]);
	const [carregando, setCarregando] = useState(true);
	const [erro, setErro] = useState(null);

	useEffect(() => {
		async function carregarDados() {
			try {
				const [dadosAlbuns, dadosShows, dadosSongs] = await Promise.all([
					carregarDadosAlbuns(),
					carregarDadosShows(),
					carregarDadosSongs(),
				]);

				setAlbuns(dadosAlbuns);
				setShows(dadosShows);
				setSongs(dadosSongs);
			} catch (err) {
				console.error("Erro ao carregar dados:", err);
				setErro(err);
			} finally {
				setCarregando(false);
			}
		}

		carregarDados();
	}, []);

	return (
		<DataContext.Provider value={{ albuns, shows, songs, carregando, erro }}>
			{children}
		</DataContext.Provider>
	);
};
