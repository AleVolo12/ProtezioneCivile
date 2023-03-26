import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";

import NavBar from "./navbar"
import Titolo from "./titolo"

import axios from 'axios'

import "../css/account.css"

import img_home from "../assets/home.png"
import img_attivazione from "../assets/attivazione.png"
import img_group from "../assets/gruppo-colorato.png"

function Account(){

  const [piloti, setPiloti] = useState([])

  useEffect(()=>{
    const fetchAllBooks = async ()=>{
      try{
        const res = await axios.get("http://localhost:8800/prova")
        setPiloti(res.data)
        console.log(res)
      } catch (err){
        console.log(err)
      }
    }
    fetchAllBooks()
  })

  return(
    <div className="home">
      <div className="titolo">
        <Titolo nomePagina="Account"/>
      </div>
      <div className="piloti">
        {piloti.map((pilota) => (
          <div className="pilota">
            <h2>{pilota.nome} {pilota.cognome}</h2>
            <p>{pilota.numero} {pilota.sigla}</p>
          </div>
        ))}
      </div>
      <div className="bottom-navbar">
        <NavBar home={img_home} attivazione={img_attivazione} account={img_group}/>
      </div>
    </div>
  )
  
  

}

export default Account