import React from "react";

import ItemList from "./ItemList";

import { artistArray } from "../assets/database/artists";

import {songsArray} from "../assets/database/songs";

function Main ({type}) {

    return (
        <div className="main">

            {/* Item List de Artistas*/}
            {type === "artists" || type === undefined ? (
                <ItemList title="Artistas" items={20} itemsArray={artistArray} path='/artists' idPath="/artist"/>
            ) : (
                <></>  /* não mostra nada na tela */
            )}
            

            {/* Item List de Músicas */}
            {type === "songs" || type === undefined ? ( 
                <ItemList title="Músicas" items={20} itemsArray={songsArray} path='/songs' idPath="/song"/>
            ) : (
                <></> /* não mostra nada na tela */
            )}
            
            
        </div>
    );

}

export default Main
