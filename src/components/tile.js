import React from "react";

function Tile({srcImg, nomImg, nomGame, descriptionGame}){
    return (
        <div className="tile">
            <img src={srcImg} alt={nomImg}></img>
            <h2 className="nomGame">{nomGame}</h2>
            <p className="descriptionGame">{descriptionGame}</p>
        </div>
    );
}

export default Tile; 