import { Router } from "express";
import { getProducts,
         getProductById,
         createProduct,
         deleteProduct,
         updateProduct
 } from "../controllers/products.controller.js";
 import {login} from "../controllers/login.controller.js";
 import {auth} from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/login", login);
router.get("/products",auth, getProducts);
router.get("/products/:id", getProductById);
router.post("/product/alta", createProduct);
router.delete("/product/delete/:id", deleteProduct);
router.put("/product/update/:id", updateProduct);



export default router;