import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import productRouter from "./routers/product";
import morgan from "morgan";

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
//routers
app.use("/api", productRouter);

// Kết nối MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/xuong")
  .then(() => console.log("Kết nối MongoDB thành công!"))
  .catch((err) => console.error("Lỗi kết nối MongoDB:", err));

// Khởi chạy server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});

export const viteNodeApp = app;
