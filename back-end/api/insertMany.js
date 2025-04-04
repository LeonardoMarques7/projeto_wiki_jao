import { albunsArray } from "../../front-end/src/assets/database/Albuns.js";
import { songsArray } from "../../front-end/src/assets/database/Songs.js";
import { showsArray } from "../../front-end/src/assets/database/Shows.js";
import { db } from "./connect.js";

const newAlbunsArray = albunsArray.map((currentAlbumObj) => {
  const newAlbumObj = { ...currentAlbumObj };
  return newAlbumObj;
});

const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongObj = { ...currentSongObj };
  return newSongObj;
});

const newShowsArray = showsArray.map((currentShowObj) => {
  const newShowObj = { ...currentShowObj };
  return newShowObj;
});

const responseSongs = await db.collection("songs").insertMany(newSongsArray);
const responseAlbuns = await db
  .collection("albuns")
  .insertMany(newAlbunsArray);
const responseShows = await db
  .collection("shows")
  .insertMany(newShowsArray);

console.log(responseSongs);
console.log(responseShows);
console.log(responseAlbuns);