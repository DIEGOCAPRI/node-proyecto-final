import * as model from "../models/products.models.js";

export const getProducts = async (req, res)=>{
    res.json(await model.getProducts());
}

export const getProductById = async (req,res) => {
    
    const {id} = req.params;

    if(!id){
        return res.status(400).json({error : "Ruta errónea"});
    }

    const product = await model.getProductById(id);

    if (!product) {
        return res.status(400).json({error : "Producto no encontrado"})
    }

    res.json(product);
}

export const createProduct = async (req, res) => {
    

    if (typeof req.body.nombre == undefined || typeof req.body.categoria == undefined ||
        typeof req.body.descripcion == undefined || typeof req.body.marca == undefined ||
        typeof req.body.precio == undefined || typeof req.body.stock == undefined
    ) {
       return res.status(422).json({error : "Campos obligatorios incompletos"});
    }

    if (req.body.precio <= 0 || req.body.stock <= 0) {
        return res.status(422).json({error: "Stock y precio deben ser mayores a 0"});
    }

    const {categoria, descripcion, marca, nombre, precio, stock} = req.body;

    const product = await model.createProduct({categoria, descripcion, marca, nombre, precio, stock});

    res.status(201).json(product);
}

export const deleteProduct = async (req,res)=>{
    const {id} = req.params;

    if(!id){
        return res.status(400).json({error : "Ruta errónea"});
    }

    const product = await model.deleteProduct(id);

    if (!product) {
        return res.status(404).json({error : "Producto no encontrado"})
    }

    res.json({mensaje : "Producto eliminado"});
}

export const updateProduct = async (req,res)=>{
    const {id} = req.params;
    const {categoria, descripcion, marca, nombre, precio, stock} = req.body;

    if(!id){
        return res.status(400).json({error : "Ruta errónea"});
    }

    const product = await model.updateProduct(id,{categoria, descripcion, marca, nombre, precio, stock});

    if (!product) {
        return res.status(404).json({error : "Producto no encontrado"})
    }

    res.status(200).json({mensaje : "Producto actualizado", producto: product});

}