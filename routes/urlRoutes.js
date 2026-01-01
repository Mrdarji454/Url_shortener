import express from "express";
import {
    createshorturl,
    redirectToFullUrl,
    getAllUrls
} from "../controllers/urlcontroller.js";

const router = express.Router();

/** Home + list all urls */
router.get("/", getAllUrls);
router.post("/shorten", createshorturl);
router.get("/:shortcode", redirectToFullUrl);

export default router;