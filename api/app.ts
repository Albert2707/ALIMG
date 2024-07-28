import express from "express";
import cors from "cors";
import photosRouter from "./routes/photos/photos.routes";
import userRouter from "./routes/users/users.routes";
import morgan from "morgan";
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use(photosRouter);
app.use(userRouter);
app.use("/", (req, res) => {
  return res.status(404).json({ msg: "not found" });
});
app.set("port", 8001);
app.listen(app.get("port"), () => {
  console.log(`Listening on port ${app.get("port")}`);
});
