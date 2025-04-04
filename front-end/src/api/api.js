import axios from "axios";

const URL = "https://projeto-wiki-jao.onrender.com/api";

export async function loadData() {
  try {
    const responseAlbuns = await axios.get(`${URL}/albuns`);
    const responseSongs = await axios.get(`${URL}/songs`);
    const responseShows = await axios.get(`${URL}/shows`);

    const albunsArray = responseAlbuns.data;
    const songsArray = responseSongs.data;
    const showsArray = responseShows.data;

    return { albunsArray, songsArray, showsArray };
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return {
      albunsArray: [],
      songsArray: [],
      showsArray: []
    };
  }
}
