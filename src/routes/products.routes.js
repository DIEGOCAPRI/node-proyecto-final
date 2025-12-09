import { Router } from "express";
import { getProducts,
         getProductById,
         createProduct,
         deleteProduct,
         updateProduct
 } from "../controllers/products.controller.js";

const router = Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/product/alta", createProduct);
router.delete("/product/delete/:id", deleteProduct);
router.put("/product/update/:id", updateProduct)


export default router;