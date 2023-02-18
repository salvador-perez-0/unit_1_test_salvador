const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const port = 3000


students = [
    {
        name:'salvador',
        age:'20'

    },
    {
        name:'emma',
        age:'23'
    },
    {
        name:'karen',
        age:'30'
    }
];
app.use(cors());
app.use(bodyParser.json({limit: "100mb"}));

app.get("/select", function(req, res) {

    res.send(students);
})

app.get("/selectOne", function(req, res) {

    const Names = students.names;
    if (Names == req.params.name){

    }


    res.send(students);
})

app.post("/add", function(req, res) {

    let newstudent = req.body;
    students.push(newstudent);
    res.send(students);

});

app.put("/update", function(req, res) {
   
    const Name = students.name;

    let newstudent = req.body;
    

    if (Name == req.body.name) {

        students.splice(students.indexOf(found),1);
        students.push(newstudent);
        res.send(students);
    }
    
    
});

app.delete("/delete", function(req, res){


    students.pop();
    res.send(students);
    

});


app.listen(port, ()=>{
    console.log("listening on port:", port);
});



