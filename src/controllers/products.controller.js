import * as model from "../models/products.models.js";

export const getProducts = async (req, res)=>{
    res.json(await model.getProducts());
}

export const getProductById = (req,res) => {
    console.log('getById');
    res.send('dsesde getById');
}