import React from 'react';
import Tile from './tile';
import yannis_barba from '../assets/yannis_barba.png';


function Body(){
    return (
        <div className="body">
            <Tile srcImg={yannis_barba} nomImg ="Yannis" nomGame="Yannis" descriptionGame="c'est moi" />
        </div>
    );
}

export default Body; 