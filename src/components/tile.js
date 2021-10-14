import React from "react";

function Tile({srcImg, nomImg}){
    return (
        <div className="tile">
            <img src={srcImg} alt={nomImg}></img>
            <h2 className="nomGame"></h2>

        </div>
    );
}

export default Tile; 