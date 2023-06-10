import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import connectDB from "./config/connectDB";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";

require("dotenv").config();

let app = express();
app.use(cors({ credentials: true, origin: true }));
// config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 2504;
// port === undefined => port = 2504

app.listen(port, () => {
  //callback
  console.log("BE NodeJs is running on port: " + port);
});
