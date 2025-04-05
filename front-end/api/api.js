// api.js
import axios from "axios";

const URL = "https://projeto-music.onrender.com/api";

export let albunsArray = [];
export let songsArray = [];
export let showsArray = [];

export const dataPromise = (async () => {
  try {
    const [responseAlbuns, responseSongs, responseShows] = await Promise.all([
      axios.get(`${URL}/albuns`),
      axios.get(`${URL}/songs`),
      axios.get(`${URL}/shows`)
    ]);

    albunsArray = responseAlbuns.data;
    songsArray = responseSongs.data;
    showsArray = responseShows.data;
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
  }
})();
