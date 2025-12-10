import * as model from "../models/user.models.js";

export const createUser = async (req,res) => {
    
    if(!req.body.email || !req.body.password){
        return res.status(422).json({message: "Email y password son obligatorios"});
    } 
      
    const {email, password} = req.body;

    const user = await model.createUser(email, password);

    if(!user){
         return res.status(409).json({message: "Ya existe un usuario creado para ese email"});
    }

    res.status(201).json({message: "usuario creado", user: user.email});
    
}