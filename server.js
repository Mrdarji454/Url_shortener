import express, { urlencoded } from "express";
import connectDb from "./config/db.js";
import urlroutes from "./routes/urlRoutes.js";
import dotenv from "dotenv";
dotenv.config()


const app = express();

//connct databse
connectDb();

//middle ware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", urlroutes)

//app route test
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});

