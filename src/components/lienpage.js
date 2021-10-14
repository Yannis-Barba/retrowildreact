import React from 'react';

function LienPage({link, pageName}){
    return (
        <a href={link} className="lienPage">{pageName}</a>
    );

}

export default LienPage; 