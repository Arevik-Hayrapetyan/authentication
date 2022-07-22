import express from "express";
import cors from "cors";

const app = express();
const accessKey = process.env.ACCESS_TOKEN;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.set("port", process.env.PORT);
app.set("accessKey", accessKey);

export default app;
