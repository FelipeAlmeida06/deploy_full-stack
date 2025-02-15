/* Fetch ou Axios */

import axios from "axios";

const URL = "http://localhost:3002";  // endpoint da api

const responseArtists = await axios.get(`${URL}/artists`);   // string template

const responseSongs = await axios.get(`${URL}/songs`);   // string template

export const artistArray = responseArtists.data;

export const songsArray = responseSongs.data;

//console.log(artistArray);
//console.log(songsArray);