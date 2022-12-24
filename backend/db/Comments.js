const mongoose = require("mongoose")

const commentsSchema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "UserAuth"
    },
    comment: {
        type: String,
        required: false
    },
    postId: {
        type: mongoose.Types.ObjectId,
        ref: "post"
    },
    status: {
        type: Number,
        default: 1
    }
}, { timestamps: true })

module.exports = mongoose.model("comments", commentsSchema)