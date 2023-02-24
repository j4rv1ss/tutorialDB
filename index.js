const express = require("express")

// const post = require("./models/Posts.js")
const db = require("./models")
const route = require("./routes/Posts.js")
const app = express()
app.use(express.json())
app.use("/",route)


 db.sequelize.sync().then(()=>{
    app.listen(3000,()=>{
        console.log("server running on port 3000")
    })
 })