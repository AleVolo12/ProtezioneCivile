import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "piloti"
})


/*const dbBackend = mysql.createConnection({
    host:"sql780.main-hosting.eu",
    user:"u221049142_pc",
    password:"protezione_civile_5INF2",
    database:"u221049142_anagrafiche_pc"
})*/

app.use(express.json())
app.use(cors())

// Funzione legata al db piloti, da startare su XAMPP
app.get("/prova", (req, res)=>{
    const q = "SELECT * FROM piloti"
    db.query(q, (err, data)=>{
        if (err) return res.json(err)
        else return res.json(data)
    })
})

app.get("/test2", (req, res)=>{
    const q = "SELECT nome FROM piloti"
    db.query(q, (err, data) =>{
        if (err) return res.json(err)
        else return res.json(data)
    })
})

app.post("/prova", (req, res)=>{
    const q = "INSERT INTO piloti (matricola, nome, cognome, numero, sigla, gare, vittorie, campionati) VALUES (?)"
    const values = [
        req.body.matricola,
        req.body.nome,
        req.body.cognome,
        req.body.numero,
        req.body.sigla,
        req.body.gare,
        req.body.vittorie,
        req.body.campionati
    ]

    db.query(q, [values], (err, data)=>{
        if(err) return res.json(err)
        else return res.json(data)
    })

})

// tabella da implementare: credenziali utente

app.listen(8800, ()=>{
    console.log("Connected to backend!")
})