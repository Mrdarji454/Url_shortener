import url from "../models/url.js";

//* post, / shorten

export const createshorturl = async (req, res) => {
    try {
        const { fullurl, shortcode } = req.body;

        //*validate
        if (!fullurl || !shortcode) {
            return res.status(400).send("all fields are reqired");
        };

        //*check duplicate shortcode
        const exists = await url.findOne({ shortcode })
        if (exists) {
            return res.status(409).send("shortcod eis already exists");
        };

        //*save to database
        await url.insertOne({ fullurl, shortcode });

        //*redirect back to home
        res.redirect("/");

    } catch (error) {
        console.log(error);
        res.status(500).send("internal server error");
    };
};

/**
 * GET /:shortcode
 * redirect to links
 */
export const redirectToFullUrl = async (req, res) => {
    try {
        const { shortcode } = req.params;

        const Url = await url.findOne({ shortcode });
        if (!Url) {
            return res.status(404).send("page is not found");
        };

        Url.clicks++;
        await Url.save();

        res.redirect(Url.fullurl);
    } catch (error) {
        console.log(error);
        res.status(500).send("internal server error");
    };
};

/**
 * GET all urls (for listening)
 */
export const getAllUrls = async (req, res) => {
    try {
        const Urls = await url.find();
        res.render("index", { Urls });
    } catch (error) {
        console.log(error)
        res.status(500).send("server error");
    }
}