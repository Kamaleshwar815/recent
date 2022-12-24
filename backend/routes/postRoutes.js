const express = require("express");
const Post = require("../db/Post");
const router = express.Router();
const jwtAuth = require("../lib/jwtAuth");

router.post("/create", jwtAuth, async (req, res) => {
    try {
        const { image, description } = req.body
        let user = req.user
        console.log(image)
        const newPost = new Post({
            image,
            description,
            "userId": user._id
        })
        await newPost.save()

        return res.status(200).json({
            "status": true,
            "data": "post created successfully"
        })
    } catch (err) {
        return res.status(400).json({
            "status": false,
            "message": err
        })
    }
});

router.get("/listPost", jwtAuth, async (req, res) => {
    try {
        const getPost = await Post.find({ status: 1 }).sort({ createdAt: -1 }).populate({ "path": "userId", "model": "UserAuth" })

        return res.status(200).json({
            "status": true,
            "data": getPost
        })
    } catch (err) {
        return res.status(400).json({
            "status": false,
            "message": err
        })
    }
});

module.exports = router;
