const express = require("express")

// const post = require("./models/Posts.js")
const db = require("./models")
const app = express()



 db.sequelize.sync().then(()=>{
    app.listen(3000,()=>{
        console.log("server running on port 3000")
    })
 })