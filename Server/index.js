import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"piloti"
})

app.get("/", (req, res)=>{
    res.json("hello this is back")
})

// Funzione legata al db piloti, da startare su XAMPP
app.get("/piloti", (req, res)=>{
    const q = "SELECT * FROM piloti"
    db.query(q, (err, data)=>{
        if (err) return res.json(err)
        else return res.json(data)
    })
})

app.listen(8800, ()=>{
    console.log("Connected to backend!")
})