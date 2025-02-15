// mongodb+srv://dbUser:<db_password>@cluster0.8r5yu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


import {MongoClient} from "mongodb";

const URL = "mongodb+srv://dbUser:dbUserPassword@cluster0.8r5yu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URL);   // classe MongoClient

export const database = client.db("spotifyAula");

/* Testes Mongo Db */

//const songCollection = await database.collection("songs").find({}).toArray();

//console.log(database)
//console.log(songCollection);