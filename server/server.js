const express=require('express');
require('dotenv').config();
const db=require('./database');

const app=express();
const PORT=process.env.PORT||5000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post('/data',(req,res,next)=>{
    const {fname,lname,Fname,Mname,city,role,email,contact}=req.body;
    db.query('INSERT INTO data VALUES($1,$2,$3,$4,$5,$6,$7,$8)',[fname,lname,Fname,Mname,city,role,email,contact],(err,res)=>{
        if(err)
            throw err;
    });
})
app.get('/data',(req,res,next)=>{
    db.query('SELECT * from data',(err,rest)=>{
        if(err)
            throw err;
        res.json(rest.rows);
    })
})
app.listen(PORT,console.log(`Server running at ${PORT}`));