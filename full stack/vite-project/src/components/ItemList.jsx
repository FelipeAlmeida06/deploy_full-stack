import React from "react";

import SingleItem from "./SingleItem";

import { Link, useLocation } from "react-router-dom";

// arrow function
const ItemList = ({title, items, itemsArray, path, idPath}) => {    // props

    //console.log(title);
    //console.log(items);

    const {pathname} = useLocation();
    const isHome = pathname === "/";
    const finalItems = isHome ? items : Infinity; 

    return (
        <div>
            
            <div className="item-list">
                <div className="item-list__header">
                    <h2>{title} populares</h2>

                    {/* só mostra se estiver na página Home */}
                    {isHome ? (
                        <Link className="item-list__link" to={path}>Mostrar tudo</Link>
                    ): (
                        <></>
                    )}
                    
                </div>

                <div className="item-list__container">

                    {/* itemsArray pode ser array de artistas ou array de músicas */}
                    {itemsArray
                    .filter((currentValue, index) => index < finalItems)
                    .map((currObj, index) => (
                    <SingleItem
                    //id={currObj.id}
                    //name={currObj.name}
                    //image={currObj.image}
                    //banner={currObj.banner}
                    idPath={idPath}
                    {...currObj}
                    key={`${title}-${index}`} /> 
                    ))}

                </div>
            </div>

        </div>
    );
}

export default ItemList
