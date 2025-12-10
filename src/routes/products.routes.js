import { Router } from "express";
import { getProducts,
         getProductById,
         createProduct,
         deleteProduct,
         updateProduct
 } from "../controllers/products.controller.js";
 import {login} from "../controllers/login.controller.js";
 import {createUser} from "../controllers/user.controller.js";
 import {auth} from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/createuser", createUser)
router.post("/login", login);
router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/product/alta",auth, createProduct);
router.delete("/product/delete/:id",auth, deleteProduct);
router.put("/product/update/:id",auth, updateProduct);



export default router;