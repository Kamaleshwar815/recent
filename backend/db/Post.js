const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "UserAuth"
    },
    image: {
        type: String,
        required: false
    },
    comments: [{
        type: mongoose.Types.ObjectId,
        ref: "comments"
    }],
    description: {
        type: String,
        required: false
    },
    status: {
        type: Number,
        default: 1
    }
}, { timestamps: true })

module.exports = mongoose.model("post", postSchema)