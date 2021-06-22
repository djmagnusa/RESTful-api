const express = require('express');
require("./db/conn");
const Student = require("./models/students");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json())
// app.get("/", (req, res) => {
//     res.send("hello from the other side")
// })


//create a new student
app.post("/students", (req, res) => {
    console.log(req.body);
    const user = new Student(req.body)
    user.save().then(() => { //to save into database and this returns a promise
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })

    // res.send("testing")
})

app.listen(port, () => {
    console.log(`Connection is setup at ${port}`);
})