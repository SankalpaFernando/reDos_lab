const express = require('express');
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())


app.get("/",(req,res)=>{
    res.json({status:"good"})
})

app.post("/",(req,res)=>{
    const {name} = req.body;
    const regex = /(a+)+$/;

    const isValid = regex.test(name)

    res.json({data:{name,isValid}})
})

app.listen(5000,()=>console.log("Server Started"))