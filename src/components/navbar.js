import React from 'react';
import LienPage from './lienpage';

function NavBar(){
    return (
        <div className="navBar">
            <LienPage link="" pageName="Home"/>
            <LienPage link="" pageName="Game"/>
            <LienPage link="" pageName="About Us"/>
            <LienPage link="" pageName="Contact"/>
        </div>
    );
}

export default NavBar; 