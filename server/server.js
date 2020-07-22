const express=require('express');
const db=require('./database');

const app=express();
const PORT=process.env.PORT||5000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post('/data',(req,res,next)=>{
    console.log(req.data);
})
app.get('/data',(req,res,next)=>{
    res.json();
})
app.listen(PORT,console.log(`Server running at ${PORT}`));