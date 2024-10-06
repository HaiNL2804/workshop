// import { Router } from "express";
// import { getProduct } from "../controllers/prooduct";

import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/prooduct";
// const router = Router();

// router.get("/products", getProduct);

// export default router;

const router = Router();
// router.get("/products", getProducts);
router.get("/products", getProducts); //Lấy ds sp
router.post("/products", createProduct); // Thêm 1 sp
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", updateProduct);
router.get("/products/:id", getProductById);

export default router;
