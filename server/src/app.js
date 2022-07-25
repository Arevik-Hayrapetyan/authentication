import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const accessKey = process.env.ACCESS_TOKEN;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.set("port", process.env.PORT);
app.set("accessKey", accessKey);

export default app;
