import { getAlbuns } from "../../src/assets/database/Songs.jsx";
import { getSongs } from "../../src/assets/database/Songs.jsx";
import { getShows } from "../../src/assets/database/Shows.jsx";
import { db } from "./connect.js";

const albunsArray = await getAlbuns();
const songsArray = await getSongs();
const showsArray = await getShows();

const newAlbunsArray = albunsArray.map((currentAlbunstObj) => ({ ...currentAlbunstObj }));
const newSongsArray = songsArray.map((currentSongObj) => ({ ...currentSongObj }));
const newShowsArray = showsArray.map((currentShowsObj) => ({ ...currentShowsObj }));

// Agora você pode usar os arrays normalmente para popular o DB, etc.

const responseSongs = await db.collection("songs").insertMany(newSongsArray);
const responseAlbuns = await db
  .collection("albuns")
  .insertMany(newAlbunsArray);
const responseShows = await db
  .collection("shows")
  .insertMany(newShowsArray);

console.log(responseSongs);
console.log(responseAlbuns);
console.log(responseShows);

// console.log(newArtistArray);
// console.log(newSongsArray);
// console.log(songsArray);
