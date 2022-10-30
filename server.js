import express from "express";
//importing async error depndancy for error handling
import "express-async-errors";
//dotenv for enviroment variables
import dotenv from "dotenv";
dotenv.config();
//creating an express app
const app = express();
//importing morgan for logging requests
import morgan from "morgan";
//importing database connection
import connectDB from "./db/connect.js";
//importing for getting the static files from build folder
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
//importing security depandecies
import helmet from helmet
import xss from 'xss-clean'
import mongoSanitize from 'express-mongo-sanitize'

//routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";
//json parser middleware
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(express.json());
//invoking the security depandecies
app.use(helmt())
app.use(xss())
app.use(mongoSanitize())

app.get("/api/v1", (req, res) => {
  res.json({ msg: "welcome!" });
});
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Server is listening on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
