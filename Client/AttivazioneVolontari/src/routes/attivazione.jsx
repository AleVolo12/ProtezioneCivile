import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useState } from "react";

import NavBar from "./navbar"
import Titolo from "./titolo";

import "../css/attivazione.css"

import img_home from "../assets/home.png"
import img_attivazione from "../assets/attivazione-colorato.png"
import img_group from "../assets/gruppo.png"
import img_logo from "../assets/logo.png"

function Attivazione(){

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAeUKUcHfUggTlFd-kR_5vmUuM16Rtfmxg",
  });

  const [indirirzzo, setIndirizzo] = useState("");
  const [coordinate, setCoordinate] = useState("");

  return(

    <div className="attivazione">

      <div className="titolo">
        <Titolo nomePagina={"Segnalazione"} />
      </div>

      <div className="mappa">
      </div>

      <div className="info">
        <input className="input" type="text" name='indirizzo' placeholder='Inserisci indirizzo...'/>
        <input className="input" type="text" name='coordinate' placeholder='Inserisci coordinate...'/>
      </div>  
   
      <div className="bottom-navbar">
        <NavBar home={img_home} attivazione={img_attivazione} account={img_group}/>
      </div>
    </div>
  )
  
}

export default Attivazione