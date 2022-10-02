import express from "express";
//dotenv for enviroment variables
import dotenv from "dotenv";
dotenv.config();
//creating an express app
const app = express();

//middleware
import notFoundMiddleware from "./middleware/not-found.js";

app.get("/", (req, res) => {
  res.send("welcome!");
});

app.use(notFoundMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`app is listening on port: ${port}`));
