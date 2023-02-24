const express = require("express")
const {createPost} = require("../controller/Posts.js")
const router = express.Router()

router.post("/insert",createPost)
router.gert()

module.exports = router