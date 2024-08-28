import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./routes/posts.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/post", router);

const PORT = process.env.PORT || 5000;

const MONGODB_URI =
  "mongodb+srv://vikashnayan06:G9JVso7mvu8yYHPr@cluster0.xy1oz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGODB_URI)
  .then(() =>
    app.listen(PORT, () =>
      console.log(
        `server is running at port ${PORT} \n.....Database is connected.....`
      )
    )
  )
  .catch((error) => console.log(error.message));
