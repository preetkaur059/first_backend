import express from "express";
import Product from "../models/product.js";
import { createProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

router.post("/products", createProduct)

router.delete("/", () => {});

export default router;
