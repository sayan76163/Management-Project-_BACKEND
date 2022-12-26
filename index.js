const express = require('express');
require("./connection");
const app = express();
const bodyParser= require('body-parser');
app.use(express.urlencoded());
app.use(express.json());
const port = 5000;
const Student = require("./models")
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post("/v1/myClass", async(req,res)=> {
    try{
        const createStudentsRecord  = new Student(req.body)
       const stu = await createStudentsRecord.save();
       res.status(201).send(stu);
    }catch(e){
        res.status(201).send(e);

    }
});

app.get("/v1/myClass", async(req,res)=>{
    try{
        const getStu = await Student.find({});
        res.send(getStu);

    }catch(e){
        res.status(400).send(e);
    }
})

app.get("/v1/myClass/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const getStud = await Student.findById({_id:id});
        res.send(getStud);
    }catch(e){
        res.status(400).send(e);

    }
})

app.put("/v1/myClass/:id", async(req,res)=>{
    try{
        const _id =req.body;
        const getStud = await Student.findByIdUpdate(req.body);
        res.send(getStud);
    }catch(e){
        res.status(400).send(e);

    }
})
app.delete("/v1/myClass/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const getStud = await Student.findByIdAndDelete(req.params.id);
        res.send(getStud);
    }catch(e){
        res.status(400).send(e);

    }
})


app.listen(port, ()=> console.log(`App listening on port ${port}`));

module.exports = app;
