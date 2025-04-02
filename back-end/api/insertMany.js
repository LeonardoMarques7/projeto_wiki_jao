import { albunsArray } from "../../src/assets/database/Albuns.js";
import { songsArray } from "../../src/assets/database/Songs.js";
import { showsArray } from "../../src/assets/database/Shows.js";
import { db } from "./connect.js";

const newAlbunsArray = albunsArray.map((currentAlbunstObj) => {
  const newAlbunsObj = { ...currentAlbunstObj };
  return newAlbunsObj;
});

const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongObj = { ...currentSongObj };

  return newSongObj;
});

const newShowsArray = showsArray.map((currentShowsObj) => {
  const newShowsObj = { ...currentShowsObj };

  return newShowsObj;
});

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
