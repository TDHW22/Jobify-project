import express from "express";
//importing async error depndancy for error handling
import "express-async-errors";
//dotenv for enviroment variables
import dotenv from "dotenv";
dotenv.config();
//creating an express app
const app = express();

//importing database connection
import connectDB from "./db/connect.js";

//routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
//json parser middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome!");
});
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`app is listening on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
