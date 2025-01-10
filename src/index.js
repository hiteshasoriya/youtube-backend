import dotenv from "dotenv";        // require('dotenv').config({path: './env})

dotenv.config({
    path: './env'
})                                 // if user don't want to import like this then user can changes in package file like this ->    


import { app } from "./app.js";
import connectDB from "./db/index.js";

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 3000, ()=> {
        console.log(`Server is running at port : ${process.env.PORT}`);
        
    })
})
.catch((error)=> {
    console.log("MONGO db connection failed !!", error);
    
})








