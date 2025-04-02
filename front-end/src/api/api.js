import axios from "axios";

const URL = "http://localhost:3000/api";

const responseAlbuns = await axios.get(`${URL}/albuns`);
const responseSongs = await axios.get(`${URL}/songs`);
const responseShows = await axios.get(`${URL}/shows`);

export const albunsArray = responseAlbuns.data;
export const songsArray = responseSongs.data;
export const showsArray = responseShows.data;