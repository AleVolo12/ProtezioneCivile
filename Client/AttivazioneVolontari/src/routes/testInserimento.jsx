import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "./navbar"
import Titolo from "./titolo"

import axios from 'axios'

import "../css/account.css"

import img_home from "../assets/home.png"
import img_attivazione from "../assets/attivazione.png"
import img_group from "../assets/gruppo-colorato.png"

const Add = () => {
    const[pilota, setPilota] = useState({
        matricola: null,
        nome: "",
        cognome: "",
        numero: null,
        sigla: "",
        gare: null,
        vittore: null,
        campionati: null,
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        setPilota((prev) => ({ ...prev, [e.target.name]: e.target.value}))
    }
    
    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/prova", pilota)
            navigate("/home")
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="testLogin">
            <h1>Aggiungi nuovo pilota</h1>
            <input type="number" placeholder="matricola" onChange={handleChange} name="matricola"/>
            <input type="text" placeholder="nome" onChange={handleChange} name="nome"/>
            <input type="text" placeholder="cognome" onChange={handleChange} name="cognome"/>
            <input type="number" placeholder = "numero" onChange={handleChange} name ="numero"/>
            <input type="text" placeholder="sigla" onChange={handleChange} name="sigla"/>
            <input type="number" placeholder = "gare" onChange={handleChange} name ="gare"/>
            <input type="number" placeholder = "vittorie" onChange={handleChange} name ="vittorie"/>
            <input type="number" placeholder = "campionati" onChange={handleChange} name ="campionati"/>
            <button onClick={handleClick}>AGGIUNGI</button>
        </div>
    );
}

export default Add