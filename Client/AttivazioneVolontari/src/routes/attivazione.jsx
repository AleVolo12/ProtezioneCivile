import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NavBar from "./navbar"
import Titolo from "./titolo";

import "../css/attivazione.css"

import img_home from "../assets/home.png"
import img_attivazione from "../assets/attivazione-colorato.png"
import img_group from "../assets/gruppo.png"
import img_logo from "../assets/logo.png"

function Attivazione(){
  return(
    <div className="attivazione">
      <div className="titolo">
        <Titolo nomePagina={"Segnalazione"} />
      </div>
      <div className="bottom-navbar">
        <NavBar home={img_home} attivazione={img_attivazione} account={img_group}/>
      </div>
    </div>
  )
  
  

}

export default Attivazione