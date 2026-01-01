import mongoose from "mongoose";

const urlschema = new mongoose.Schema({
    fullurl: {
        type: String,
        required: true
    },
    shortcode: {
        type: String,
        required: true,
        unique: true
    },
    clicks: {
        type: Number,
        default: 0
    }
}, { timestamps: true }
);

const url = mongoose.model("Url", urlschema);

export default url;