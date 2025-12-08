import * as model from "../models/products.models.js";

export const getProducts = async (req, res)=>{
    res.json(await model.getProducts());
}

export const getProductById = async (req,res) => {
    
    const {id} = req.params;

    if(!id){
        return res.status(400).json({error : "Ruta inexistente"});
    }

    const product = await model.getProductById(id);

    if (!product) {
        return res.status(400).json({error : "Producto no encontrado"})
    }

    res.json(product);
}