import {artistArray} from "../../src/assets/database/artists.js";

import {songsArray} from "../../src/assets/database/songs.js";

import { database } from "./connect.js";

// preenche o banco de dados
const newArtistArray = artistArray.map((currentArtistObj) => {
    const newArtistObj = {...currentArtistObj};
    delete newArtistObj.id;   // deletamos o id 
    
    return newArtistObj;
});

const newSongsArray = songsArray.map((currentSongsObj) => {
    const newSongsObj = {...currentSongsObj};
    delete newSongsObj.id;   // deletamos o id 
    
    return newSongsObj;
});


const resArtists = await database.collection("artists").insertMany(newArtistArray);   // insere todos os dados de sons

const resSongs = await database.collection("songs").insertMany(newSongsArray);   // insere todos os dados de artistas


console.log(resArtists);
console.log(resSongs);