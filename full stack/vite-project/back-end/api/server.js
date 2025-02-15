/* API é a sigla em inglês para Application Programming Interface, 
que significa Interface de Programação de Aplicativos  */

import express from "express";

import cors from "cors";

import {artistArray} from "../../src/assets/database/artists.js";   // importamos arquivo javascript do front-end

import {songsArray} from "../../src/assets/database/songs.js";   // importamos arquivo javascript do front-end

import {database} from "./connect.js";

const app = express();
const PORT = 3002;

app.use(cors());

// endpoint ou rota da api
app.get('/', (req, res) => {
    res.send("Só vamos trabalhar com os endpoint '/artists' e '/songs'");
});


// artists
// endpoint '/artists'
app.get('/artists', async(req, res) => {
    res.send(await database.collection("artists").find({}).toArray());   // artistArray retorna todos os dados
});

// songs
// endpoint '/songs'
app.get('/songs', async(req, res) => {
    res.send(await database.collection("songs").find({}).toArray());     // songsArray retorna todos os dados
});


app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta ${PORT}`);
});
