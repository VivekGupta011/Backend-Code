const express=require("express");
// calling this module
const app=express();
const cors = require("cors"); // Import the cors middleware
const userRouter = require("./routes/userRouter");
const windowRouter = require("./routes/windowRouter");
const mongoose=require("mongoose");

// Use cors middleware to allow requests from all origins
app.use(cors());

//this line parse data into json format so that out 'req.body()' can access for further process..
app.use(express.json());

app.use("/users",userRouter);
app.use("/window",windowRouter);

app.get("/",(req,res)=>{
    res.send("Hello Vivekk!")
})


mongoose.connect("mongodb+srv://vivekgupta987699:agHOVzIFmMaIOsqL@cluster0.zuddzcm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

.then(()=>{

    app.listen(5000,()=>{
        console.log("Server Started!");
    })
    

})
.catch((error)=>{
    console.log(error);
})
