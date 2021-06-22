const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopolgy: true
}).then(() => {  //connect returns a promise
    console.log("connection is successful");
}).catch((e) => {
    console.log("No connection");
})