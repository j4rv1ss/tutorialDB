const {Posts} = require("../models")

const createPost = async(req,res)=>{
    try {
        const data = req.body
       
       const post = await Posts.create(data)
       res.send(post)
    } catch (error) {
        res.send(error)
    }
}

module.exports = createPost