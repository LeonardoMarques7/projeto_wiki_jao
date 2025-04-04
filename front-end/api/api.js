import axios from "axios";

const URL = "https://projeto-wiki-jao.onrender.com/api";

const responseAlbuns = await axios.get(`${URL}/albuns`);
const responseSongs = await axios.get(`${URL}/songs`);
const responseShows = await axios.get(`${URL}/shows`);

export const albunsArray = responseAlbuns.data;
export const songsArray = responseSongs.data;
export const showsArray = responseShows.data;
