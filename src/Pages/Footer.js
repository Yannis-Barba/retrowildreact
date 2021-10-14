import React from "react";
import linkedin from "../assets/linkedin.svg"
import github from "../assets/github.svg"


const Footer = () => {
    return (
    
    <div className="footer">

      <a href=""> <img className="Linkedin-Logo" src={linkedin} alt="Logo Linkedin"/> </a>

      <p>© 2021 Copyright: WildCodeSchool/error500</p>

      <a href=""> <img className="Git-Hub-Logo" src={github} alt="Logo Git-Hub"/> </a> 

    </div>

    )
}

export default Footer; 

