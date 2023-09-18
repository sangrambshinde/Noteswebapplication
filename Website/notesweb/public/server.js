const express=require('express');
const mysql=require('mysql');
const core=require('core');

const app=express();

app.use(core());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"login"
})

app.post('/login',(req,res)=>{
    const sql="select * from login Where username= ? AND password=?";
    const values=[

        req.body.email,
        req.body.password

    ]
       db.query(sql,[values],(err,data)=>{
        if(err) return res.json("Login Field");
        return res.json(data)
       })
       

    
})

app.listen(8081,()=>{
    console.log("Listening...");
})