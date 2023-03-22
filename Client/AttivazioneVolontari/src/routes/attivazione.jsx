import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from "./navbar"
import "../css/attivazione.css"

import img_home from "../assets/home.png"
import img_attivazione from "../assets/attivazione-colorato.png"
import img_group from "../assets/gruppo.png"

function Attivazione(){
  return(
    <div className="home">
      <div className="bottom-navbar">
        <NavBar home={img_home} attivazione={img_attivazione} account={img_group}/>
      </div>
    </div>
  )
  
  

}

export default Attivazione